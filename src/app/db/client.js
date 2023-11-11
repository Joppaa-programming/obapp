import { QueryCommand, DynamoDBClient, PutItemCommand, DeleteItemCommand, GetItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { cleanData } from "../helpers/minifunctions";


const client = new DynamoDBClient({ region: "eu-west-2", credentials: { accessKeyId: "AKIARKLJLQFWXWDSOGOC", secretAccessKey: "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" } });

export const doclient = client

export async function createUserDb(name, email, image, bio, type) {
    console.log('put comand')
    const SK = `${email.replace(/\s/g, "").trim().toUpperCase()}`
    const userId = `USER#${SK}`
    console.log(userId)
    const input = {
        "Item": {
            "SK": { "S": SK },
            "PK": { "S": `USER#` },
            "userId": { "S": userId },
            "userName": { "S": name.trim() },
            "profileImage": { "S": image },
            "coverPhoto": { "S": "" },
            "bio": { "S": bio },
            "email": { "S": email.replace(/\s/g, "").trim() },
            "userType": { "S": type.trim() },
            // "date": { "S": Date.now },
            "walletId": { "S": userId }
        },
        // "ReturnConsumedCapacity": "TOTAL",
        "TableName": "originallyBlack"
    }
    const command = new PutItemCommand(input);
    console.log('put comand')
    const response = await doclient.send(command);
    console.log(response)
    return response;


}
export const createNewEntity = async (item) => {
    console.log('create new entity')
    const input = item
    try {
        const command = new PutItemCommand(input);
        const response = await doclient.send(command);
        //console.log(response)
        return response;
    } catch (err) {
        console.log(err)
        return 'Failed to add business';
    }

}

export const createBusiness = async (data) => {

    const SK = `${data.contactEmail.replace(/\s/g, "").trim().toUpperCase()}`
    //const {logo, coverimage, tags, businessName} = data
    const input = {
        "Item": {
            "SK": { "S": SK },
            "PK": { "S": `BUSINESS#` },
            "logo": { "S": data.logo },
            "image": { "S": data.coverimage },
            "category": { "S": data.tags },
            "businessName": { "S": data.businessName },
            "address": { "S": data.address },
            "description": { "S": data.description },
            "originId": { "L": [] }, // Empty list for originId
            "contactNumber": { "S": data.contactNumber },
            "contactEmail": { "S": SK }, // You can add type prefix if needed
            "userId": { "S": `USER#${SK}` }, // Adding type prefix to userId
            "isPortrait": { "S": data.isPortrait },
            "saves": { "S": "43000" }, // Assuming saves is a number
        },
        "TableName": "originallyBlack"
    }
    try {
        const command = new PutItemCommand(input);
        // console.log(command)
        const response = await doclient.send(command);
        return response;
    } catch (e) {
        return 'Failed to add business';
    }
}
export const createOrigin = async (data) => {
    const tags_ = data.tags.map((tag) => ({
        "S": tag
    }))
    const images_ = data.images.map((image) => ({
        "S": image
    }))
    const PK = `${data.email.replace(/\s/g, "").trim().toUpperCase()}`
    const id = uuidv4();
    const originId = `${id}`
    const SK = `${PK}${originId}`
    const input = {
        "Item": {
            "PK": { "S": `ORIGIN#` },
            "SK": { "S": SK },
            "id": { "S": originId },
            "images": { "L": images_ },
            "tags": { "L": tags_ },
            "title": { "S": data.title },
            "image": { "S": data.image },
            "isAd": { "BOOL": false },
            "saves": { "N": "0" },
            "businessName": { "S": data.businessName },
            "businessId": { "S": PK },
            "content": { "S": data.description },
            "likes": { "N": "0" },
            "shares": { "N": "0" },
            "views": { "N": "0" }
        },
        "TableName": "originallyBlack"
    }
    try {
        //  console.log(input);
        const command = new PutItemCommand(input);
        //   console.log(command)
        const response = await doclient.send(command);
       // console.log(response.$metadata.httpStatusCode)
        return SK;
    } catch (e) {
        console.log(e)
        return 'Failed to add Origin';
    }

}

export const getUserBusinesses = async (item) => {

    const input = item
    const command = new GetItemCommand(input);
    try {

        const { Item: response } = await doclient.send(command);
        //   console.log(response)
        return response;


    } catch (e) {
        console.log(e)
    }

}
export const getBusinessesOrigins = async (item) => {

    const input = item
    const command = new QueryCommand(input);
    try {
        const { Items: response } = await doclient.send(command);
        const newArray = response.map((item) => {

            const keysArray = Object.keys(item).reduce((acc, key) => {
                // console.log('testing',key, acc)
                if (item[key].S) {
                    acc[key] = item[key].S; // Extract the 'S' property
                } else if (item[key].N !== undefined) {
                    acc[key] = parseFloat(item[key].N); // Extract the 'N' property as a number
                } else if (item[key].BOOL !== undefined) {
                    acc[key] = item[key].BOOL; // Extract the 'BOOL' property
                } else if (item[key].L) {
                    acc[key] = item[key].L.map(item => item.S); // Extract the 'S' property from each item in 'L'
                } else {
                    acc[key] = item[key]; // Preserve the property as is if it's not 'S' or 'L'
                } // Extract the 'S' property
                return acc;
            }, {});
            //console.log(keysArray);
            return keysArray; // Assuming you want the first value in each object
        });
        return newArray;
    } catch (e) {
        console.log(e)
        return
    }

}

export const getOrigin = async (item) => {
    const input = item
    const command = new GetItemCommand(input);

    const { Item: response } = await doclient.send(command);

    return response;

}
export const getBusinesses = async (businessId) => {
    const input = {
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
            ":pk": { S: "BUSINESS#" }
        },
        TableName: "originallyBlack"
    }
    const command = new QueryCommand(input);
    //   console.log(command)
    const response = await doclient.send(command);
   const _data =  cleanData(response.Items)
    return _data;
}

export const deleteOrigins = async (id) => {

    console.log('test', id);
    const input = {
        "Key": {
            "PK": {
                "S": "ORIGIN#"
            },
            "SK": {
                "S": id
            }
        },
        "TableName": "originallyBlack"
    };
    const command = new DeleteItemCommand(input);
    const { Item: response } = await doclient.send(command);
    return
}
export const getOrigins = async () => {
    const input = {
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
            ":pk": { S: "ORIGIN#" }
        },
        TableName: "originallyBlack"
    }
    const command = new QueryCommand(input);
    //   console.log(command)
    const response = await doclient.send(command);
   const _origins =  cleanData(response.Items)
    return _origins;
}
