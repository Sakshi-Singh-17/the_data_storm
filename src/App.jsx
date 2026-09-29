import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Store</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;