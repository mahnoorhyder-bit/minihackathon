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

login.addEventListener("click", () => {  
insertData();
function insertData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let uniqueId = auth.currentUser.uid;
    // console.log(uniqueId.email);
    if(email === "ifra@gmail.com" && password === "Ifra@7890"){
        alert("Hello Admin");
        set(ref(database, "admin/" + uniqueId), {
            email:email,
            password:password,
        })
        const dt = new Date();
      update(ref(database, 'admin/' + uniqueId), {
        last_login: dt
      })
    }
    else{
        alert("Not a Admin.."); 
    }}})
//     console.log(uniqueId);
//     set(ref(database, "admin/" + uniqueId), {
//         email:email,
//         password:password,
//     }).then((resolve) => {
//       console.log("load Successfully");
  
//     }).catch((error) => {
//     //   console.log("Unload");
//       alert("Unload")
//     })
//   }})