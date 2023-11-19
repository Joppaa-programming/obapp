import { createBusiness, createNewEntity, doclient, getUserBusinesses } from "@/app/db/client";
//import { NextResponse } from "next/server";
//import { headers } from 'next/headers';
import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";

export const dynamic = "force-dynamic"


export async function PUT(req) {

    const { id } =  await req.json();
    //console.log( 'id')
   // console.log( id)
  
    const SK = `${id.replace(/\s/g, "").trim().toUpperCase()}`
    const input = {
      "TableName": "originallyBlack", // Replace with your table name
      Key: {
        "PK": {
          "S": "VISITS#"
        },
        "SK": {
          "S": SK
        }
        // Replace 'yourPrimaryKey' with your primary key attribute value
      },
     // UpdateExpression: `SET ${key} = :newAttributeValue`,
     UpdateExpression:"SET visits = if_not_exists(visits, :start) + :inc",
      ExpressionAttributeValues: {
        ':inc': {"N" : "1"},
        ':start':{"N": "0"}, // Replace with the new value
      },
      ReturnValues: 'ALL_NEW',
    };
  
    try {
      const command = new UpdateItemCommand(input);
      const response = await doclient.send(command);
      
      return new Response(JSON.stringify(response.Attributes));
    } catch (error) {
      console.error('Error updating data:', error);
      return new Response({
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      })
    }
  
 
  }