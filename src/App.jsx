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
      <div className="flex flex-col min-h-screen overflow-x-hidden   ">
        <NavBar />
        <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 ">
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
