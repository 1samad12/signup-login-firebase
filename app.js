const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

















import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
  
    
}from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDQ7Lovt48EHY_LTAZzvrzX9v8AakvLMjM",
  authDomain: "portfolio-23b3f.firebaseapp.com",
  projectId: "portfolio-23b3f",
  storageBucket: "portfolio-23b3f.appspot.com",
  messagingSenderId: "953081454969",
  appId: "1:953081454969:web:f4ff8bf8babefc5f690fa8",
  measurementId: "G-DSPZLSZ2PZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// signupxxx////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/////////////////////////////


    let sbtn=document.getElementById('sbtn')
    sbtn.addEventListener("click",()=>{
    
    let email=document.getElementById("signupemai")
    let password=document.getElementById("signuppass")
    let cpasss=document.getElementById("cpass")
    
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            
    const user = userCredential.user;
    console.log('user=>',user);
    document.write("user",user)
    
    
})
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error',errorMessage);
      console.log('error==>>',errorCode);
      
    });
    
})




// xxxxx/////////////////////////////xxxxxxxxxxxxxxxxxxxxxxxx///////////////////////



let llbtn=document.querySelector("#lbtn")
llbtn.addEventListener("click",()=>{
    let lemail=document.getElementById("lem")
    let lpassword=document.getElementById("lpass")

    
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.write("user",user)
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log("error==>>>",errorMessage);
    console.log("error==>>>",errorCode);
    
  });

})






















































































 