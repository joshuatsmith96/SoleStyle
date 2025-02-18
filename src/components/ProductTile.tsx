import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as outlinedHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router"

interface ProductProps{
    product: string,
    img: string,
    price: string,
    path: string,
    id: number,
    heartStyle: string
}

const ProductTile: React.FC<ProductProps> = ({img, product, price, path, id, heartStyle}) => {
    const [heart, setHeart] = useState(heartStyle)
    //Check to see if product is hearted
    

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
        <div className="w-[230px] rounded flex-shrink-0 shadow-md shadow-gray-700 xl:w-[280px] 2xl:w-[320px]">
            <Link to={`/product/${path}`}><img src={img} alt={`Product image for ${product}`} className="rounded-t h-[170px] w-full object-cover 2xl:h-[220px]" /></Link>
            <div className="p-2 px-5">
            <Link to={`/product/${path}`}><p className="text-md xl:text-xl overflow-hidden">{product}</p></Link>
                <div className="flex flex-row justify-between pt-3">
                    <p className="text-sm xl:text-lg">{price}</p>
                    <div className="hearts">
                        <FontAwesomeIcon icon={heart === "outline" ? outlinedHeart : solidHeart} className="outlinedHeart hover:cursor-pointer xl:text-2xl z-10 text-red-500" onClick={() => addFavorite()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTile