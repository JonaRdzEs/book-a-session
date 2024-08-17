import { useState } from "react";
import Button from "./common/Button";
import Menu from "./common/icons/Menu";
import Cross from "./common/icons/Cross";
import Book from "./common/icons/Book";
import BookmarkPlus from "./common/icons/BookmarkPlus";
import BookUpload from "./common/icons/BookUpload";

type MobileMenuProps = {
  className?: string,
};

function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const open = () => setMenuOpen(true);
  const close = () => setMenuOpen(false);

  return (
    <div className={`relative ${className}`}>
      <Button
        className="bg-[#f8f8f8] p-1 rounded-sm shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)]"
        onClick={isMenuOpen ? close : open}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={`${isMenuOpen ? "Close" : "Open"} menu`}
      >
        {isMenuOpen ? <Cross /> : <Menu />}
      </Button>
      {isMenuOpen && (
        <ul id="mobile-menu" className="absolute z-10 bg-[#f8f8f8] w-48 right-0 rounded-sm flex justify-start items-start flex-col shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)]">
          <li className="text-dark-charcoal w-full p-3 border-b border-gray">
            <Button className="flex justify-start items-center gap-2 w-full" to="/sessions" onClick={close}>
              <Book className="w-6 h-6" />
              Browse sessions
            </Button>
          </li>
          <li className="text-dark-charcoal w-full p-3 border-b border-gray">
            <Button className="flex justify-start items-center gap-2 w-full" to="/upcoming-sessions" onClick={close}>
            <BookUpload className="w-6 h-6" />
              Upcoming sessions
            </Button>
          </li>
          <li className="text-dark-charcoal w-full p-3 border-b border-gray">
            <Button className="flex justify-start items-center gap-2 w-full" to="/my-sessions" onClick={close}>
            <BookmarkPlus className="w-6 h-6" />
              My sessions
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileMenu;
