import React from 'react'
import Defiimg from '../assets/DefiImage.png'

const About = () => {
    return (
        <div id='about' className='w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center'>
            <div className='max-w-[1240px] px-4 py-16 mx-auto'>
                <div>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <div className='flex flex-col items-end'>
                            <h3 className='text-4xl mb-4'>About</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-blue-700 rounded"></div>
                        </div>
                    </div>
                    <div className='mt-2 py-4 flex justify-between items-center flex-col md:flex-row'>
                        <div className='md:mr-24 flex flex-col items-start text-left'>
                            <h1 className='text-5xl font-black text-blue-700'>Why DefiHub?</h1>
                            <p className='mt-6 text-sm'>Defi Hub is a community-driven platform that aims to democratize access to decentralized finance. We believe that Defi has the potential to transform the financial industry and empower individuals and organizations to take control of their own wealth and prosperity.</p>
                            <p className='mt-3 text-sm'> To achieve this vision, we offer a range of Defi-related news, resources, and features to our users, including a Defi tracker, market, learning, and insider program. We also host events, such as meetups and hackathons, to bring together the Defi community and foster collaboration and innovation.</p>
                            <p className='mt-3 text-sm'>Defi Hub is founded by a team of Defi enthusiasts and experts who have a passion for blockchain and decentralized technologies. Our team is dedicated to delivering high-quality content and services that enable our users to make informed decisions and achieve their Defi goals.</p>
                        </div>
                        <img src={Defiimg} alt="/" className='rounded-[50px] mt-2 py-4 shadow-lg shadow-cyan-500 hover:shadow-cyan-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About