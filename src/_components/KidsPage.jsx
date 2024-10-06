import { ShoppingBag, Store } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import kid from '../assets/kid.png'
import KidsShoes from './KidsShoes'
import GlobalApi from '@/api/GlobalApi'
const KidsPage = () => {
    const [kidsShoes, setKidsShoes] = useState([])
    const getKidsShoes = async () => {
        try {
            const resp = await GlobalApi.getKidsShoes()
            setKidsShoes(resp);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getKidsShoes()
    }, [])
    return (
        <main>
            <section className='w-full h-auto flex mt-3 justify-center items-center'>
                <div className='w-full lg:w-11/12 xl:w-[60%] h-full justify-center'>
                    <div className='w-full border h-auto lg:h-[400px] bg-primary px-7 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white'>
                        <div>
                            <h2 className='text-4xl font-bold'>Only in StyleStash</h2>
                            <p className='text-2xl tracking-wider'>Find the perfect shoes for your child</p>
                            <div className='flex mt-3 gap-3'>
                                <Store />
                                <ShoppingBag />
                            </div>
                        </div>
                        <div className='w-full lg:w-[40%] xl:w-1/4'>
                            <img className=' w-full ' src={kid} alt="kid" />
                        </div>
                    </div>
                </div>
            </section>
            <h2 className='mt-3 font-bold text-center uppercase text-3xl'>FOR KIDS</h2>
            <KidsShoes kidsShoes={kidsShoes} />
        </main>
    )
}

export default KidsPage
