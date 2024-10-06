import { ShoppingBag, Store } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import shoes from '../assets/wintershoes.png'
import GlobalApi from '@/api/GlobalApi'
import WinterShoes from './WinterShoes'
const WinterPage = () => {
    const [winterShoes, setWinterShoes] = useState([])
    const getWinterShoes = async () => {
        try {
            const resp = await GlobalApi.getWinterShoes()
            setWinterShoes(resp);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getWinterShoes()
    }, [])
    return (
        <main>
            <section className='w-full h-auto flex mt-3 justify-center items-center'>
                <div className='w-full lg:w-11/12 xl:w-[60%] h-full justify-center'>
                    <div className='w-full border h-auto lg:h-[400px] bg-primary px-7 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white'>
                        <div>
                            <h2 className='text-4xl font-bold'>Only in StyleStash</h2>
                            <p className='text-2xl tracking-wider'>The best winter shoes!</p>
                            <div className='flex mt-3 gap-3'>
                                <Store />
                                <ShoppingBag />
                            </div>
                        </div>
                        <div className='w-full lg:w-[40%] xl:w-1/3'>
                            <img className='transform scale-x-[-1] w-full' src={shoes} alt="heroImg" />
                        </div>
                    </div>
                </div>
            </section>
            <h2 className='mt-3 font-bold text-center uppercase text-3xl'>For winter</h2>
            <WinterShoes winterShoess={winterShoes} />
        </main>
    )
}

export default WinterPage