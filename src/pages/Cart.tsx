import { use, useEffect, useState } from 'react';
import CartTile from '../components/CartTiles';
import Data from '../test-data.json';

const Cart = () => {
    const [subTotal, setSubTotal] = useState("");
    let cartObjects = localStorage.getItem("cart");
    cartObjects = cartObjects ? JSON.parse(cartObjects) : []; // Ensure it's an array
    let cartData = []

    //Get all details for cart objects
    if(cartObjects != null){
        for(let i=0; i<=cartObjects.length-1; i++){
            let id = Array.isArray(cartObjects) && cartObjects.length > 0 ? cartObjects[i].id : "";
            cartData.push(Data.filter(item => item.id === id)[0]);
        }
    }

    const getTotal = (total?:any) => {
        console.log('Getting total. Total is: ')
        setSubTotal(total)
    }

    return(
        <div className="Cart px-4 py-10 pb-[400px] bg-[#f1f1f1] lg:px-[5%] xl:px-[10%]">
            <h1 className="text-2xl font-medium">Shopping Cart</h1>
            <div className='flex flex-col mt-5 md:flex-row md:justify-between md:items-start md:gap-5'>
                <p className={`${cartData != null && cartData.length > 0 ? "hidden" : "block"}`}>{cartData != null && cartData.length > 0 ? "" : "Cart Is Empty"}</p>
                <div className='allCartTiles flex flex-col pb-5 gap-5 flex-2'>
                    {cartData.map((item) => {
                        let size = cartObjects;
                        console.log(size)
                        return(
                            <CartTile key={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} id={item.id} totalPrice={getTotal}/>
                        )
                    })}
                </div>
                <div className='py-5 px-10 bg-white rounded-xl flex-1'>
                    <h1 className='font-medium text-xl'>Order Summary</h1>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Subtotal</p>
                        <p>${subTotal ? subTotal : "0"}</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Tax</p>
                        <p>${subTotal ? (parseFloat(subTotal) * .15).toFixed(2) : "0"}</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light border-t border-gray-300 mt-2 pt-2'>
                        <p>Total</p>
                        <p>${subTotal ? (parseFloat(subTotal) + parseFloat((parseFloat(subTotal) * .15).toFixed(2))).toFixed(2) : "0"}</p>
                    </div>
                    <button className='border w-full rounded py-2 mt-3 bg-black text-white hover:cursor-pointer hover:bg-[#3f3f3f]'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart