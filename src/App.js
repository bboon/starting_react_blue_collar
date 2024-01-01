import "./App.css";
import pokemonJSON from "./pokemon.json";
import { PropTypes } from "prop-types";
import { useState } from "react";

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

  return (
    // dashed properties are camelcased in react
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
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
            {pokemonJSON
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
      </div>
      {selectedItem && <PokemonInfo {...selectedItem}></PokemonInfo>}
    </div>
  );
}

export default App;
