import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTypes } from "../../Actions";
import { createPokemon } from "../../Actions";
import Loading from "../Loading/Loading";

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);
  const history = useHistory();

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

  const handleButton = (e) => {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
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

  useEffect(() => {
    dispatch(getTypes());
    console.log(allTypes);
  }, []);

  return (
    <div>
      {allTypes?.length > 0 ? (
        <div>
          <Link to="/home">Back</Link>
          <div>
            <form>
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
                  type="image "
                  value={input.image}
                  name="image"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {allTypes?.map(el => {
                  return(
                    <div key={input.id}>
                      <label>{el.name}</label>
                      <input type='checkbox'value={input.types}  name={el.name}/>
                    </div>
                  )
                })}
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
