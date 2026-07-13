function Login() {
  return (
    <section className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">

                <div className="text-center mb-4">
                  <h2 className="fw-bold text-warning">
                    Bharat Darshan
                  </h2>

                  <p className="text-secondary">
                    Login to explore incredible India
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                      />
                      Remember me
                    </div>

                    <a href="#" className="text-warning text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg w-100 fw-bold"
                  >
                    Login
                  </button>

                  <p className="text-center mt-4 mb-0">
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="text-warning fw-bold text-decoration-none"
                    >
                      Register
                    </a>
                  </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;