import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/recipeDetail" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
