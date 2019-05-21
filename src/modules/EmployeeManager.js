const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`)
            .then(r => r.json())
    },
    update(id, obj) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r => r.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => r.json())
    }
}