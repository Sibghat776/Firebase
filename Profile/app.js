import { getUser, loginStateObserver } from "../Firebase/firebase.js";


let loggedInUserId;

async function loggedInUserData() {
    let uid = await loginStateObserver()
    console.log(uid)
    loggedInUserId = uid
    return uid
}

console.log(getUser(loggedInUserData()))