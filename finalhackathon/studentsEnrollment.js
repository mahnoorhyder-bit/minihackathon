
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
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





document.getElementById("submit").onclick = function () {
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var rollNo = document.getElementById('rollNo').value;
    var contactNo = document.getElementById('contactNo').value;
    var cnicNo = document.getElementById('cnicNo').value;
    var CourseName = document.getElementById('CourseName').value;

console.log("Pass");
    // const user = userCredential.user;
    const uniqueId = auth.currentUser.uid;
    update(ref(database, 'users/' + rollNo), {
        name : name,
        fatherName : fatherName,
        rollNo : rollNo,
        contactNo : contactNo,
        cnicNo : cnicNo,
        CourseName : CourseName
    })
    console.log(uniqueId.rollNo);
    document.getElementById('name').value = "";
    document.getElementById('fatherName').value = "";
    document.getElementById('rollNo').value = "";
    document.getElementById('contactNo').value = "";
    document.getElementById('cnicNo').value = "";
    document.getElementById('CourseName').value = "";
};