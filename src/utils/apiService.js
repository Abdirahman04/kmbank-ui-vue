const urlTemplate = "http://127.0.0.1:8081/api/v1/";

export function getUsers() {
    const url = urlTemplate + "user";

    return fetch(url).then(res => res.json());
}