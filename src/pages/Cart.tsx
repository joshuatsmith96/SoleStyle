import { useState } from 'react';
import Data from '../test-data.json'

const Cart = () => {
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

    console.log(cartData)

    return(
        <div className="Cart px-4 pb-[400px]">
            <h1 className="text-2xl font-medium">Shopping Cart</h1>
            <p>{cartData != null && cartData.length > 0 ? "" : "Cart Is Empty"}</p>

            <div>
                {cartData.map((item) => {
                    return(
                        <div className='border p-5 my-3'>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart