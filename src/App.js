import logo from "./logo.svg";
import "./App.css";

function App() {
  // FAKE : appel vers une api (donc BDD), pour récupérer
  // les données suivantes
  const firstName = "David";
  const lastName = "Robert";
  const job = "web dev";
  const age = 33;

  return (
    <div>
      <h2>
        Bonjour {firstName} {lastName}
      </h2>
      <h3>Ton métier : {job}</h3>
      <h4>Ton age : {age} </h4>
    </div>
  );
}

export default App;
