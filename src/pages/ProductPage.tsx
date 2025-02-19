import { useParams } from "react-router";
import Data from "../test-data.json";
import Slider from "../components/Slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruckFast,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlinedHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
const ProductPage = () => {
  let shoe: any = useParams().id;
  let selectedData = Data.filter((item) => item.path.includes(shoe))[0];
  let sizes = selectedData.sizes;
  let id = selectedData.id;

  let isFavorite = localStorage.getItem("favorites");
  isFavorite = isFavorite != null ? JSON.parse(isFavorite).includes(id) : null;
  let heartType = isFavorite ? "solid" : "outline";


  const [addedToCart, setAddedToCart] = useState(false)

  function updatedButtons(){
    let cart:any = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : "";
    if(cart != null){
      for(let i=0; i<=cart.length-1; i++){
        if(cart[i].id === id){
          console.log("Is Added")
          setAddedToCart(true)
        } else {
          setAddedToCart(false)
        }
      }
    }
  }

  useEffect(() => {
    updatedButtons()
  }, [])

  const [heart, setHeart] = useState(heartType);

  function makeActive(e: any) {
    let allSizes = document.getElementsByClassName("sizes")[0];
    for (let i = 0; i <= allSizes.children.length - 1; i++) {
      allSizes.children[i].classList.remove("selectedSize");
    }
    e.target.classList.add("selectedSize");
  }

  const addFavorite = () => {
    let favorites = localStorage.getItem("favorites");
    let newFavorite;
    if (heart === "outline") {
      setHeart("solid");

      if (favorites != null) {
        //Run push
        newFavorite = JSON.parse(favorites);
        newFavorite.push(id);
        localStorage.setItem("favorites", JSON.stringify(newFavorite));
      } else {
        console.log("favorites doesn't exist yet");
        newFavorite = `[${id}]`;
        localStorage.setItem("favorites", newFavorite);
        console.log(localStorage.getItem("favorites"));
      }
    } else {
      setHeart("outline");
      //Remove from array

      //First retrieve formatted array
      //Remove from array
      //Send back to localstorage.
      console.log("BEFORE:");
      console.log(favorites);

      newFavorite = favorites != null ? JSON.parse(favorites) : "";
      let index = newFavorite.indexOf(id);
      newFavorite.splice(index, 1);
      newFavorite = "[" + newFavorite.toString() + "]";
      localStorage.setItem("favorites", newFavorite);

      console.log("AFTER");
    }

    //Change all heart counters based on the number of hearted objects
    let heartCounter = document.getElementsByClassName("heartCounter")
    favorites = localStorage.getItem("favorites");
    let count = favorites != null ? JSON.parse(favorites).length : "";
    for(let i=0; i<=heartCounter.length-1; i++){
        if(count === 0){
            heartCounter[i].innerHTML = "";
            heartCounter[i].classList.add("hidden")
            heartCounter[i].classList.remove("block")
        } else if(count > 0) {
            heartCounter[i].innerHTML = count;
            heartCounter[i].classList.add("block")
            heartCounter[i].classList.remove("hidden")
        }
    }
  };

  function addToCart(e:any) {
    //Create new object 'template' that includes id and selected size
    let allSizes = document.getElementsByClassName("sizes")[0].children;
    let selectedSize;

    [...allSizes].forEach((size) => {
      if (size.classList.contains("selectedSize")) {
        selectedSize = size.innerHTML;
      }
    });

    if (selectedSize != undefined) {
      document.getElementsByClassName("selectSizeLabel")[0].classList.remove("text-red-400");
      document.getElementsByClassName("errorMessage")[0].classList.toggle("hidden")
      let storedCart = localStorage.getItem("cart");
      let data = storedCart ? JSON.parse(storedCart) : "";
      let template = {
        id: id,
        size: selectedSize,
      };

      if (storedCart != null) {
        //If already something in the cart
        let exists = false;
        data.map((item: any) => {
          if (item.id === id) {
            exists = true;
          }
        });

        if (exists === false) {
          console.log("Doesnt exist. Adding now.");
          //If cart does not already contain:
          data.push(template);
          localStorage.setItem("cart", JSON.stringify(data));
          e.target.style.display="none"
        } else {
            console.log('already exists, skipping')
        }
      } else {
        console.log("NOTHING IN CART")
        //If nothing in cart
        localStorage.setItem("cart", `[${JSON.stringify(template)}]`);
        e.target.style.display="none"
      }
    } else {
      //Turn red and don't continue
        document.getElementsByClassName("selectSizeLabel")[0].classList.add("text-red-400");
        document.getElementsByClassName("errorMessage")[0].classList.toggle("hidden")
    }

    //Change all heart counters based on the number of hearted objects
    let cartCounter = document.getElementsByClassName("cartCounter")
    let cart = localStorage.getItem("cart");
    let cartCount = cart != null ? JSON.parse(cart).length : "";
    for(let i=0; i<=cartCounter.length-1; i++){
        if(cartCount === 0){
          cartCounter[i].innerHTML = "";
          cartCounter[i].classList.add("hidden")
          cartCounter[i].classList.remove("block")
        } else if(cartCount > 0) {
          cartCounter[i].innerHTML = cartCount;
          cartCounter[i].classList.add("block")
          cartCounter[i].classList.remove("hidden")
        }
    }
    updatedButtons()
  }

  return (
    <div className="flex flex-col gap-5 justify-center sm:items-center lg:flex-row lg:items-start sm:p-15 sm:gap-10">
      <Slider data={selectedData} />
      <div className="w-full ProductInfo px-5 py-2 flex flex-col items-start justify-center sm:w-[600px]">
        <div>
          <h1 className="text-3xl font-medium text-blue-400">
            {selectedData.name}
          </h1>
        </div>
        <div className="flex flex-row gap-2 text-gray-500">
          {selectedData.categories.map((category, index) => {
            length = selectedData.categories.length;
            index = index + 1;

            if (index === length) {
              return <p>{category}</p>;
            } else {
              return <p>{category},</p>;
            }
          })}
        </div>
        <div className="rating py-4 flex flex-row items-center justify-between w-full">
          <p className="text-lg">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />{" "}
            {selectedData.reviews.stars} |{" "}
            <span className="font-light text-[#363636]">
              {selectedData.reviews.reviews} Reviews
            </span>
          </p>
          <div className="hearts">
            <FontAwesomeIcon
              icon={heart === "outline" ? outlinedHeart : solidHeart}
              className="outlinedHeart hover:cursor-pointer text-lg sm:text-2xl z-10 text-red-500"
              onClick={() => addFavorite()}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl selectSizeLabel">Select Size</h3>
          <div className="sizes flex flex-row flex-wrap justify-start gap-2 mt-3">
            {sizes.map((size, index) => {
              return (
                <p
                  key={index}
                  onClick={(e) => makeActive(e)}
                  className="w-[100px] border border-gray-400 p-2 rounded text-center hover:cursor-pointer hover:bg-gray-300"
                >
                  {size}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10 sm:mt-5">
          <h3 className="text-xl font-medium">Description</h3>
          <p>{selectedData.description}</p>
        </div>
        <div className="w-full mt-5">
          <p className="errorMessage text-red-500 hidden">*Please select a size</p>
        <button
          className={`addToCartButton border w-full py-3 rounded text-white bg-[#1C1C1C] font-medium hover:cursor-pointer hover:bg-[#2b2b2b] ${addedToCart ? "hidden" : "block"}`}
          onClick={(e) => addToCart(e)}
        >
          Add To Cart
        </button>
        <button
          className={`addedToCart border w-full py-3 rounded text-gray-500 bg-white font-medium ${addedToCart ? "block" : "hidden"}`}
        >
          Added To Cart
        </button>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-5">
          <div className="freeShipping flex flex-row items-center gap-2 sm:gap-5">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="text-3xl sm:text-4xl"
            ></FontAwesomeIcon>
            <div>
              <p className="text-sm sm:text-lg">Free Shipping</p>
              <p className="text-xs sm:text-sm">2-3 Business Days</p>
            </div>
          </div>
          <div className="freeShipping flex flex-row items-center gap-2 sm:gap-5">
            <FontAwesomeIcon
              icon={faRotateLeft}
              className="text-3xl sm:text-4xl"
            ></FontAwesomeIcon>
            <div>
              <p className="text-sm sm:text-lg">Free Returns</p>
              <p className="text-xs sm:text-sm">30-Day Return Window</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
