import { SmilePlus, Snowflake, Sticker } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Propositions = () => {
    const options = [
        {
            id: 1,
            name: "Kids",
            path: '/kids',
            icon: <SmilePlus size={60} />
        },
        {
            id: 2,
            name: "Winter",
            path: '/winter',
            icon: <Snowflake size={60} />
        }
    ]
    return (
        <section className='w-full relative h-auto flex mt-3 justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full justify-center'>
                <div className='w-full border h-auto p-10 py-20 lg:h-[400px] bg-primary px-7 flex flex-col justify-center  items-center text-white'>
                    <h2 className='font-bold absolute top-2 lg:top-10 gap-3 text-center flex items-center uppercase text-3xl'>What you might like <Sticker className='hidden lg:flex' /></h2>
                    <div className='flex gap-3 flex-col lg:flex-row justify-evenly w-full items-center'>
                        {options.map((item) => (
                            <div key={item.id} className='w-full lg:w-1/3 border flex flex-col justify-center items-center h-[300px] lg:h-[200px] hover:bg-white hover:text-black transition-all'>
                                <Link to={item.path} className='flex flex-col justify-center items-center w-full h-full'>
                                    <p>{item.icon}</p>
                                    <p className='text-3xl font-bold'>{item.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Propositions
