import "./App.css";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import  styled from "@emotion/styled";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english} test</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );
};

// define the proptypes
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

const Title = styled.h1`
  text-align:center
`;


const TwoColumnLayout = styled.div`
  display: grid,
  grid-template-columns: 70% 30%,
  grid-column-gap: "1rem",
`

const PokemonInfo = ({ name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
      {
        Object.keys(base).map((key) => (
          <tr key={key}>
            <td>
              {key}
            </td>
            <td>
              {base[key]}
            </td>
          </tr>
        ))
      }</tbody>
    </table>
  </div>
)

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
        <input
          value={filter}
          onChange={(event) => filterSet(event.target.value)}
        ></input>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon && pokemon
              .filter((pokemon) =>
                pokemon.name.english
                  .toLocaleLowerCase()
                  .includes(filter.toLocaleLowerCase())
              )
              .slice(0, 20)
              .map((item) => (
                <PokemonRow
                  pokemon={item}
                  key={[item.id, item.name.english]}
                  onSelect={() => setSelectedItem(item)}
                ></PokemonRow>
              ))}
          </tbody>
        </table>
        </div>
        </TwoColumnLayout>
      {selectedItem && <PokemonInfo {...selectedItem}></PokemonInfo>}
    </div>
  );
}

export default App;
