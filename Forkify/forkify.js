import { loginStateObserver, logout } from "../Firebase/firebase.js"


let userDish = document.querySelector("#userDish")
let searchDishBtn = document.querySelector("#searchDishBtn")
let logoutBtn = document.querySelector("#logoutBtn")
let customDishes = document.querySelector("#customDishes")


async function allRecipes(event) {
    event.preventDefault()
    console.log("chala")
    let allRecipes = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${userDish.value}`)
    let allRecipesJSON = await allRecipes.json()
    console.log(allRecipesJSON)
}

searchDishBtn.addEventListener("click", allRecipes)



logoutBtn.addEventListener("click", logout)


customDishes.addEventListener("click", async (event) => {
    console.log(event.target)
    let dish = event.target.innerHTML
    let allRecipes = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${dish}`)
    let allRecipesJSON = await allRecipes.json()
    console.log(allRecipesJSON)
})
