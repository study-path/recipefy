import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/recipeDetail"
          element={
            <div className="border-red-400 border-2 h-screen">
              Recipe Detail
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
