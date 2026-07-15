export const createRating = (ratingObj) => {
    return fetch("http://localhost:8088/ratings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ratingObj)
    })
}