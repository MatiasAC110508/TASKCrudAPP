export function logOut(){
    const isAdmin = sessionStorage.getItem("isAdmin")
    if (isAdmin){
        sessionStorage.removeItem("isAdmin")
        sessionStorage.removeItem("isLoged")
        sessionStorage.removeItem("userEmail")
        sessionStorage.removeItem("userFullName")
        sessionStorage.removeItem("userID")
        sessionStorage.removeItem("userPassword")
    } else {
        sessionStorage.removeItem("isLoged")
        sessionStorage.removeItem("userEmail")
        sessionStorage.removeItem("userFullName")
        sessionStorage.removeItem("userID")
        sessionStorage.removeItem("userPassword")
    }
}