// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFPzEYHWTxmYRxT0Uis8LUgMPYK1K6Hwc",
    authDomain: "first-project-f7f45.firebaseapp.com",
    projectId: "first-project-f7f45",
    storageBucket: "first-project-f7f45.firebasestorage.app",
    messagingSenderId: "716649101203",
    appId: "1:716649101203:web:404323e3465af2ed93da66",
    measurementId: "G-5M84PEXTTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


// SIGNUP
export function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password, userName)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential;
            // ...
            alert("You Signed In Successfully, Moving You to Home Page")
            console.log(user)
            setTimeout(() => {
                document.body.style.display = "none"
                window.location.href = "../Home Page/index.html"
            }, 1000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
            alert(errorMessage)
        });
}