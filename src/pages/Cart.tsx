import { useState, useEffect } from 'react';
import CartTile from '../components/CartTiles';
import Data from '../test-data.json';

const Cart = () => {
    const [subTotal, setSubTotal] = useState("0");
    const [cartData, setCartData] = useState(() => {
        let cartObjects:any = localStorage.getItem("cart");
        cartObjects = cartObjects ? JSON.parse(cartObjects) : [];
        return cartObjects.map((cartItem:any) => Data.find(item => item.id === cartItem.id)).filter(Boolean);
    });

    // Update subtotal when cartData changes
    useEffect(() => {
        updateTotal();
    }, [cartData]);

    const updateTotal = () => {
        const total = cartData.reduce((sum:any, item:any) => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const cartItem = cart.find((cartItem: any) => cartItem.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 1;
            return sum + parseFloat(item.price) * quantity;
        }, 0);
        setSubTotal(total.toFixed(2));
    };

    const removeItem = (id: number) => {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter((cartItem: any) => cartItem.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartData(cart.map((cartItem: any) => Data.find(item => item.id === cartItem.id)).filter(Boolean));

    // Ensure total updates immediately
    updateTotal();
};

    return (
        <div className="Cart px-4 py-10 pb-[400px] bg-[#f1f1f1] lg:px-[5%] xl:px-[10%]">
            <h1 className="text-2xl font-medium">Shopping Cart</h1>
            <div className='flex flex-col mt-5 md:flex-row md:justify-between md:items-start md:gap-5'>
                {cartData.length === 0 ? <p>Cart Is Empty</p> : null}
                <div className='allCartTiles flex flex-col pb-5 gap-5 flex-2'>
                    {cartData.map((item:any) => (
                        <CartTile 
                            key={item.id} 
                            name={item.name} 
                            thumbnail={item.thumbnail} 
                            price={item.price} 
                            id={item.id} 
                            removeItem={removeItem} 
                            updateTotal={updateTotal} // Pass updateTotal to CartTile
                        />
                    ))}
                </div>
                <div className='py-5 px-10 bg-white rounded-xl flex-1'>
                    <h1 className='font-medium text-xl'>Order Summary</h1>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light'>
                        <p>Tax</p>
                        <p>${(parseFloat(subTotal) * 0.15).toFixed(2)}</p>
                    </div>
                    <div className='text-lg flex flex-row justify-between font-light border-t border-gray-300 mt-2 pt-2'>
                        <p>Total</p>
                        <p>${(parseFloat(subTotal) * 1.15).toFixed(2)}</p>
                    </div>
                    <button className='border w-full rounded py-2 mt-3 bg-black text-white hover:cursor-pointer hover:bg-[#3f3f3f]'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
