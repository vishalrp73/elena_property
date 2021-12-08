import "./App.css";
import Search from "./components/search/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/property/property";
import Navbar from "./components/navbar/navbar";

function App() {
  console.log("search function branch");

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Search />}></Route>

        <Route path="/property/:id" element={Property} />
      </Routes>
    </div>
  );
}

export default App;
