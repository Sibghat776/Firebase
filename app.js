import { signup } from "./Firebase/firebase.js";
let signupBtn = document.querySelector("#signupBtn")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let userName = document.querySelector("#userName")

signupBtn.addEventListener("click", () => signup(email.value, password.value, userName.value))