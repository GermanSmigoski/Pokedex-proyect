import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  DbFilter,
  AtkFilter,
  NameFilter,
  TypeFilter,
  getTypes,
} from "../../Actions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NavBar from "./NavBar";
import "./Filter.css"

const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getTypes);
  });

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons(e));
  }

  function handleFilterAtk(e) {
    dispatch(AtkFilter(e.target.value));
  }

  function handleFilterDB(e) {
    dispatch(DbFilter(e.target.value));
  }

  function hanldeNameFilter(e) {
    dispatch(NameFilter(e.target.value));
  }

  function handleTypeFilter(e) {
    dispatch(TypeFilter(e.target.value));
  }

  return (
    <div className="filters">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="types">Types</InputLabel>
        <Select
          labelId="types"
          onChange={(e) => handleTypeFilter(e)}
          label="types"
        >
          {types?.map((type) => {
            return (
              <MenuItem key={type?.id} value={type?.name}>
                {type?.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="names">Order by name</InputLabel>
        <Select labelId="names" onChange={hanldeNameFilter} label="names">
          <MenuItem value="A-Z">Ascendente</MenuItem>
          <MenuItem value="Z-A">Descendente</MenuItem>
        </Select>
      </FormControl>
      <NavBar/>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="atk">Attack Filter</InputLabel>
        <Select labelId="atk" onChange={handleFilterAtk} label="atk">
          <MenuItem value="Max">Max</MenuItem>
          <MenuItem value="Min">Min</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="db">Created / Existant</InputLabel>
        <Select labelId="db" onChange={handleFilterDB} label="db">
          <MenuItem value="created">Data base</MenuItem>
          <MenuItem value="Api">Api</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
