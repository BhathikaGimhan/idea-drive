import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../../../utils/firebaseConnection";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      if (!data) {
        return res.status(400).json({ error: "Data is required" });
      }
      const docRef = await addDoc(collection(firestore, data.route), data.data);
      res.status(200).json({ id: docRef.id, ...data });
    } catch (error) {
      console.error("Error adding document:", error);
      res.status(500).json({ error: "Failed to add document" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
