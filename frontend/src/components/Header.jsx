function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">VIA</a>
          <p>Your Health. Your People. Connected </p>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#myhealth">My Health</a>
          </li>
          <li>
            <a href="#mypeople">My People</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
