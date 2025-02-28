import { login } from "../Firebase/firebase.js";

let loginBtn = document.querySelector("#loginBtn")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let lastLoginAttempt = 0;

async function loginHandler() {
  let now = Date.now();
  console.log(now)
  
  if (now - lastLoginAttempt < 5000) { // 5 seconds wait
    alert("Too many attempts! Try again in a few seconds.");
    return;
  }

  lastLoginAttempt = now;
  login(email.value, password.value);
}
loginBtn.addEventListener("click", loginHandler)
