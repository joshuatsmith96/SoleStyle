import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as outlinedHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons"

interface ProductProps{
    product: string,
    img: string,
    price: string,
    path: string
}

const addFavorite = (e:any) => {
    let outlinedHeart = document.getElementsByClassName("outlinedHeart")[0]
    let solidHeart = document.getElementsByClassName("solidHeart")[0]
}

const ProductTile: React.FC<ProductProps> = ({img, product, price, path}) => {
    return(
        <div className="w-[230px] rounded flex-shrink-0 shadow-md shadow-gray-700 xl:w-[280px] 2xl:w-[320px]">
            <a href={`/product/${path}`}>
            <img src={img} alt={`Product image for ${product}`} className="rounded-t h-[170px] w-full object-cover 2xl:h-[220px]" />
            <div className="p-2 px-5">
                <p className="text-md xl:text-xl break-words">{product}</p>
                <div className="flex flex-row justify-between pt-3">
                    <p className="text-sm xl:text-lg">{price}</p>
                    <div>
                        <FontAwesomeIcon icon={outlinedHeart} className="outlinedHeart hover:cursor-pointer xl:text-2xl" onClick={(e) => addFavorite(e)}/>
                        <FontAwesomeIcon icon={solidHeart} className="solidHeart hover:cursor-pointer xl:text-2xl" onClick={(e) => addFavorite(e)} style={{display: "none"}}/>
                    </div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default ProductTile