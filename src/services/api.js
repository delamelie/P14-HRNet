import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../services/firebase.config";

const collectionRef = collection(db, "employees");

const formattedData = (doc) => {
  return {
    ...doc.data(),
    startDate: doc.data().startDate.toDate().toLocaleDateString(),
    birthDate: doc.data().birthDate.toDate().toLocaleDateString(),
    id: doc.id,
  };
};

const getEmployees = async () => {
  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map(formattedData);
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};
export { getEmployees };

// const getEmployees = async () => {
//   const data = await getDocs(collectionRef).docs.map((doc) => ({
//     // const snapshot = await getDocs(collectionRef);
//     // const data = snapshot.docs.map((doc) => ({
//     ...doc.data(),
//     startDate: doc.data().startDate.toDate().toLocaleDateString(),
//     birthDate: doc.data().birthDate.toDate().toLocaleDateString(),

//     id: doc.id,
//   }));
//   return data;
// };
// export { getEmployees };

const addEmployee = async (newEmployeeData) => {
  await addDoc(collectionRef, newEmployeeData);
  console.log("Employee added successfully!");
};
export { addEmployee };

// export async function addEmployee(newEmployeeData) {
//   try {
//     await addDoc(collectionRef, newEmployeeData);
//     console.log("Employee added successfully!");
//   } catch (error) {
//     console.error("Error adding employee:", error);
//     throw error;
//   }
// }
