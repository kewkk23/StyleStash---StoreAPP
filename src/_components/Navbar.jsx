import React, { useState } from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Contact, HomeIcon, MenuIcon, ShoppingCart, SmilePlus, Snowflake } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import logo from '../assets/logo.svg';
import Cart from './Cart';

const Navbar = () => {
    const [modal, setModal] = useState(false);
    const { user } = useUser();
    const location = useLocation().pathname;

    const Menu = [
        { id: 1, name: 'Home', icon: <HomeIcon />, path: '/' },
        { id: 2, name: 'Kids', icon: <SmilePlus />, path: '/kids' },
        { id: 3, name: 'Winter', icon: <Snowflake />, path: '/winter' },
        { id: 4, name: 'Contact', icon: <Contact />, path: '/contact' },
    ];

    const clickCart = () => setModal(!modal);

    return (
        <header className='w-full h-[70px] flex justify-center items-center shadow-md'>
            <nav className='w-full relative lg:w-11/12 py-2 px-2 lg:px-0 xl:w-[60%] flex justify-between items-center'>
                <div>
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                </div>
                <div className='flex justify-center gap-3'>
                    {Menu.map((item) => (
                        <div key={item.id}>
                            <Link to={item.path}>
                                <div className={`gap-2 cursor-pointer hidden lg:flex hover:underline ${location === item.path && 'underline font-bold'}`}>
                                    <p>{item.name}</p>
                                    <p>{item.icon}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className='block mr-3 lg:hidden'>
                        <Sheet>
                            <SheetTrigger className='flex'><MenuIcon size={36} strokeWidth={2.25} /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription className='h-[20vh]'>
                                        {Menu.map((item) => (
                                            <Link to={item.path} key={item.id}>
                                                <div className={`flex h-full gap-2 justify-end items-center text-black text-2xl ${location === item.path && 'underline font-bold'}`}>
                                                    {item.name}
                                                    {item.icon}
                                                </div>
                                            </Link>
                                        ))}
                                        <div className='flex justify-end items-center gap-2 text-xl text-black'>
                                            <UserButton />
                                            {user?.fullName}
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <ShoppingCart onClick={clickCart} size={30} className='cursor-pointer' />
                    <Cart modal={modal} setModal={setModal} />
                    {user ? (
                        <div className='flex items-center gap-2'>
                            <div className='hidden lg:flex z-40'><UserButton /></div>
                        </div>
                    ) : (
                        <Button className='w-[90px] font-bold'><SignInButton className='uppercase' /></Button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
