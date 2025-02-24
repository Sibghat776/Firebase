import{loginStateObserver, logout} from "../Firebase/firebase.js"


let userDish = document.querySelector("#userDish")
let searchDishBtn = document.querySelector("#searchDishBtn")
let logoutBtn = document.querySelector("#logoutBtn")


searchDishBtn.addEventListener("click" , async function allRecipes(event) {
    event.preventDefault()
    console.log("chala")
    let allRecipes = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${userDish.value}`)
    let allRecipesJSON = await allRecipes.json()
    console.log(allRecipesJSON)
})

async function loginCheck() {
    await loginStateObserver()
}
loginCheck()

logoutBtn.addEventListener("click", logout)