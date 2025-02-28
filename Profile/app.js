import { getUser } from "../Firebase/firebase.js";
import { loggedInUserData } from "../Forkify/forkify.js";

console.log(getUser(loggedInUserData()))