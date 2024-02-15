'use client'

import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'

const Navbar = () => {
    const [isNav, setNav] = useState(false);
    const [bgColor, setBgColor] = useState('transparent');
    const [showSearch, setShowSearch] = useState(false);



    const navHandler = () => {
        setNav(!isNav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 590) {
                setBgColor('#020617');
            } else {
                setBgColor('transparent');
            }
        }

        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div className='fixed left-0 top-0 w-full z-50 ease-in duration-300 py-[50px]' style={{ backgroundColor: `${bgColor}` }}>
            <div className='max-w-[1640px] m-auto flex justify-between items-center text-white p-4'>
                <div className='flex items-center justify-between w-[50%]'>
                    <Link href='/' className='z-10'>
                        <Image
                            src="/netflix.png"
                            width={130}
                            height={130}
                            alt="netflix"
                            className='flex justify-self-start'
                        />
                    </Link>

                    <ul className='hidden sm:flex'>
                        <li className='p-4 hover:text-yellow-200'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4 hover:text-yellow-200'>
                            <Link href='/'>Tv Shows</Link>
                        </li>
                        <li className='p-4 hover:text-yellow-200'>
                            <Link href='/'>Movies</Link>
                        </li>
                        <li className='p-4 hover:text-yellow-200'>
                            <Link href='/'>New & Popular</Link>
                        </li>
                        <li className='p-4 hover:text-yellow-200'>
                            <Link href='/'>My List</Link>
                        </li>
                    </ul>
                </div>

                <ul className='hidden sm:flex'>
                    <div className='flex flex-col space-y-7'>
                        <li className='p-4 hover:text-yellow-200' onClick={() => setShowSearch(!showSearch)}>
                                {
                                  showSearch
                                  ?
                                  <AiOutlineClose size={22}/>
                                  :
                                  <AiOutlineSearch size={25}/>
                                }
                        </li>
                        {
                            showSearch
                            &&
                            <input type='text' placeholder='Search' autoFocus className='z-[100] absolute ease-in duration-500 translate-y-10 bg-slate-700 h-[40px] w-[25%] right-10 rounded-2xl p-2 px-4 focus:outline-0' />
                        }
                    </div>
                    <li className='p-4 hover:text-yellow-200'>
                        <Link href='/'>Kids</Link>
                    </li>
                    <li className='p-4 hover:text-yellow-200'>
                        <Link href='/'>
                            <AiOutlineBell size={25} />
                        </Link>
                    </li>
                </ul>

                {/* Mobile view */}
                <div onClick={navHandler} className='block sm:hidden z-10'>
                    {isNav
                        ?
                        <AiOutlineClose size={25} />
                        :
                        <AiOutlineMenu size={25} />
                    }
                </div>
                <div className={
                    isNav
                        ?
                        'sm:hidden absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-zinc-950 ease-in duration-300'
                        :
                        'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen bg-zinc-950 ease-in duration-300'
                }>

                    <ul className='sm:hidden pt-[140px] flex justify-between'>
                        <div>
                            <li className='p-4'>
                                {/* <input type='text' className='rounded=2xl'/> */}
                                <Link href='/'>
                                    <AiOutlineSearch size={25} />
                                </Link>
                            </li>
                        </div>

                        <div className='flex'>
                            <li className='p-4'>
                                <Link href='/'>Kids</Link>
                            </li>
                            <li className='p-4'>
                                <Link href='/'>
                                    <AiOutlineBell size={25} />
                                </Link>
                            </li>
                        </div>
                    </ul>

                    <ul className='pt-[30px] pl-[20px]'>
                        <li className='pt-4 text-slate-200 text-xl hover:text-slate-300'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='pt-4 text-slate-200 text-xl hover:text-slate-300'>
                            <Link href='/'>Tv Shows</Link>
                        </li>
                        <li className='pt-4 text-slate-200 text-xl hover:text-slate-300'>
                            <Link href='/'>Movies</Link>
                        </li>
                        <li className='pt-4 text-slate-200 text-xl hover:text-slate-300'>
                            <Link href='/'>New & Popular</Link>
                        </li>
                        <li className='pt-4 text-slate-200 text-xl hover:text-slate-300'>
                            <Link href='/'>My List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;