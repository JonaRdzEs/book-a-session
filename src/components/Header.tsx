import Button from "./common/Button";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between md:justify-start items-center">
        <Button to="/">
          <img className="w-28 object-cover" src={logo} alt="BookMate logo" />
        </Button>
        <MobileMenu className="md:hidden" />
        <ul className="hidden md:flex md:flex-wrap md:flex-grow md:justify-end">
          <div className="flex justify-end items-center grow gap-4 mx-8 ">
            <li>
              <Button to="/sessions">Browse sessions</Button>
            </li>
            <li>
              <Button to="/upcoming-sessions">Upcoming sessions</Button>
            </li>
          </div>
          <li>
            <Button
              className="flex justify-center items-center w-32 h-10 text-light-gray bg-navy-blue font-bold rounded-sm"
              to="/my-sessions"
            >
              My sessions
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
