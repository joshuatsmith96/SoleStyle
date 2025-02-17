//Import Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

//Import Components
import SearchBar from "../Search/SearchBar";
import NavList from "./NavList";
import "./Nav.css";

export default function SmallNavBar() {
  return (
    <div className="fixed top-0 left-0 w-full py-2 px-5 flex flex-col justify-between gap-4 md:hidden bg-white z-10 transition-3">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl">
          <a href="/">SoleStyle</a>
        </h2>
        <div className="icons flex flex-row justify-center items-center gap-10 text-xl">
          <FontAwesomeIcon icon={faUser} className="" />
          <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
      <SearchBar />
      <div className="top-0 left-0 navLinks mainlinks flex flex-row gap-5 overflow-x-scroll whitespace-nowrap text-lg">
        <NavList />
      </div>
      {/* <SearchBar />
      <div className="mainlinks flex flex-row gap-5 overflow-x-scroll whitespace-nowrap text-lg">
        <NavList />
      </div> */}
    </div>
  );
}
