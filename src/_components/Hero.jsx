import { ShoppingBag, Store } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import heroImg from '../assets/heroImg.webp';
import GlobalApi from '@/api/GlobalApi';
import ShoesHome from './ShoesHome';
import BestSellers from './BestSellers';
import Propositions from './Propositions';

const Hero = () => {
    const [homeShoes, setHomeShoes] = useState([]);
    const [bestSellersShoes, setBestSellersShoes] = useState([])
    const getHomeShoes = async () => {
        try {
            const resp = await GlobalApi.getHomeShoes();
            setHomeShoes(resp);
        } catch (error) {
            console.error('Error fetching shoes:', error);
        }
    };
    const getBestSellersShoes = async () => {
        try {
            const resp = await GlobalApi.getBestSellersShoes();
            setBestSellersShoes(resp);
        } catch (error) {
            console.error('Error fetching shoes:', error);
        }
    }

    useEffect(() => {
        getHomeShoes();
        getBestSellersShoes()
    }, []);

    return (
        <main>
            <section className='w-full h-auto flex mt-3 justify-center items-center'>
                <div className='w-full lg:w-11/12 xl:w-[60%] h-full justify-center'>
                    <div className='w-full border h-auto lg:h-[400px] bg-primary px-7 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white'>
                        <div>
                            <h2 className='text-4xl font-bold'>Welcome in StyleStash</h2>
                            <p className='text-2xl tracking-wider'>Buy everything you want!</p>
                            <div className='flex mt-3 gap-3'>
                                <Store />
                                <ShoppingBag />
                            </div>
                        </div>
                        <div className='w-full lg:w-[40%] xl:w-1/3'>
                            <img className='transform scale-x-[-1] w-full' src={heroImg} alt="heroImg" />
                        </div>
                    </div>
                </div>
            </section>
            <h2 className='mt-3 font-bold text-center uppercase text-3xl'>Our shoes</h2>
            <ShoesHome homeShoes={homeShoes} />
            <h2 className='mt-3 font-bold text-center uppercase text-3xl'>Our bestsellers</h2>
            <BestSellers bestSellers={bestSellersShoes} />
            <Propositions />
        </main >
    );
};

export default Hero;