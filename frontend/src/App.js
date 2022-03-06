import "./App.css";
import CreateMealPlan from "./components/CreateMealPlan/CreateMealPlan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateMealPlan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
