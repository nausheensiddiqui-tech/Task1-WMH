const About = () => {
  return (
    <section className="about-section">

      {/* LEFT SIDE */}

      <div className="about-left">

        <p className="about-tag">
          About Us
        </p>

        <h2>
          Discovering
          <br />
          Future Faces
          <br />
          Of Fashion
        </h2>

      </div>

      {/* RIGHT SIDE */}

      <div className="about-right">

        <div className="about-content-box">

          <p>
            World Model Hunt is an editorial-driven
            fashion discovery platform dedicated to
            spotlighting emerging talent from across
            the world.
          </p>

          <p>
            Blending the worlds of fashion media,
            luxury publishing, and model scouting,
            WMH provides aspiring models,
            photographers, stylists, and creatives
            a global stage to showcase their work
            and connect with industry leaders.
          </p>

          <p>
            Beyond editorials and digital magazines,
            the platform functions as a modern
            talent network where individuals can
            register themselves for campaigns,
            collaborations, online features,
            fashion contests, interviews,
            webitorials, and international
            brand opportunities.
          </p>

          <p>
            Inspired by modern couture,
            runway culture, and luxury publishing,
            WMH bridges fashion, storytelling,
            and creative identity.
          </p>

        </div>

        {/* STATS */}

        <div className="about-stats">

          <div className="stat-box">
            <h3>150+</h3>
            <span>Global Models</span>
          </div>

          <div className="stat-box">
            <h3>28</h3>
            <span>Editorial Campaigns</span>
          </div>

          <div className="stat-box">
            <h3>12</h3>
            <span>Fashion Cities</span>
          </div>

          <div className="stat-box">
            <h3>50+</h3>
            <span>Countries</span>
          </div>

        </div>

        {/* MINI LINE */}

        <div className="about-mini-line">
          EST. 2025 • LUXURY • GLOBAL
        </div>

      </div>

    </section>
  );
};

export default About;