import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, update,onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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




let marked = document.getElementById("marked");
marked && marked.addEventListener('click',(userCredential)=>{
    var rollNo = document.getElementById('rollNo').value;
    var markAttend = document.getElementById('markAttend').value;
    // if(rollNo == users.rollNo){
    //     console.log("true");
    // }
    // else{
    //     console.log("false");
    // }
    const user = userCredential.user;
    update(ref(database, 'users/' + rollNo), {
        markAttend : markAttend,
    })
    document.getElementById('rollNo').value = "";
    document.getElementById('markAttend').value = "";

    })