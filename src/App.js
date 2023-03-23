import logo from "./logo.svg";
import "./App.css";

function App() {
  // FAKE : appel vers une api (donc BDD), pour récupérer
  // les données suivantes

  const users = [
    {
      firstName: "David ",
      lastName: "Robert",
      job: "web dev",
    },
    {
      firstName: "David 2",
      lastName: "Robert 2",
      job: "web dev 2",
    },
    {
      firstName: "David 3",
      lastName: "Robert 3",
      job: "web dev 3",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.firstName}</h1>
          <h2>{user.lastName}</h2>
          <h3>{user.job}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
