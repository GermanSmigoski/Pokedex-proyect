import React from "react";
import "./Card.css";

const Card = ({ image, name, types, attack, defense, hp }) => {
  return (
    <div className={`pokemon-card ${types[0].name}`}>
      <h2 className="pokemon-name">{name}</h2>
      <div className="pokemon-image">
        <img src={image} />
      </div>
      <h2 className="pokemon-types">{types.map((type) => type.name + " ")}</h2>
      <div className="pokemon-stats">
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Hp: {hp}</p>
      </div>
    </div>
  );
};

export default Card;
