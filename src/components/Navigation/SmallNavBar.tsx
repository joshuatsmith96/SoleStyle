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
import { useEffect } from "react";

export default function SmallNavBar() {
  
  let favorites = localStorage.getItem("favorites") != null ? localStorage.getItem("favorites") : null;
  let formattedFavorites = favorites != null ? JSON.parse(favorites) : ""
  useEffect(() => {
    console.log("test")
  })

  //Get number of liked items

  return (
    <div className="fixed top-0 left-0 w-full py-2 px-5 flex flex-col justify-between gap-4 md:hidden bg-white z-10 transition-3">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl">
          <a href="/">SoleStyle</a>
        </h2>
        <div className="icons flex flex-row justify-center items-center gap-10 text-xl">
          <Link to="/profile" className="text-2xl"><FontAwesomeIcon icon={faUser} className="" /></Link>
          <Link to="/favorites" className="relative">
            <p className="heartCounter absolute text-white font-bold left-0 top-0 w-full h-full flex flex-col items-center justify-center text-[10px] pb-[2px]">{formattedFavorites.length === 0 ? "" : formattedFavorites.length}</p>
            <FontAwesomeIcon icon={faHeart} className="text-2xl "/>
          </Link>
          <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} className="text-2xl"/></Link>
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
