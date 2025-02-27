// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { doc, setDoc, getFirestore, collection, getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
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
const db = getFirestore(app);



// SIGNUP
export async function signup(userDetails) {
  let { password, email, userName } = userDetails
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user.uid, "User registered")
    // ...
    alert("You registered Successfully, Moving You to Home Page")
    let { password: myPassword, ...userDetailsWithoutPassword } = userDetails
    await setDoc(doc(db, "Users", userCredential?.user?.uid), {
      userDetailsWithoutPassword,
    });
    console.log("===>> hurraayyyy user ka data store hogaya");
    alert("We are going to move you towards home page");
    setTimeout(() => {
      window.location.href = "../Forkify/forkify.html"
    }, 10000);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
    alert(errorMessage)
  }
}

export async function login(email, password) {
  try {
    console.log(email, password)
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    console.log(userCredential)
    alert("Login Successfully, Moving you to home page")
    setTimeout(() => {
      window.location.href = "../Forkify/forkify.html"
    }, 1000);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
    alert(errorMessage)
  }
}



export async function loginStateObserver() {
  return new Promise((res, rej) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Ye banda Logged In ha", user)
        res(uid)  
      } else {
        alert("No user Logged In, Sorry Kicking you out")
        rej("No user Found")
        setTimeout(() => {
          window.location.href = "../index.html"
        }, 1000);
      }
    });
  })
}



export async function logout() {
  try {
    await signOut(auth);
    console.log("==>> signout successfully");
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  } catch (error) { }
}


export async function getUser(userId) {
  try {
    console.log(userId)
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      console.log("User Data:", userSnap.data());
      return userSnap.data();
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}