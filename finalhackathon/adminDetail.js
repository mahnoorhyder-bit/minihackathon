
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, update,onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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








    let addDataButton = document.getElementById("addDataButton");
    addDataButton && addDataButton.addEventListener('click',()=>{
    var rollNo = document.getElementById('rollNo').value;
    var classTimings = document.getElementById('classTimings').value;
    var schedule = document.getElementById('schedule').value;
    var teacherName = document.getElementById('teacherName').value;
    var sectionName = document.getElementById('sectionName').value;
    var courseName = document.getElementById('courseName').value;
    var batchNumber = document.getElementById('batchNumber').value;
    const uniqueId = auth.currentUser.uid;
    update(ref(database, 'users/' + rollNo), {
        classTimings: classTimings,
        schedule: schedule,
        teacherName: teacherName,
        sectionName: sectionName,
        courseName: courseName,
        batchNumber: batchNumber,
    })
    .then((resolve) => {
        console.log(`successfully Login`);
    }).catch((error) => {
        console.log("not Successfully");
    })
    // document.getElementById('classTimings').value = "";
    // document.getElementById('schedule').value = "";
    // document.getElementById('teacherName').value = "";
    // document.getElementById('sectionName').value = "";
    // document.getElementById('courseName').value = "";
    // document.getElementById('batchNumber').value = "";
});
let readData = document.getElementById("readData");
readData && readData.addEventListener('click',()=>{
    var rollNo = document.getElementById('rollNo').value;
    var classTimings = document.getElementById('classTimings').value;
    var schedule = document.getElementById('schedule').value;
    var teacherName = document.getElementById('teacherName').value;
    var sectionName = document.getElementById('sectionName').value;
    var courseName = document.getElementById('courseName').value;
    var batchNumber = document.getElementById('batchNumber').value;
const studentRef = ref(database, "users/" + rollNo);
onValue(studentRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    document.getElementById('classTimings').value = data.classTimings || "";
    document.getElementById('schedule').value = data.schedule || "";
    document.getElementById('teacherName').value = data.teacherName || "";
    document.getElementById('sectionName').value = data.sectionName || "";
    document.getElementById('courseName').value = data.courseName || "";
    document.getElementById('batchNumber').value = data.batchNumber || "";
  } else {
    // Handle the case where the data doesn't exist
    alert("Data does not exist of this Roll Number..:", rollNo);
  }
}, (error) => {
  // Handle any database read errors here
  alert("Error reading data:", error);
});
});
// let updateData = document.getElementById("updateData");
// updateData && updateData.addEventListener('click',()=>{
// var rollNo = document.getElementById('rollNo').value;
// var classTimings = document.getElementById('classTimings').value;
// var schedule = document.getElementById('schedule').value;
// var teacherName = document.getElementById('teacherName').value;
// var sectionName = document.getElementById('sectionName').value;
// var courseName = document.getElementById('courseName').value;
// var batchNumber = document.getElementById('batchNumber').value;
// var attendance = document.getElementById('attendance').value;
// const uniqueId = auth.currentUser.uid;
// update(ref(database, 'users/' + rollNo), {
//     classTimings: classTimings,
//     schedule: schedule,
//     teacherName: teacherName,
//     sectionName: sectionName,
//     courseName: courseName,
//     batchNumber: batchNumber,
//     attendance:attendance
// })
// .then((resolve) => {
//     console.log(`successfully Login`);
// }).catch((error) => {
//     console.log("not Successfully");
// })
// document.getElementById('classTimings').value = "";
// document.getElementById('schedule').value = "";
// document.getElementById('teacherName').value = "";
// document.getElementById('sectionName').value = "";
// document.getElementById('courseName').value = "";
// document.getElementById('batchNumber').value = "";
// });