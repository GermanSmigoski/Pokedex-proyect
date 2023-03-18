import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTypes } from "../../Actions";
import { createPokemon } from "../../Actions";
import Loading from "../Loading/Loading";
import "./Create.css";
export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);
  const history = useHistory();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    hp: 75,
    attack: 75,
    defense: 75,
    speed: 75,
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      types: [...new Set([...input.types, e.target.value])],
    });
  };

  const handleDelete = (type) => {
    setInput({
      ...input,
      types: input.types.filter((typeDel) => typeDel !== type),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(input));
    alert("Pokemon created correctly");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    history.push("/home");
  };

  return (
    <div className="bigOne">
      {allTypes?.length > 0 ? (
        <div>
          <Link to="/">Back</Link>
          <div className="box-from">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Health Points: {input.hp}</label>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={input.hp}
                  name="hp"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Attack: {input.attack}</label>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={input.attack}
                  name="attack"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Defense: {input.defense}</label>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={input.defense}
                  name="defense"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Speed: {input.speed}</label>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={input.speed}
                  name="speed"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Height:</label>
                <input
                  type="number"
                  min="1"
                  max="150"
                  value={input.height}
                  name="height"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Weight:</label>
                <input
                  type="number"
                  min="1"
                  max="150"
                  value={input.weight}
                  name="weight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <img
                alt=""
                style={{ width: "150px", height: "100px" }}
                src={`${input.image}`}  
              />
              <div>
                <select onChange={(e) => handleSelect(e)}>
                  {allTypes?.map((type) => (
                    <option key={type.id} value={type.name} name="types">
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {input.types?.map((type) => (
                  <div key={type}>
                    <p>{type}</p>
                    <button type="button" onClick={() => handleDelete(type)}>
                      x
                    </button>
                  </div>
                ))}
              </div>
              <button onSubmit={(e) => handleSubmit(e)} type="submit">
                Create Pokemon
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
