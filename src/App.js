import "./App.css";
import pokemonJSON from './pokemon.json'

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
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>

        <tbody>
          { pokemonJSON.slice(0.,20)
          .map((item) => (
             <tr key={[item.id, item.name.english]}
            >
            <td>{item.name.english}</td>
            <td>{item.type.join(", ")}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
