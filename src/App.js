import "./App.css";

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
          <th>Bulbasur</th>
        </tr>

        <tbody>
          <tr>
            <td>Pica</td>
            <td>Bulbasur</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
