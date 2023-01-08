import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNavbar = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full h-[80px] sticky top-0 z-30 bg-gradient-to-r from-gray-900 via-black to-gray-900'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div className='logo'>DefiHUB</div>
                <div className='hidden md:block'>
                    <ul className='flex text-white items-center cursor-pointer'>
                        <li>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Home</Link>
                        </li>
                        <li>
                            <Link to="features" spy={true} smooth={true} offset={-50} duration={500}>Features</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="news" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>News</Link>
                        </li>
                        <li>
                            <Link to="community" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>Community</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>Contact</Link>
                        </li>
                        <button className='ml-2'>Start Trading</button>
                    </ul>
                </div>
                <div onClick={handleNavbar} className='block md:hidden cursor-pointer'>
                    {nav ? <AiOutlineClose size={25} className='text-cyan-500' /> : <AiOutlineMenu size={25} className='text-cyan-500' />}
                </div>
                <div className={nav ? 'w-full duration-700 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white absolute top-[80px] left-0 flex justify-center text-center' : 'absolute left-[-100%] top-[80px] flex justify-center text-center w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 duration-1000'}>
                    <ul>
                        <li className='text-xl'>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Home</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to="features" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer'>Features</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>About</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to="news" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>News</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to="community" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>Community</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>Contact</Link>
                        </li>
                        <button className='m-7 px-7'>Start Trading</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
