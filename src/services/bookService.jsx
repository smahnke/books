export const getAllBooks = () => {
    return fetch("http://localhost:8088/books?_embed=ratings")
        .then(res => res.json())
}

export const getMyBooks = (ownerId) => {
    return fetch(`http://localhost:8088/books?ownerId=${ownerId}&_embed=ratings`)
        .then(res => res.json())
}

export const getBookById = (id) => {
    return fetch(
        `http://localhost:8088/books/${id}?_expand=owner&_embed=ratings`
    ).then(res => res.json())
}

export const deleteBook = (id) => {
    return fetch(`http://localhost:8088/books/${id}`, {
        method: "DELETE"
    })
}