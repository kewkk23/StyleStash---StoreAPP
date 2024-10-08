import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='mt-5 w-full  h-auto flex flex-col justify-center items-center'>
            <div className='flex mt-3 flex-col flex-wrap lg:flex-row w-full justify-center items-center lg:justify-between lg:w-11/12 xl:w-[60%] h-full uppercase'>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <img src={logo} alt="logo" />
                    <h3 className='font-bold text-xl'>StyleStash</h3>
                </div>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <h3 className='font-bold text-xl '>Links</h3>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/kids'}>Kids</Link>
                    <Link to={'/winter'}>Winter</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <h3 className='font-bold text-xl'>Others</h3>
                    <Link to={'/'}>terms of use</Link>
                    <Link to={'https://github.com/kewkk23'} target='_blank'>Website power by Kewin Kulas</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
