import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div id='contact' className='bg-gray-900 text-white text-center py-16'>
            <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4'>
                <div className=''>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h3 className='text-xl mt-3'>Contact Us</h3>
                        <div className="h-1 w-2/4 mt-2 bg-gradient-to-r ml-auto from-sky-500 to-blue-700 rounded"></div>
                    </div>
                    <ul>
                        <li className='text-left'>xyz Street, abc Road, 4th Colony, India, 11223</li>
                        <li className='flex justify-evenly'>
                            <p className='cursor-pointer border w-fit rounded-full p-2 bg-gradient-to-r from-sky-500 to-blue-700'><FaFacebookF /></p>
                            <p className='cursor-pointer border w-fit rounded-full p-2 bg-gradient-to-r from-sky-500 to-blue-700'><AiOutlineInstagram /></p>
                            <p className='cursor-pointer border w-fit rounded-full p-2 bg-gradient-to-r from-sky-500 to-blue-700'><AiOutlineTwitter /></p>
                            <p className='cursor-pointer border w-fit rounded-full p-2 bg-gradient-to-r from-sky-500 to-blue-700'><FaLinkedinIn /></p>
                        </li>
                        <li className='cursor-pointer hover:text-blue-700 duration-100'>Email us: PQRS@defihub.com</li>
                        <li>Phone : +91 1122334466</li>
                    </ul>
                </div>
                <div>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h3 className='text-xl mt-3'>Links</h3>
                        <div className="h-1 w-2/4 mt-2 bg-gradient-to-r ml-auto from-sky-500 to-blue-700 rounded"></div>
                    </div>
                    <ul>
                        <li>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Home</Link>
                        </li>
                        <li>
                            <Link to="features" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer'>Features</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>About</Link>
                        </li>
                        <li>
                            <Link to="news" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>News</Link>
                        </li>
                        <li>
                            <Link to="community" spy={true} smooth={true} offset={-40} duration={500} className='cursor-pointer'>Community</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h3 className='text-xl mt-3'>Explore</h3>
                        <div className="h-1 w-2/4 mt-2 bg-gradient-to-r ml-auto from-sky-500 to-blue-700 rounded"></div>
                    </div>
                    <ul>
                        <li className='cursor-pointer'>Careers</li>
                        <li className='cursor-pointer'>Trials</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Terms and Conditions</li>
                    </ul>
                </div>
                <div>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h3 className='text-xl mt-3'>Products</h3>
                        <div className="h-1 w-2/4 mt-2 bg-gradient-to-r ml-auto from-sky-500 to-blue-700 rounded"></div>
                    </div>
                    <ul>
                        <li className='cursor-pointer'>App</li>
                        <li className='cursor-pointer'>Analytics</li>
                        <li className='cursor-pointer'>Token List</li>
                        <li className='cursor-pointer'>Defi</li>
                        <li className='cursor-pointer'>Docs</li>
                    </ul>
                </div>
            </div>
            <div className='mt-5 border-b-0 border-l-0 border-r-0 border border-gray-400 pt-10 text-sm md:text-lg '>
                Made By SUDARSHAN TRIFALEY
                <div>
                    <a href="https://github.com/CodeRush24" target='_blank' className='w-fit text-sm mx-3 text-cyan-500 hover:text-blue-700 duration-100'>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/sudarshan-trifaley-188b4023a/" target='_blank' className='w-fit text-sm mx-3 text-cyan-500 hover:text-blue-700 duration-100'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
// border-b-4 border-[#00d8ff]