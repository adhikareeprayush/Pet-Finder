import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Components/Details";
import SearchParams from "./Components/SearchParams";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;