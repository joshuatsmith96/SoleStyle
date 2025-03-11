import { useEffect, useState } from "react";
import { Link } from "react-router";

interface CartTileProps {
    name: string;
    thumbnail: string;
    price: string;
    id: number;
    removeItem: (id: number) => void;
    updateTotal: () => void; // New prop to trigger total update
}

const CartTile: React.FC<CartTileProps> = ({ name, thumbnail, price, id, removeItem, updateTotal }) => {
    const [prodPrice, setProdPrice] = useState(parseFloat(price).toFixed(2));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        let product = cart.find((item: any) => item.id === id);
        if (product) {
            setQuantity(product.quantity || 1);
            setProdPrice((parseFloat(price) * product.quantity).toFixed(2));
        }
    }, [price, id]);

    const setNewQuantity = (value: string) => {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        let index = cart.findIndex((item: any) => item.id === id);
        
        if (index !== -1) {
            cart[index].quantity = parseInt(value);
            localStorage.setItem("cart", JSON.stringify(cart));
            setProdPrice((parseFloat(price) * parseInt(value)).toFixed(2));
            setQuantity(parseInt(value));
            updateTotal(); // Ensure total updates when quantity changes
        }
    };

    return (
        <div className='p-5 flex flex-row items-center justify-between rounded-xl bg-white md:w-full'>
            <div className='flex flex-row gap-5 items-center'>
                <Link to={`../product/${id}`}>
                    <img src={thumbnail} alt={`Thumbnail image for ${name}`} className='w-[80px] h-[80px] rounded-xl' />
                </Link>
                <div>
                    <h1 className='text-md font-medium'>{name}</h1>
                    <h2 className='text-md text-[#505050]'>Size: Test</h2>
                    <div className="flex flex-row items-center gap-3">
                        <select value={quantity} onChange={(e) => setNewQuantity(e.target.value)} className='w-[60px] border px-1 rounded border-gray-500'>
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <span onClick={() => removeItem(id)} className="flex flex-row items-center justify-center hover:cursor-pointer hover:text-red-900">
                            Remove
                        </span>
                    </div>
                </div>
            </div>
            <h1 className='allPrices font-medium'>${prodPrice}</h1>
        </div>
    );
};

export default CartTile;
