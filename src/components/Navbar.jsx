const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        WORLD MODEL HUNT
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Print</li>
        <li>Digital</li>
        <li>Blog</li>
        <li>Editorials</li>
        <li>Models</li>
        <li>Agencies</li>
        <li>Campaigns</li>
        <li>About Us</li>
        <li>Contact</li>

        <button className="submission-btn">
          Submission
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;