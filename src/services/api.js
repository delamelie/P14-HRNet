import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../services/firebase.config";

const collectionRef = collection(db, "employees");

const fetchEmployees = async () => {
  //const data = await getDocs(collectionRef).docs.map((doc) => ({
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(data);
  return data;
};
export { fetchEmployees };

const addEmployee = async (newEmployeeData) => {
  await addDoc(collectionRef, newEmployeeData);
  console.log("Employee added successfully!");
};
export { addEmployee };

// export async function fetchEmployees() {
//   try {
//     //const data = await getDocs(collectionRef).docs.map((doc) => ({
//     const snapshot = await getDocs(collectionRef);
//     const data = snapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching employees:", error);
//     throw error;
//   }
// }

// export async function addEmployee(newEmployeeData) {
//   try {
//     await addDoc(collectionRef, newEmployeeData);
//     console.log("Employee added successfully!");
//   } catch (error) {
//     console.error("Error adding employee:", error);
//     throw error;
//   }
// }

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
