import {postjs, url} from "../services/fetch-functions.js"
import { autoLogOut } from "../services/guardians.js"

autoLogOut()

let data = {}
const form = document.getElementById("form-register")
class User {
    name
    email
    password
    is_admin

    constructor(name, email, password, is_admin) {
        this.name = name
        this.email = email
        this.password = password
        this.is_admin = is_admin
    }

}

function getDataFromForm(idForm) {
    let data = {}
    const form = document.getElementById(idForm)

    Array.from(form).forEach(input => {
        if (input.id == "") {
            return
        }
        data[input.id] = input.value
    })

    return JSON.stringify(data)
}

async function registerUserService(body) {

    const user = await postjs(`${url}/users`, body, "The user hasn't been created.");
    return user
}

async function registerUser() {

    // Escuchar evento de submit
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const data = getDataFromForm("form-register")
        if (data.confirmPassword === data.password) {
            registerUserService(data)
        } else {
            alert("las contraseñas no coindicen")
        }
    })
}

registerUser()

const singInBtn = document.getElementById("sing-in")

singInBtn.addEventListener("click", () => window.location.href = "../index.html")

