export function FakestoreSearch(){
    return(
        <div className="container-fluid">
            <form method="get" action="/results">
                <h2>Search Products</h2>
                <input type="text" name="search-str"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
}