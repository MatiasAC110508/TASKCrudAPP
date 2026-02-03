export const url = "http://localhost:3000"

export async function getUserByEmail(email) {

    const user = await getjs(`${url}/users?email=${email}`)
    return user[0]

}

export async function getjs(url, errorMessage) {

    try {

        const response = await fetch(url, {method: "GET"})

        if (!response.ok) {
            throw new Error(`The "GET" request to the "URL" couldn't be completed: ${url}`)
        }

        const data = await response.json()
        console.log(data)
        return data

    } catch (error) {
        alert(errorMessage)
    }

}

export async function postjs(url, body, errorMessage) {

    try {

        const response = await fetch(url, {method: "POST", body:body})

        if (!response.ok) {
            throw new Error(`The "POST" request to the "URL" couldn't be completed: ${url}`)
        }

        const data = await response.json()
        return data

    } catch (error) {
        alert(errorMessage)
    }

}

export async function putjs(url, id, body, errorMessage) {

    try {

        const response = await fetch(`${url}/${id}`, {method: "PUT", body:body})

        if (!response.ok) {
            throw new Error(`The "PUT" request to the "URL" couldn't be completed: ${url}`)
        }

        const data = await response.json()
        return data

    } catch (error) {
        alert(errorMessage)
    }

}

export async function deletejs(url, id, errorMessage) {

    try {

        const response = await fetch(`${url}/${id}`, {method: "DELETE"})

        if (!response.ok) {
            throw new Error(`The "DELETE" request to the "URL" couldn't be completed: ${url}`)
        }

        const data = await response.json()
        return data

    } catch (error) {
        alert(errorMessage)
    }

}