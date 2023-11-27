//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyR_Zac-BE2C-GFxI7Nqpm2UopOzyvRd0",
  authDomain: "jademonlog.firebaseapp.com",
  projectId: "jademonlog",
  storageBucket: "jademonlog.appspot.com",
  messagingSenderId: "349692515340",
  appId: "1:349692515340:web:6fb42b50616c2c2cd40a29",
  measurementId: "G-N4LKTSDK9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore, db };
