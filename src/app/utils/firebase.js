// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, doc, FieldValue, setDoc, addDoc } from 'firebase/firestore';

// // Import the functions you need from the SDKs you need
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAcO3ux44Mn5Ee5RVdSwD3mafo03VsGtu4",
//     authDomain: "socialcommerce-34e83.firebaseapp.com",
//     projectId: "socialcommerce-34e83",
//     storageBucket: "socialcommerce-34e83.appspot.com",
//     messagingSenderId: "905955350443",
//     appId: "1:905955350443:web:7f3a5ec635744623fee4ee",
//     measurementId: "G-TRF2YKGHQD",
// };

// // Initialize Firebase 
// const app = initializeApp(firebaseConfig);

// console.log("Initializing Firebase");
// const db = getFirestore(app);

// export default async function addData(data) {
//     let result = null;
//     let error = null;

//     try {
        
//       const cll=  await collection(db,'/messages');
//     //   const newUserRef = doc(cll);
//         result =  await addDoc( cll,data);
//         // result =   await setDoc(newUserRef, data);
//     console.log(result);

//     } catch (e) {
//         error = e;
//         console.log(e);
//     }
//     return { result, error };


// };