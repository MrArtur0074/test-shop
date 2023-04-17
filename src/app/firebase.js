// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCWlA5ub9Y6srOOBzAUf2Rz_Y9oHUtX6M0",
//   authDomain: "shop-a5cc6.firebaseapp.com",
//   projectId: "shop-a5cc6",
//   storageBucket: "shop-a5cc6.appspot.com",
//   messagingSenderId: "676689377640",
//   appId: "1:676689377640:web:f559826178f464661efedd",
//   measurementId: "G-SJ9E633E42"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCTYebwjeiFcG3ACOMvECQySDuH_X_d_9o",
  authDomain: "sweven-love.firebaseapp.com",
  projectId: "sweven-love",
  storageBucket: "sweven-love.appspot.com",
  messagingSenderId: "593609424993",
  appId: "1:593609424993:web:d7b4b8ecead63517f9aa20",
  measurementId: "G-3GHJ2N891Y"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig); /* Инициализация firebase хранилища с определенным id конфига */
const auth = getAuth(app); /* Информация об аутентификации пользователя */
const analytics = getAnalytics(app); /* Аналитика, она пока нам не нужна */
const provider = new GoogleAuthProvider(); /* Авторизация через google */
const providerFacebook = new FacebookAuthProvider(); /* Авторизация через google */
const database = getFirestore(app); /* Информация об хранилище */

export {auth, provider, database, providerFacebook} /* Экспортируем нужные нам функции для проекта */