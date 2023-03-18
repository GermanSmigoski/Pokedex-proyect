import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="container">
      <div className='div'>
        <h1 className="title">Welcome to my Pokemon PI</h1>
        <Link className="link" to="/home">
          <button className="button">Enter</button>
        </Link>
        <img
        alt=""
          className="ash"
          src="https://cdn.discordapp.com/attachments/770844054102736927/1020781509420003470/png-transparent-pokemon-x-and-y-ash-ketchum-pikachu-poke-ball-pokemon-ball-gym-teams-boy-sticker-mural.png"
        />
      </div>
    </div>
  );
}
