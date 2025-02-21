import CartTile from '../components/CartTiles';
import Data from '../test-data.json';

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

    return(
        <div className="Cart px-4 py-10 pb-[400px] bg-[#f1f1f1]">
            <h1 className="text-2xl font-medium">Shopping Cart</h1>
            <p>{cartData != null && cartData.length > 0 ? "" : "Cart Is Empty"}</p>

            <div>
                {cartData.map((item) => {
                    let size = cartObjects;
                    console.log(size)
                    return(
                        <CartTile key={item.id} name={item.name} thumbnail={item.thumbnail} price={item.price} id={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart