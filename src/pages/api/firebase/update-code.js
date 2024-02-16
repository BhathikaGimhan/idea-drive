import { getFirestore, doc, updateDoc } from "firebase/firestore";
import app from "../../firebase";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { route } = req.body; // Assuming newCode is the new name value
      const docId = req.body.data;

      if (!docId || !route) {
        return res
          .status(400)
          .json({ error: "docId, route, and newCode are required" });
      }

      // Get the document reference
      const docRef = doc(firestore, route, docId.id);

      // Update only the "name" field of the document
      await updateDoc(docRef, { code: docId.id });

      res.status(200).json({ message: "Document updated successfully" });
    } catch (error) {
      console.error("Error updating document:", error);
      res.status(500).json({ error: "Failed to update document" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
