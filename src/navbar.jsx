import "./App.css";
import AirBnb_Logo from "/src/assets/airbnb-logo.png";

const Navbar = () => {
  return (
    <header>
        <div className="header-inner-cont">
            <nav className="navbar">
                <img src={AirBnb_Logo} alt="AirBnb Logo"></img>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
