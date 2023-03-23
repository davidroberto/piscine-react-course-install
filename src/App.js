import logo from "./logo.svg";
import "./App.css";

function App() {
  const isUserConnected = true;

  // if (isUserConnected) {
  //   console.log("hello");
  // } else {
  //   console.log("connecte toi. Et plus vite que ça !");
  // }

  // isUserConnected ? console.log("hello") : console.log("connecte toi. Et plus vite que ça !");

  return <div>{isUserConnected ? <h1>Hello David</h1> : <h1>Connecte toi. Et plus vite que ça !</h1>}</div>;
}

export default App;
