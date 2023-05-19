import {getApp , getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCjQZ_qNNY6eRptZXs_1i8e-7XswNcrE_E",
  authDomain: "bargainbites-d0e3e.firebaseapp.com",
  databaseURL: "https://bargainbites-d0e3e-default-rtdb.firebaseio.com",
  projectId: "bargainbites-d0e3e",
  storageBucket: "bargainbites-d0e3e.appspot.com",
  messagingSenderId: "697649384001",
  appId: "1:697649384001:web:d75727f66527e7e3d114c0",
  };

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)


export {app , firestore , storage};