// Importando as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase (dados sensíveis, normalmente são gerados pelo Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCC1tjk3rdU4S-5GQqaahuX6AZSITQH7rc",
  authDomain: "deli-844f9.firebaseapp.com",
  projectId: "deli-844f9",
  storageBucket: "deli-844f9.appspot.com",
  messagingSenderId: "949187892904",
  appId: "1:949187892904:web:9636b394e5e7a9093c949d",
  measurementId: "G-008VKVN79W"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firebase Analytics, se suportado
const analytics = getAnalytics(app);

// Exportando a configuração do Firebase
export default firebaseConfig;
