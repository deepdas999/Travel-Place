import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="travel-footer">
      <div className="container">
        <div className="row g-5">

          {/* About */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">
              Bharat Darshan
            </h2>

            <p className="footer-description">
              Discover the beauty, culture, history and incredible
              destinations of India. Explore India state by state
              and make your journey unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">
              Quick Links
            </h5>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/states">Explore States</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">
              Popular Destinations
            </h5>

            <div className="footer-links">
              <span>West Bengal</span>
              <span>Jammu and kashmir</span>
              <span>Odisha</span>
              <span>Delhi</span>
              <span>Uttar Pradesh</span>
              <span>Tamil Nadu</span>

              
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">
              Contact Us
            </h5>

            <div className="footer-contact">
              <p>📍 India</p>
              <p>📧 bharatdarshan@gmail.com</p>
              <p>📞 +918116445024</p>
            </div>

            <div className="social-icons">
              <button>f</button>
              <button>in</button>
              <button>▶</button>
              <button>◎</button>
            </div>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>
            © 2026 Bharat Darshan. All Rights Reserved.
          </p>

          <p>
            Explore India • Discover Culture • Create Memories
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;