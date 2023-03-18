import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="big" back>
      <Link className="searchLink" to="/favorites">
        <Button variant="outlined">Favorite Pokemons</Button>
      </Link>
      <Link className="searchLink" to="aboutMe">
        <Button style={{ alingItems: "center" }} variant="outlined">
          About me
        </Button>
      </Link>
      <Link className="searchLink" to="/home">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png "
          style={{ width: "200px", height: "67" }}
        ></img>
      </Link>
      <Link className="searchLink" to="/pokemons">
        <Button variant="outlined">Create Pokemon</Button>
      </Link>
      <Link className="searchLink" to="/">
        <Button variant="outlined">Home</Button>
      </Link>
    </div>
  );
}
