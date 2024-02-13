import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC98lPVVgGkpYeaI1H3OpE7pgXtPfJlwhc",
  authDomain: "ideadrive-pvt-ltd.firebaseapp.com",
  projectId: "ideadrive-pvt-ltd",
  storageBucket: "ideadrive-pvt-ltd.appspot.com",
  messagingSenderId: "323020288865",
  appId: "1:323020288865:web:d9898441bdeedf9905cb20",
  measurementId: "G-ZTYRQX190F",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export { app };
