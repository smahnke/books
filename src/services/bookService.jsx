export const getAllBooks = () => {
    return fetch ("http://localhost:8088/books?_embed=ratings")
        .then(res => res.json())
}