export const getAllBooks = () => {
    return fetch ("http://localhost:8088/books?_embed=ratings")
        .then(res => res.json())
}

export const getMyBooks = (userId) => {
    return fetch(`http://localhost:8088/books?ownerId=${userId}&_embed=ratings`)
        .then(res => res.json())
}