import "./App.css";
import CreateMealPlan from "./components/CreateMealPlan/CreateMealPlan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MealPlanResult from "./components/MealPlanResult/MealPlanResult";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateMealPlan />} />
          <Route path="/result" element={<MealPlanResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
