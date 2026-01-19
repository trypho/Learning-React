import "./App.css";
import "./styles.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import MoviesGrid from "./components/MoviesGrid.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
