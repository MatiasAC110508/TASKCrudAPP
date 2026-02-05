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

        if (!userInDb){
            console.error("The email is not singed up!. Please create an account.")
            const alert = document.getElementById("alert")

            alert.textContent = "The email is not singed up!. Please create an account.";
            alert.style.cssText = `
              color: #dc2626;
              font-size: 14px;
              margin-top: 8px;
              text-align: center;
              width: 100%;     
            `;

            setTimeout(() => alert.remove(), 2000);
        }

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
            console.error("The password is not correct.")
            const alert = document.getElementById("alert")

            alert.textContent = "The password is not correct.";
            alert.style.cssText = `
              color: #dc2626;
              font-size: 14px;
              margin-top: 8px;
              text-align: center;
              width: 100%;     
            `;

            setTimeout(() => alert.remove(), 2000);
        }

    })

}

const singUpBtn = document.getElementById("sing-up") 

export function singUp() {
    singUpBtn.addEventListener("click", () => window.location.href = "HTML/sing-up.html")
}
