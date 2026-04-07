import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailPage from "./pages/RecipeDetail/RecipeDetailPage";
import "primereact/resources/themes/lara-light-blue/theme.css";
import NavBar from "./shared/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/recipeDetail/:id" element={<RecipeDetailPage />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
