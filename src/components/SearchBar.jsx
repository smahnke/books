export const SearchBar = ({setSearchTerm}) => {
    return (
        <div className="search-bar">
            <input
                onChange={(event) => {setSearchTerm(event.target.value)}}
                type="text"
                placeholder="Search Books"
                className=""
                />
        </div>
    )
}