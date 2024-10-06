import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
const BestSellers = ({ bestSellers }) => {
    return (
        <section className='w-full h-auto flex justify-center items-center mt-5'>
            <div className='w-full h-full lg:w-11/12 xl:w-[60%] flex justify-center items-center'>
                <Carousel className='w-full'>
                    <CarouselContent className='flex gap-2'>
                        {bestSellers.map((item) => (
                            <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/4 hover:shadow-md hover:border cursor-pointer"><Link to={'/product/' + item.id}><div>
                                <img className='w-full max-h-40 object-contain' src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>price: {item.price} zł</p>
                            </div></Link></CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex justify-center items-center' />
                    <CarouselNext className='hidden lg:flex justify-center items-center' />
                </Carousel>

            </div>
        </section>
    )
}

export default BestSellers
