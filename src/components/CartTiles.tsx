import { useEffect, useState } from "react";

interface CartTileProps{
    name: string;
    thumbnail: string;
    price: string;
    id: number;
}

const CartTile: React.FC<CartTileProps> = ({name, thumbnail, price, id}) => {
    const [prodPrice, setProdPrice] = useState(price)
    const [quantity, setQuantity] = useState(1)

    const RetrieveData = (filtered:boolean) => {
        let data:any = localStorage.getItem("cart")
        data = data ? JSON.parse(data) : null

        if(filtered){
            let prodData = data ? data.filter((d:any) => d.id === id) : ""
            return prodData[0]
        } else {
            return data
        }
    }

    //Retrieving Quantity
    let prodData = RetrieveData(true)

    useEffect(() => {
        setQuantity(prodData.quantity)
        setProdPrice((parseFloat(price) * parseInt(RetrieveData(true).quantity)).toFixed(2))


        //Get total price
        let allPrices = document.getElementsByClassName("allPrices")
        let totalPrice:number = 0
        for(let i=0; i<=allPrices.length-1; i++){
            let price = parseFloat(allPrices[i].innerHTML.slice(1))
            totalPrice += price;
        }

        totalPrice = parseFloat(totalPrice.toFixed(2))
        console.log(totalPrice)
    })

    const setNewQuantity = (value: string) =>{
        //Set quantity on stored object
        //1. get array
       let cartData = RetrieveData(false);
       let index = cartData.findIndex((obj:any) => obj.id === id)
       cartData[index].quantity = parseInt(value);
       localStorage.setItem("cart", JSON.stringify(cartData))
       console.log(cartData)

        //Set quantity on tile

        //Set price on tile
        setProdPrice((parseFloat(price) * parseInt(value)).toFixed(2))

    }

    return(
        <div className='p-5 my-5 flex flex-row items-center justify-between rounded-xl bg-white'>
        <div className='flex flex-row gap-5 items-center'>
            <img src={thumbnail} alt={`Thumbnail image for ${name}`} className='w-[80px] h-[80px] rounded-xl' />
            <div>
                <h1 className='text-md font-medium'>{name}</h1>
                <h2 className='text-md text-[#505050]'>Size: Test</h2>
                <select value={quantity} name="quantity" id="quantity" className='w-[60px] border px-2 py-1 rounded border-gray-500' onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setNewQuantity(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected={true}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </div>
        </div>
        <h1 className='allPrices font-medium'>${prodPrice}</h1>
    </div>
    )
}

export default CartTile