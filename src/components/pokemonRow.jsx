import { Button } from "@mui/material";
import { PropTypes } from "prop-types";
import PokemonType from "../pokemonType";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english} test</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>Select</Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType)
}

export default PokemonRow;  
