import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase.config";

const collectionRef = collection(db, "employees");

export async function fetchEmployees() {
  try {
    const employeesSnapshot = await getDocs(collectionRef);
    const data = employeesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
}

///// Test fetch json
//import axios from "axios";

// export const fetchEmployees = () => {
//   fetch(`../data/employees.json`, {
//     headers: {
//       accept: "application/json",
//       "User-agent": "learning app",
//     },
//   })
//     .then((response) => {
//       console.log(response.json);
//       console.log("coucou");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("yo");
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("error:", error);
//     });
// };

// export const fetchEmployees = async () => {
//   try {
//     const response = await axios.get("./employees.json");
//     const data = await response.json();

//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
