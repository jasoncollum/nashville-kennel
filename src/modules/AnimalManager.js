const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`)
            .then(r => r.json())
    },
    update(id, obj) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r => r.json())
    },
    post(animal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        }).then(r => r.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => r.json())
    }
}