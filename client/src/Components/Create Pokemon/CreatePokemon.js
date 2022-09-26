import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTypes } from "../../Actions";

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    type: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  console.log(allTypes)

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type='text' value={input.name} name='name' />
        </div>
        <div>
          <label>Health Points</label>
          <input type='number' value={input.hp} name='hp'/>
        </div>
        <div>
          <label>Attack</label>
          <input type='number' min='1' max='150' value={input.attack} name='attack' />
        </div>
        <div>
          <label>Defense</label>
          <input type='number' min='1' max='150' value={input.defense} name='defense' />
        </div>
        <div>
          <label>Speed</label>
          <input type='number' min='1' max='150' value={input.speed} name='speed' />
        </div>
        <div>
          <label>Height</label>
          <input type='number' min='1' max='150' value={input.height} name='heigth' />
        </div>
        <div>
          <label>Weight</label>
          <input type='number' min='1' max='150' value={input.weight} name='weight' />
        </div>
        <div>
          <label>Image</label>
          <input type='image ' value={input.image} name='image' />
        </div>
        <select>
            {allTypes > 0 && allTypes?.map((el) => (
                <options value={el.types.name} >{el.types.name}</options>
            ))}
        </select>
        <button type="submit" >Create Pokemon</button>
      </form>
    </div>
  );
};
