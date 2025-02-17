//Import Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

//Import Components
import SearchBar from "../Search/SearchBar";
import NavList from "./NavList";

export default function MediumNavBar() {
  return (
    <div className="fixed top-0 left-0 w-full hidden py-4 px-5 flex-col justify-between gap-4 md:flex xl:hidden z-10 bg-white">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl"><a href="/">SoleStyle</a></h2>
        <div className="flex flex-row gap-10">
          <SearchBar />
          <div className="icons flex flex-row justify-center items-center gap-10 text-xl">
            <FontAwesomeIcon icon={faUser} className="" />
            <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
      <div className="mainlinks flex flex-row gap-5 overflow-x-scroll whitespace-nowrap text-lg">
        <NavList></NavList>
      </div>
    </div>
  );
}
