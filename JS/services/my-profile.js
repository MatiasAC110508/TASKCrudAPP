export function aboutMe() {
    const email = sessionStorage.getItem("userEmail")
    const fullName = sessionStorage.getItem("userFullName")
    const id = sessionStorage.getItem("userID")
    const password = sessionStorage.getItem("userPassword")

    const userInfo = {
        fullUserName: fullName,
        userEmail: email,
        userID: id,
        userPassword: password
    }
    return userInfo
}