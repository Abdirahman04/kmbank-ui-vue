const urlTemplate = "http://127.0.0.1:8081/api/v1/";

export function getUsers() {
    const url = urlTemplate + "user";

    return fetch(url).then(res => res.json());
}

export function getUsersRaw() {
    const url = urlTemplate + "user/raw";

    return fetch(url).then(res => res.json());
}

export function getUserById(id) {
    const url = urlTemplate + `user/${id}`;

    return fetch(url).then(res => res.json());
}

export function getUserByAccNumber(accNumber) {
    const url = urlTemplate + `user/account/${accNumber}`;

    return fetch(url).then(res => res.json());
}

export function getUserByAccNumberRaw(accNumber) {
    const url = urlTemplate + `user/raw/${accNumber}`;

    return fetch(url).then(res => res.json());
}

export function addUser(bdd) {
    const url = urlTemplate + "user";

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bdd)
    }

    return fetch(url, options).then(res => res.json());
}

export function login(bdd) {
    const url = urlTemplate + "user/login";

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bdd)
    }

    return fetch(url, options).then(res => res.json());
}

export function updateUser(id, bdd) {
    const url = urlTemplate + `user/${id}`;

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bdd)
    }

    return fetch(url, options).then(res => res.json());
}

export function deleteUser(id) {
    const url = urlTemplate + `user/${id}`;

    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }

    return fetch(url, options).then(res => res.json());
}