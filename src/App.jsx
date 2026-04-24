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
      <div className="flex flex-col h-screen border-3 border-green-600">
        <NavBar />
        <main className="flex flex-1 items-center justify-center border-3 border-yellow-600">
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
