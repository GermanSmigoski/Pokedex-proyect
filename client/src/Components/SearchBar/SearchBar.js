import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons , DbFilter , AtkFilter , NameFilter, TypeFilter, } from "../../Actions";
import NavBar from "./NavBar";
import './SearchBar.css'

export default function SearchBar(){
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types)

function handleClick(e){
  e.preventDefault()
  dispatch(getPokemons(e))
}

  function handleFilterAtk(e){
    dispatch(AtkFilter(e.target.value))
  }
  
  
  function handleFilterDB(e){
    dispatch(DbFilter(e.target.value))
  }

  function hanldeNameFilter(e){
    dispatch(NameFilter(e.target.value))
  }

  function handleTypeFilter(e){
    dispatch(TypeFilter(e.target.value))
    console.log(e.target.value)
  }
  return (
    <div className="big">
      <div>
        <Link to="/pokemons">Create Pokemon</Link>
      </div>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          >
          Reload page
        </button>
      </div>
          <NavBar/>
      <div>
        <select onChange={e => handleTypeFilter(e)}>
          <option value='All'>All</option>
          {types?.map((el) => {
            return(
              <option key={el.id} value={el.name}>{el.name}</option>
              )
          })}
        </select>
      </div>
      <div>
        <select onChange={e => hanldeNameFilter(e)}>
          <h3>Name</h3>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <select onChange={e => handleFilterAtk(e)}>
          <h3>Atack</h3>
          <option value="Default">Default</option>
          <option value="Max">Max</option>
          <option value="Min">Min</option>
        </select>
      </div>
      <div>
        <select onChange={e => handleFilterDB(e)}>
          <option value="All">All</option>
          <option value="created">Db</option>
          <option value="Api">Api</option>
        </select>
      </div>
    </div>
  );
};
