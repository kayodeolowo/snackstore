import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCmiG_uXTcbu9uDMRJIWc1T966W6zXCxJA",
  authDomain: "snacksstore-7c2cb.firebaseapp.com",
  databaseURL: "https://snacksstore-7c2cb-default-rtdb.firebaseio.com",
  projectId: "snacksstore-7c2cb",
  storageBucket: "snacksstore-7c2cb.appspot.com",
  messagingSenderId: "305668851927",
  appId: "1:305668851927:web:f427b85e284bfbb7d20892"
};

export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app)
