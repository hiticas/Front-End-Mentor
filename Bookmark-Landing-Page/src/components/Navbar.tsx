import logoBookmark from "../assets/images/logo-bookmark.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <img src={logoBookmark} alt="logo" className="logo_image" />
      <img
        src={iconHamburger}
        alt="icon-hamburger"
        className="icon_hamburger"
      />
      <div className="navbar_items">
        <nav className="navbar_links">
          <ul>
            <li className="navbar_link">
              <a href="#features">Features</a>
            </li>
            <li className="navbar_link">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="navbar_link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="login_button ">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
