import React from "react";
import "./paginate.css";

const Paginate = ({ pokemonsPage, allPokemons, paginated, page }) => {
  const pages = [];
  const numberPages = Math.ceil(allPokemons / pokemonsPage);

  for (let i = 1; i < numberPages; i++) {
    pages.push(i);
  }
  const prevBut = () => {
    if (page <= 1) return;
    paginated(page - 1);
  };

  const nextBut = () => {
    if (page > allPokemons.length) return;
    paginated(page + 1);
  };

  return (
    <div className="paginator">
      <nav className="pagButton">
        <button className="previous" onClick={prevBut}>Previous</button>
        {pages?.map((num) => (
          <button className="page" key={num} onClick={() => paginated(num)}>
            {num}
          </button>
        ))}
        <button className="next" onClick={nextBut}>Next</button>
      </nav>
    </div>
  );
};

export default Paginate;
