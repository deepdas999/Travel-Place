import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const stateRoutes = {
      "west bengal": "west-bengal",
      odisha: "odisha",
      rajasthan: "rajasthan",
      delhi: "delhi",
      "uttar pradesh": "uttar-pradesh",
      "tamil nadu": "tamil-nadu",
      kerala: "kerala",
      goa: "goa",
      "jammu and kashmir": "jammu-and-kashmir",
      kashmir: "jammu-and-kashmir",
      gujarat: "gujarat",
      punjab: "punjab",
      jharkhand: "jharkhand",
    };

    const searchValue = search.trim().toLowerCase();

    const stateSlug = stateRoutes[searchValue];

    if (stateSlug) {
      navigate(`/${stateSlug}`);
      setSearch("");
    } else {
      alert("State Not Found");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3 text-warning text-uppercase"
          to="/"
        >
          Bharat Darshan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <form
              className="d-flex flex-column flex-lg-row gap-2 ms-lg-3 mt-3 mt-lg-0"
              onSubmit={handleSearch}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search states..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                className="btn btn-warning"
                type="submit"
              >
                Search
              </button>

              <Link
                to="/login"
                className="btn btn-outline-warning"
              >
                Login
              </Link>
            </form>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;