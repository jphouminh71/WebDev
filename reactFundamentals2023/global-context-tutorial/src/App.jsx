import "./App.css";
import { useGlobalContext } from "./AppContext";

function App() {
  const { name } = useGlobalContext(); // accessing the global contet provider we setup in AppContext.jsx
  return (
    <div>
      <h1>hello {name}</h1>
    </div>
  );
}

export default App;
