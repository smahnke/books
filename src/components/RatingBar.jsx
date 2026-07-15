export const RatingBar = ({ selectedRating, setSelectedRating }) => {
    return (
        <select
            value={selectedRating}
            onChange={(event) => {
                setSelectedRating(parseInt(event.target.value))
            }}
        >
            <option value="">Choose a Rating</option>
            <option value="1">⭐ 1</option>
            <option value="2">⭐⭐ 2</option>
            <option value="3">⭐⭐⭐ 3</option>
            <option value="4">⭐⭐⭐⭐ 4</option>
            <option value="5">⭐⭐⭐⭐⭐ 5</option>
        </select>
    )
}
