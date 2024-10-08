import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';


const SuccessPage = () => {
    const { clearCart } = useCart();
    useEffect(() => {
        clearCart();
    }, [])
    return (
        <section className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full flex justify-center items-center'>
                <div className='w-full lg:w-1/2 border h-[300px] flex p-3 flex-col justify-center items-center gap-2'>
                    <h2 className='font-bold text-3xl text-center'>Thank you for purchasing - StyleStash</h2>
                    <CheckCircle size={60} className='text-green-600 animate-pulse' />
                    <Link to={'/'} className='w-full'><Button className='w-full'>Back to home page</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default SuccessPage