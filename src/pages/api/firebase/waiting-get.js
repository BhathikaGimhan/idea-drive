import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../../../../utils/firebaseConnection";
import { getSession } from "next-auth/react";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const email = session.user.email;

    // Query the Firestore collection "waiting" where the email field is equal to the provided email
    const q = query(
      collection(firestore, "waiting"),
      where("email", "==", email)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
