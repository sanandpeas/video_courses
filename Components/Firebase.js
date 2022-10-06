import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvALbx-f98TSfc9-eXP5conHD1mbYeSYg",
  authDomain: "video-courses-b5456.firebaseapp.com",
  projectId: "video-courses-b5456",
  storageBucket: "video-courses-b5456.appspot.com",
  messagingSenderId: "108697173404",
  appId: "1:108697173404:web:fe2e70fd66901e99839c59"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };