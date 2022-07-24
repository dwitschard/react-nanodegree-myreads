import "./App.css";
import { SearchContainer } from "./features/search/SearchContainer";
import { Route, Routes } from "react-router-dom";
import { MyReadsContainer } from "./features/my-reads/MyReadsContainer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MyReadsContainer />} />
        <Route path="/search" element={<SearchContainer />} />
      </Routes>
    </div>
  );
}

export default App;
