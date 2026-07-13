import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="hero-content text-white">
          <h1 className="display-3 fw-bold">
            {/* Explore India State by State */}
          </h1>

          <p className="lead my-4">
            Discover the beauty, culture, history and amazing tourist places
            of Incredible India.
          </p>

          <Link
               to="/states"
              className="btn btn-warning btn-lg rounded-pill px-4 fw-bold">
              Explore Now
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;