import React from 'react'
import { Link } from 'react-router-dom'

const WinterShoes = ({ winterShoess }) => {
    return (
        <section className='w-full h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full flex justify-center flex-wrap gap-2'>
                {winterShoess.map((item) => (
                    <div key={item.id} className='w-full md:w-1/3 lg:w-1/4 flex flex-col hover:shadow-lg p-3 transition-all'>
                        <Link to={'/product/' + item.id}>
                            <img src={item.image} alt={item.name} />
                            <p className='font-bold'>{item.name}</p>
                            <p>{item.price} zł</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WinterShoes