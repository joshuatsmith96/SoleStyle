//Import Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

//Import Components
import SearchBar from "../Search/SearchBar";
import NavList from "./NavList";

export default function LargeNavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white hidden py-4 px-5 flex-col justify-between gap-4 xl:flex z-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-10">
            <h2 className="font-bold text-2xl"><a href="/">SoleStyle</a></h2>
            <div className="mainlinks flex flex-row gap-5 overflow-x-scroll whitespace-nowrap text-lg">
                <NavList />
            </div>
        </div>
        <div className="flex flex-row gap-10">
          <SearchBar />
          <div className="icons flex flex-row justify-center items-center gap-10 text-xl">
            <FontAwesomeIcon icon={faUser} className="" />
            <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  );
}
