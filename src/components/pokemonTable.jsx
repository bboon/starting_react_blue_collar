import PokemonRow from "./pokemonRow";


const PokemonTable = ({pokemon, filter, setSelectedItem}) => (
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
)

export default PokemonTable;