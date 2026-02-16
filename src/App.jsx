import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailPage from "./pages/RecipeDetail/RecipeDetailPage";
import "primereact/resources/themes/lara-light-blue/theme.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/recipeDetail/:id" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
