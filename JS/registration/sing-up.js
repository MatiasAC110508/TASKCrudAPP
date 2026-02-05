import {postjs, url, getUserByEmail} from "../services/fetch-functions.js"
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
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const jsonData = JSON.parse(getDataFromForm("form-register"));
        const data = getDataFromForm("form-register")
        const userInDb = await getUserByEmail(jsonData.email)

        if (userInDb){
            console.error("The email is already singed up!. Please use another eamil.")
            const alert = document.getElementById("alert")

            alert.textContent = "The email is already singed up!. Please use another email.";
            alert.style.cssText = `
                color: #dc2626;
                font-size: 14px;
                margin-top: 8px;
                text-align: center;
                width: 100%;     
            `;

            setTimeout(() => alert.remove(), 2000);
        } else {
            if (jsonData.confirmPassword === jsonData.password) {
                registerUserService(data)
            } else {
                console.error("The passwords do not match!, please try again.")
                const alert = document.getElementById("alert")

                alert.textContent = "The passwords do not match!, please try again.";
                alert.style.cssText = `
                    color: #dc2626;
                    font-size: 14px;
                    margin-top: 8px;
                    text-align: center;
                    width: 100%;     
                `;

                setTimeout(() => alert.remove(), 2000);
            }
        }
    })
}

registerUser()

const singInBtn = document.getElementById("sing-in")

singInBtn.addEventListener("click", () => window.location.href = "../index.html")

