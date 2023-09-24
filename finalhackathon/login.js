
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, update, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCc_jerR4c44XmiSa_StEK7SHmWIvUpRe4",
  authDomain: "attendanceportal-9f34d.firebaseapp.com",
  databaseURL: "https://attendanceportal-9f34d-default-rtdb.firebaseio.com",
  projectId: "attendanceportal-9f34d",
  storageBucket: "attendanceportal-9f34d.appspot.com",
  messagingSenderId: "677534454622",
  appId: "1:677534454622:web:c32895c18d1695ca3775cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


// Login...
login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
          last_login: dt
        })
        document.getElementById('email').value = "";
      document.getElementById('password').value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});