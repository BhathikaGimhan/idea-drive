import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../../../utils/firebaseConnection";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  const snapshot = await getDocs(collection(firestore, "waiting"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).json(data);
}
