import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="big" back>
      <Link to="/favorites">
        <Button variant="contained">Favorite Pokemons</Button>
      </Link>
      <Link to="aboutMe">
        <Button style={{alingItems:"center"}} variant="contained" >About me</Button>
      </Link>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png "
        style={{width:"200px", height:"67"}}
      ></img>
      <Link className="link" to="/pokemons">
        <Button variant="contained">Create Pokemon</Button>
      </Link>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
    </div>
  );
}
