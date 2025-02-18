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

  let favorites = localStorage.getItem("favorites") != null ? localStorage.getItem("favorites") : null;
  let formattedFavorites = favorites != null ? JSON.parse(favorites) : ""

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
          <Link to="/profile" className="text-3xl"><FontAwesomeIcon icon={faUser} className="" /></Link>
          <Link to="/favorites" className="relative">
            <p className="heartCounter absolute text-white font-bold left-0 top-0 w-full h-full flex flex-col items-center justify-center text-[14px] pb-[2px]">{formattedFavorites.length === 0 ? "" : formattedFavorites.length}</p>
            <FontAwesomeIcon icon={faHeart} className="text-3xl"/>
          </Link>
          <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} className="text-3xl"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
