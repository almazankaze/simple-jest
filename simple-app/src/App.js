import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App container">
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
