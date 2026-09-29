import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../Cartslice";

function Shop() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data.products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Wait for a while until we load the products</h2>;
  }

  return (
    <div className="shop">
      <h1>Shop Products</h1>

      <div className="product-grid">
        {   products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <Link to={`/product/${product.id}`}> <button>View Details</button> </Link>     
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>                    
                </div>
        ))}
      </div>

      <div className="cart">
        <h2>My Cart</h2>

        <p>Cart Items: {cartItems.length}</p>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((product) => (
              <div key={product.id}>
                <span>{product.title}</span>
                <button onClick={() => dispatch(removeFromCart(product.id))}> Remove from Cart </button>
              </div>
            ))}

            <button onClick={() => dispatch(clearCart())}> Clear Cart</button>
          </>
        )}
      </div>

    </div>
  );
}

export default Shop;