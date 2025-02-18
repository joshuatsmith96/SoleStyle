import { useParams } from "react-router";
import Data from '../test-data.json';
import Slider from "../components/Slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruckFast, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlinedHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons"

import { useState } from "react";
const ProductPage = () => {
    let shoe:any = useParams().id;
    let selectedData = Data.filter(item => item.path.includes(shoe))[0]
    let sizes = selectedData.sizes
    let id = selectedData.id

    let isFavorite = localStorage.getItem("favorites")
    isFavorite = isFavorite != null ? JSON.parse(isFavorite).includes(id) : null;
    let heartType = isFavorite ? "solid" : "outline"

    const [heart, setHeart] = useState(heartType)

    console.log(selectedData)

    function makeActive(e:any){
        let allSizes = document.getElementsByClassName("sizes")[0]
        for(let i=0; i<=allSizes.children.length-1; i++){
            allSizes.children[i].classList.remove("selectedSize")
        }
        e.target.classList.add("selectedSize")
    }

    const addFavorite = () => {
        let favorites = localStorage.getItem("favorites")
        let newFavorite;
        if(heart === "outline"){
            setHeart("solid")

            if(favorites != null){
                //Run push
                newFavorite = JSON.parse(favorites);
                newFavorite.push(id)
                localStorage.setItem("favorites", JSON.stringify(newFavorite))

            } else {
                console.log("favorites doesn't exist yet")
                newFavorite = `[${id}]`
                localStorage.setItem("favorites", newFavorite)
                console.log(localStorage.getItem("favorites"))
            }
        } else {
            setHeart("outline")
            //Remove from array

            //First retrieve formatted array
            //Remove from array
            //Send back to localstorage.
            console.log("BEFORE:")
            console.log(favorites)


            newFavorite = favorites != null ? JSON.parse(favorites) : ""
            let index = newFavorite.indexOf(id)
            newFavorite.splice(index, 1)
            newFavorite = "[" + newFavorite.toString() + "]";
            localStorage.setItem("favorites", newFavorite)


            console.log("AFTER")
        }

        //Change all heart counters based on the number of hearted objects
        let heartCounter = document.getElementsByClassName("heartCounter")
        favorites = localStorage.getItem("favorites");
        let count = favorites != null ? JSON.parse(favorites).length : "";
        for(let i=0; i<=heartCounter.length-1; i++){
            if(count === 0){
                heartCounter[i].innerHTML = "";
            } else {
                heartCounter[i].innerHTML = count;
            }
        }
    }

    return(
        <div className="flex flex-col gap-5 justify-center sm:items-center lg:flex-row lg:items-start sm:p-15 sm:gap-10">
            <Slider data={selectedData}/>
            <div className="w-full ProductInfo px-5 py-2 flex flex-col items-start justify-center sm:w-[600px]">
                <div>
                    <h1 className="text-3xl font-medium text-blue-400">{selectedData.name}</h1>
                </div>
                <div className="flex flex-row gap-2 text-gray-500">
                {selectedData.categories.map((category, index) => {
                    length = selectedData.categories.length;
                    index = index + 1;

                    if(index === length){
                        return(
                            <p>{category}</p>
                        )
                    } else {
                        return(
                            <p>{category},</p>
                        )
                    }
                })}
                </div>
                <div className="rating py-4 flex flex-row items-center justify-between w-full">
                    <p className="text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-500" /> {selectedData.reviews.stars} | <span className="font-light text-[#363636]">{selectedData.reviews.reviews} Reviews</span></p>
                    <div className="hearts">
                        <FontAwesomeIcon icon={heart === "outline" ? outlinedHeart : solidHeart} className="outlinedHeart hover:cursor-pointer text-lg sm:text-2xl z-10 text-red-500" onClick={() => addFavorite()}/>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl">Select Size</h3>
                    <div className="sizes flex flex-row flex-wrap justify-start gap-2 mt-3">
                        {sizes.map((size, index) => {
                            return(
                                <p key={index} onClick={(e) => makeActive(e)} className="w-[100px] border border-gray-400 p-2 rounded text-center hover:cursor-pointer hover:bg-gray-300">{size}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-10 sm:mt-5">
                    <h3 className="text-xl font-medium">Description</h3>
                    <p>{selectedData.description}</p>
                </div>
                <button className="border w-full py-3 rounded text-white bg-[#1C1C1C] font-medium mt-5 hover:cursor-pointer hover:bg-[#2b2b2b]">Add To Cart</button>
                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <div className="freeShipping flex flex-row items-center gap-2 sm:gap-5">
                        <FontAwesomeIcon icon={faTruckFast} className="text-3xl sm:text-4xl"></FontAwesomeIcon>
                        <div>
                        <p className="text-sm sm:text-lg">Free Shipping</p>
                        <p className="text-xs sm:text-sm">2-3 Business Days</p>
                        </div>
                    </div>
                    <div className="freeShipping flex flex-row items-center gap-2 sm:gap-5">
                        <FontAwesomeIcon icon={faRotateLeft} className="text-3xl sm:text-4xl"></FontAwesomeIcon>
                        <div>
                        <p className="text-sm sm:text-lg">Free Returns</p>
                        <p className="text-xs sm:text-sm">30-Day Return Window</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage