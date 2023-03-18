import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/Landing Page/Landing";
import Home from "./Components/Home/Home";
import { CreatePokemon } from "./Components/Create Pokemon/CreatePokemon";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <SearchBar></SearchBar>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route exact path="/pokemons" component={CreatePokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
