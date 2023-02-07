const firebaseConfig = {
    apiKey: "AIzaSyAsyuyqFvtxKWSH6szP75_BiLCL1ofqqlQ",
    authDomain: "chameleon-23615.firebaseapp.com",
    projectId: "chameleon-23615",
    storageBucket: "chameleon-23615.appspot.com",
    messagingSenderId: "493807793489",
    appId: "1:493807793489:web:4dddbb6337f84120350f70",
    measurementId: "G-V0M02YZDE1"
};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
