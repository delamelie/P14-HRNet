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

export const getEmployees = async () => {
  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map(formattedData);
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};

export const addEmployee = async (newEmployeeData) => {
  await addDoc(collectionRef, newEmployeeData);
};
