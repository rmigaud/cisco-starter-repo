import "./App.css";
import { Exhibit } from "./components/Exhibit";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div>
        <Banner />
      </div>

      <header className="App-header">
        <Exhibit />
      </header>
    </div>
  );
}

export default App;
