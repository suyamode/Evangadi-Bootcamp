import "./commonResource/style.css";
import FoodItem from "./assets/Components/FoodItem/FoodItem";
import foods from "./assets/items.js";
import Header from "./assets/Components/Header/Header.jsx";
import "./App.css";

function App() {
  return (
    <div className="all-container">
      <Header />
      <div className="foods-container">
        {" "}
        {/* ✅ Single grid parent */}
        {foods.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
