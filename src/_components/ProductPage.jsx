import { Button } from '@/components/ui/button';
import { CreditCardIcon, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from "sonner";

const ProductPage = () => {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart();
    const naviate = useNavigate()
    useEffect(() => {
        const fetchShoes = async () => {
            const response = await fetch('/shoes.json');
            const data = await response.json();

            const foundShoe = data.products.find((shoe) => shoe.id === id);
            setShoe(foundShoe);
            setLoading(false);
        };

        fetchShoes();
    }, [id]);

    const handleAddToCart = () => {
        if (selectedSize) {
            toast('Added to cart')
            addToCart({ ...shoe, selectedSize, price: shoe.price });
        } else {
            toast('Please select size!');
        }
    };
    const goToCheckOut = () => {
        if (selectedSize) {
            addToCart({ ...shoe, selectedSize, price: shoe.price })
            naviate('/checkout')
        } else {
            toast('Please select size!');
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!shoe) {
        return <p>Shoe not found</p>;
    }

    return (
        <section className='w-full mt-3 h-auto lg:h-[80vh] flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] p-3 lg:p-0 flex flex-col items-center'>
                <div className='w-full flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='w-full lg:w-1/2 h-[300px] border flex justify-center items-center'>
                        <img className='w-full max-h-full object-contain' src={shoe.image} alt={shoe.name} />
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-col items-center gap-3'>
                        <h2 className='font-bold text-3xl text-center'>{shoe.name}</h2>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-2xl font-bold'>Sizes:</h2>
                            {shoe.sizes.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border p-3 rounded-full cursor-pointer transition-all ${selectedSize === item ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
                                        }`}
                                    onClick={() => setSelectedSize(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between w-full items-center mt-3'>
                            <Button onClick={handleAddToCart}>Add to cart <ShoppingCart /></Button>
                            <Button onClick={goToCheckOut}>Buy now <CreditCardIcon /></Button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-2'>
                    <h2 className='text-center font-bold text-3xl uppercase'>Description</h2>
                    <p>{shoe.description}</p>
                    <p className='text-lg font-bold'>Price: {shoe.price.toFixed(2)} zł</p>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
