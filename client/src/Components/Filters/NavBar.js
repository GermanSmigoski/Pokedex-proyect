import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Actions";
import "./NavBar.css";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
const NavBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchName(name));
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 350, marginTop:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search pokemon..."
          onChange={(e) => handleInputChange(e)}
          inputProps={{ "aria-label": "Search Pokemon" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={(e) => handleSubmit(e)}
        >
          <SearchIcon></SearchIcon>
        </IconButton>
      </Paper>
    </div>
  );
};

export default NavBar;
