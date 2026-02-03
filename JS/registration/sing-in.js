import { getUserByEmail } from "../services/fetch-functions.js"
import { autoLogOut } from "../services/guardians.js"

autoLogOut()

const form = document.getElementById("form-login")

export async function loginUser() {

    // Escuchar evento de submit
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const userInDb = await getUserByEmail(form.email.value)
        console.log(userInDb)

        if (userInDb.password == form.password.value) {
            sessionStorage.setItem("isLoged", true)
            sessionStorage.setItem("userEmail", userInDb.email)
            sessionStorage.setItem("userFullName", userInDb.fullName)
            sessionStorage.setItem("userID", userInDb.id)
            sessionStorage.setItem("userPassword", userInDb.password)
            if (userInDb.isAdmin === "true"){
                sessionStorage.setItem("isAdmin", userInDb.isAdmin)
                window.location.href = "HTML/admin-page.html"
            } else {
                window.location.href = "HTML/user-page.html"
            }
        } else {
            alert("La contraseña no es la correcta")
        }

    })

}

const singUpBtn = document.getElementById("sing-up") 

export function singUp() {
    singUpBtn.addEventListener("click", () => window.location.href = "HTML/sing-up.html")
}
