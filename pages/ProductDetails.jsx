import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Wait for a while until we load the products</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>Price: ${product.price}</h2>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <Link to="/shop"> <button>Back to Shop</button>  </Link>
        
      </div>
    </div>
  );
}

export default ProductDetails;