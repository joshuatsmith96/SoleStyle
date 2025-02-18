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

  let favorites = localStorage.getItem("favorites") != null ? localStorage.getItem("favorites") : null;
  let cart = localStorage.getItem("cart") != null ? localStorage.getItem("cart") : null;
  let formattedCart = cart != null ? JSON.parse(cart) : ""
  let formattedFavorites = favorites != null ? JSON.parse(favorites) : ""

  return (
    <div className="fixed top-0 left-0 w-full hidden py-4 px-5 flex-col justify-between gap-4 md:flex xl:hidden z-10 bg-white">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl"><a href="/">SoleStyle</a></h2>
        <div className="flex flex-row gap-10">
          <SearchBar />
          <div className="icons flex flex-row justify-center items-center gap-10 text-xl">
          <Link to="/profile" className="text-2xl"><FontAwesomeIcon icon={faUser} className="" /></Link>
          <Link to="/favorites" className="relative">
            <p className="heartCounter absolute text-white text-sm border z-10 bg-blue-400 w-[20px] h-[20px] rounded-full text-center top-[-8px] right-[-12px] flex flex-row justify-center items-center">{formattedFavorites.length === 0 ? "" : formattedFavorites.length}</p>
            <FontAwesomeIcon icon={faHeart} className="text-2xl"/>
          </Link>
          <Link to="/cart" className="relative">
            <p className="cartCounter absolute text-white text-sm border z-10 bg-blue-400 w-[20px] h-[20px] rounded-full text-center top-[-8px] right-[-12px] flex flex-row justify-center items-center">{formattedCart.length === 0 ? "" : formattedCart.length}</p>
            <FontAwesomeIcon icon={faBagShopping} className="text-2xl relative"/>
          </Link>
          </div>
        </div>
      </div>
      <div className="mainlinks flex flex-row gap-5 overflow-x-scroll whitespace-nowrap text-lg">
        <NavList></NavList>
      </div>
    </div>
  );
}
