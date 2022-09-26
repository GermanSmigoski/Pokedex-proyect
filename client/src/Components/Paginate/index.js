import React from "react";

const Paginate = ({pokemonsPage, allPokemons, paginated}) =>{

    const pages = []
    const numberPages = Math.ceil(allPokemons / pokemonsPage)

    for(let i = 0; i < numberPages; i++){
        pages.push(i)
    }

    return(
        <nav className="pagButton">
            {pages?.map((num) => (
                <button onClick={() => paginated(num)}>{num}</button>
            ))}

        </nav>
    )
}

export default Paginate;     