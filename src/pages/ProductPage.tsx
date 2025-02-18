import { useParams } from "react-router";
import Data from '../test-data.json';
import Slider from "../components/Slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruckFast, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {

    let shoe:any = useParams().id;
    let selectedData = Data.filter(item => item.path.includes(shoe))[0]
    let sizes = selectedData.sizes
    console.log(selectedData)

    function makeActive(e:any){
        let allSizes = document.getElementsByClassName("sizes")[0]
        for(let i=0; i<=allSizes.children.length-1; i++){
            allSizes.children[i].classList.remove("selectedSize")
        }
        e.target.classList.add("selectedSize")
    }

    return(
        <div className="flex flex-col gap-5 justify-center sm:items-center lg:flex-row lg:items-start sm:p-15 sm:gap-10">
            <Slider data={selectedData}/>
            <div className="w-full ProductInfo px-5 py-2 flex flex-col items-start justify-center sm:w-[600px]">
                <div>
                    <h1 className="text-3xl font-medium">{selectedData.name}</h1>
                </div>
                <div className="flex flex-row gap-2">
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
                <div className="rating py-4">
                    <p className="text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-500" /> {selectedData.reviews.stars} | <span className="font-light text-[#363636]">{selectedData.reviews.reviews} Reviews</span></p>
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