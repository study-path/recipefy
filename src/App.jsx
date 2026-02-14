import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<div className="border-black border-2 h-screen">Hello</div>}
        />
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
