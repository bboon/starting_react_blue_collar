import "./App.css";
import pokemonJSON from "./pokemon.json";
import { PropTypes } from "prop-types";

const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name.english} test</td>
      <td>{pokemon.type.join(", ")}</td>
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
};

function App() {
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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemonJSON.slice(0, 20).map((item) => (
            <PokemonRow
              pokemon={item}
              key={[item.id, item.name.english]}
            ></PokemonRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
