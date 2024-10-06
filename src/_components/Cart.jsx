import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = ({ modal, setModal }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const cartRef = useRef(null);

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setModal]);

    return (
        <div
            ref={cartRef}
            className={`${modal ? 'absolute' : 'hidden'} w-[300px] z-40 h-[600px] right-6 top-14 border bg-white shadow-lg overflow-y-auto`}
        >
            <h2 className='text-lg font-bold p-4 border-b'>Cart</h2>
            {cartItems.length === 0 ? (
                <p className='p-4 text-center'>Cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className='flex justify-between items-center p-3 border-b'>
                                <div>
                                    <p>{item.name}</p>
                                    <p className='text-sm text-gray-500'>Size: {item.selectedSize}</p>
                                    <p className='text-lg font-bold'>Price: {item.price.toFixed(2)} zł</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className='text-red-500'>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className='p-4'>
                        <p className='text-lg font-bold'>Total: {totalPrice.toFixed(2)} zł</p>
                    </div>
                    <div className='p-4 flex flex-col w-full gap-3'>
                        <Button className='bg-red-600 hover:bg-red-400' onClick={clearCart}>Clear cart</Button>
                        <Link className='w-full' to={'/checkout'}><Button className='w-full'>Go to checkout</Button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
