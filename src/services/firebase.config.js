import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJpB78dJ8LuSIZ1mkVj6SOVsY2JZ0iuVE",
  authDomain: "hrnet-8520d.firebaseapp.com",
  projectId: "hrnet-8520d",
  storageBucket: "hrnet-8520d.appspot.com",
  messagingSenderId: "723093371258",
  appId: "1:723093371258:web:9e7e2e8ead8039bf02fec3",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

//const colRef = collection(db, "employees");

//     getDocs(colRef)
//       .then((snapshot) => {
//         let employees = [];
//         snapshot.docs.forEach((doc) => {
//           employees.push({ ...doc.data(), id: doc.id });
//         });
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
