import { useEffect, useState } from "react";
import { Link } from "react-router";
import AllData from '../test-data.json'



interface CartTileProps{
    name: string;
    thumbnail: string;
    price: string;
    id: number;
    totalPrice: any;
}

const CartTile: React.FC<CartTileProps> = ({name, thumbnail, price, id, totalPrice}) => {
    const [prodPrice, setProdPrice] = useState(price)
    const [quantity, setQuantity] = useState(1)

    const RetrieveLocalData = (filtered:boolean) => {
        let data:any = localStorage.getItem("cart")
        console.log(data)
        data = data ? JSON.parse(data) : null

        if(filtered){
            let prodData = data ? data.filter((d:any) => d.id === id) : ""
            return prodData[0]
        } else {
            return data
        }
    }

    const RetrieveData = () => {
        let dataId = RetrieveLocalData(true).id;
        return AllData.filter((data) => data.id === dataId)
    }

    //Retrieving Quantity
    let prodData = RetrieveLocalData(true)

    useEffect(() => {
        setQuantity(prodData.quantity)
        setProdPrice((parseFloat(price) * parseInt(RetrieveLocalData(true).quantity)).toFixed(2))

        //Get total price
        setTotalPrice(getTotalPrice().toString())
    })

    const getTotalPrice = () => {
        let allPrices = document.getElementsByClassName("allCartTiles")[0].children
        let totalPrice:number = 0;
        for(let i=0; i<=allPrices.length-1; i++){
            let price = parseFloat(allPrices[i].children[1].innerHTML.slice(1));
            totalPrice += price;
        }

        return parseFloat(totalPrice.toFixed(2))
    }

    const setNewQuantity = (value: string) =>{
        //Set quantity on stored object
        //1. get array
       let cartData = RetrieveLocalData(false);
       let index = cartData.findIndex((obj:any) => obj.id === id)
       cartData[index].quantity = parseInt(value);
       localStorage.setItem("cart", JSON.stringify(cartData))

        //Set price on tile
        setProdPrice((parseFloat(price) * parseInt(value)).toFixed(2))
    }

    const removeFromCart = (e:any) => {
        //Remove from cart
        e.target.parentNode.parentNode.parentNode.parentNode.remove()

        // Remove from list
        let cartData = RetrieveLocalData(false);
        let index = cartData.findIndex((obj:any) => obj.id === id);

        if (index !== -1) {
            cartData.splice(index, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
        setQuantity(prodData.quantity)
        setProdPrice((parseFloat(price) * parseInt(RetrieveLocalData(true).quantity)).toFixed(2))
    }

    const setTotalPrice = (price:string) => {
        return totalPrice(price)
    }

    return(
        <div className='p-5 flex flex-row items-center justify-between rounded-xl bg-white md:w-full'>
        <div className='flex flex-row gap-5 items-center'>
            <Link to={`../product/${RetrieveData()[0].path}`}><img src={thumbnail} alt={`Thumbnail image for ${name}`} className='w-[80px] h-[80px] rounded-xl' /></Link>
            <div>
                <h1 className='text-md font-medium'>{name}</h1>
                <h2 className='text-md text-[#505050]'>Size: Test</h2>
                <div className="flex flex-row items-center gap-3">
                    <select value={quantity} name="quantity" id="quantity" className='w-[60px] border px-1 rounded border-gray-500' onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setNewQuantity(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <span onClick={(e:any) => removeFromCart(e)} className="flex flex-row items-center justify-center hover:cursor-pointer hover:text-red-900">Remove</span>
                </div>
            </div>
        </div>
        <h1 className='allPrices font-medium'>${prodPrice}</h1>
    </div>
    )
}

export default CartTile