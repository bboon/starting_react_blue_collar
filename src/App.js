import "./App.css";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import  styled from "@emotion/styled";
import PokemonTable from "./components/pokemonTable";
import PokemonInfo from "./components/pokemonInfo";
import PokemonFilter from "./components/pokemonFilter";

const Title = styled.h1`
  text-align:center
`;


const TwoColumnLayout = styled.div`
  display: grid,
  grid-template-columns: 70% 30%,
  grid-column-gap: "1rem",
`

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
}

function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [pokemon, setPokemon] = useState([]);


  useEffect(()=> {
    fetch("http://localhost:3000/starting_react_blue_collar/pokemon.json").then(
      resp => resp.json()
    ).then( (data) => setPokemon(data))
  }, [])

  return (
    // dashed properties are camelcased in react
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <Title>Pokemon search</Title>
      <TwoColumnLayout>
       <div>
        <PokemonFilter
          filter={filter}
          setFilter={filterSet}/>

        <PokemonTable
          filter = {filter}
          pokemon={pokemon}
          setSelectedItem={setSelectedItem}
        />
        </div>
        </TwoColumnLayout>
      {selectedItem && <PokemonInfo {...selectedItem}></PokemonInfo>}
    </div>
  );
}

export default App;
