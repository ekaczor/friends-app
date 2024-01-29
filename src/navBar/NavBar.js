import HomePage from "../pages/home-page/HomePage"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
      navigate("/");
    };

    const navigateToHobbiesPage = () => {
        navigate("/hobbies");
      };

      const navigateToContactPage = () => {
        navigate("/contact-me");
      };

      const navigateToAboutPage = () => {
        navigate("/about-me");
      };

    return (
        <div>
        <nav className="nav">
            <button onClick={navigateToHomePage} className="button">Home</button>
            <button onClick={navigateToHobbiesPage} className="button">Hobbies</button>
            <button onClick={navigateToContactPage} className="button">Contact Me</button>
            <button onClick={navigateToAboutPage}  className="button">About Me</button>
        </nav></div>
    )
}

export default NavBar