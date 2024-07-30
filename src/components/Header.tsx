import Button from "./common/Button";

function Header() {
  return (
    <header className="w-full">
      <nav>
        <ul className="flex flex-wrap">
          <div className="flex justify-center items-center grow gap-4">
            <li>
              <Button to="/">Our mission</Button>
            </li>
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
