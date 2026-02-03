import { logOut } from "./log-out.js";

const path = window.location.pathname;

export function autoLogOut(){
    console.log(path)
    if (path.includes("/") || path.includes("./sing-up.html")){
        logOut()
    }
} 

export function pageGuardian(){
    const isLoged = sessionStorage.getItem("isLoged")
    if (isLoged) {
        const isAdmin = sessionStorage.getItem("isAdmin")
        if (isAdmin != "true" && path.includes("HTML/admin-page.html")){
            window.location.href = "./user-page.html";
        } else if (isAdmin === "true" && path.includes("HTML/user-page.html")){
            window.location.href = "./admin-page.html";
        } else {
            console.log("You've been identified!, enjoy our serivices.")
        }
    } else {
        window.location.href = "/index.html";
    }
}