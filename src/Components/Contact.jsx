function Contact() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold text-warning">Contact Us</h1>
          <p className="text-secondary">
            Have questions about your next journey? Get in touch with us.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">

            <div className="card shadow border-0">
              <div className="card-body p-4">

                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;