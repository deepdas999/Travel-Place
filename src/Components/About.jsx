import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Bharat Darshan</h1>

        <p>
          Bharat Darshan is a travel website designed to help people explore
          the beauty, culture, history, and famous tourist places of India.
        </p>

        <p>
          Our goal is to make travelling across India simple and enjoyable.
          Discover amazing destinations and explore India state by state.
        </p>

        <h2>Why Bharat Darshan?</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>Explore India</h3>
            <p>Discover beautiful tourist destinations across India.</p>
          </div>

          <div className="about-card">
            <h3>State by State</h3>
            <p>Explore famous places, culture and attractions of each state.</p>
          </div>

          <div className="about-card">
            <h3>Easy Travel Guide</h3>
            <p>Find useful information to make your journey easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;