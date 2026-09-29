import { Link } from "react-router-dom";

function Home() {
  return (

    <div className="home">
      <h1>Welcome to Store </h1>
      <p>Latest & Trendy Collections</p>
      <Link to="/shop">
        <button>Check-out Products</button>
      </Link>
    </div>
  );
}

export default Home;
