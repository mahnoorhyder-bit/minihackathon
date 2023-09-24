
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase,set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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




// Signup..
let signup = document.getElementById('signup');
signup && signup.addEventListener('click', (e) => {
  var userName = document.getElementById('userName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repeatPassword = document.getElementById('repeatPassword').value;
  var fullName = `${userName}`;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        userName: userName,
        email: email,
        password : password,
        repeatPassword : repeatPassword,
      })
      document.getElementById('userName').value = "";
      document.getElementById('email').value = "";
      document.getElementById('password').value = "";
      document.getElementById('repeatPassword').value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})