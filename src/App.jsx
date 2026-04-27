import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RecipeDetailPage from "./pages/RecipeDetail/RecipeDetailPage";
import "primereact/resources/themes/lara-light-blue/theme.css";
import NavBar from "./shared/NavBar.jsx";
import Footer from "./shared/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className=" flex flex-col">
        <NavBar />
        <main className="flex flex-1 items-center justify-center min-h-[calc(100vh-140px)]">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/recipeDetail/:id" element={<RecipeDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
