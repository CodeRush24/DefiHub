import React from 'react'
import video from '../assets/earthRevolving.mp4'

const Hero = () => {
    return (
        <div id='hero' className='w-full h-[85vh] top-[80px]'>
            <video className='object-cover h-full w-full absolute -z-10' src={video} autoPlay loop muted />
            <div className='font-black w-full h-[85%] flex justify-center items-center flex-col px-4'>
                <h1 className='text-white text-left text-xl md:text-2xl mb-3 md:mb-0'>Your one-stop destination for all things decentralized finance</h1>
                <h1 className='text-white text-center text-xl md:text-4xl mt-3'><span className='logo text-xl md:text-3xl font-black'>Welcome to Defi Hub,</span> your go-to source for all things decentralized finance.</h1>
                <div className='text-xl mt-5 flex'>
                    <a className='text-white hover:-translate-y-1.5 btn md:px-3'>Start Trading</a>
                    <a className='text-white hover:-translate-y-1.5 ml-5 btn md:px-3'>SignIn</a>
                </div>
            </div>
            <div className='flex md:justify-around flex-col md:flex-row items-center'>
                <div className='py-3 flex items-center justify-center md:flex-col'>
                    <p className='text-sky-500 text-center font-black text-3xl md:text-6xl mr-2 md:mr-0'>500K+</p>
                    <p className='text-center text-white font-black text-xs md:text-lg'>Happy DefiHub Users</p>
                </div>
                <div className='flex items-center justify-center md:flex-col'>
                    <p className='text-sky-500 text-center font-black text-3xl md:text-6xl mr-2 md:mr-0'>150K+</p>
                    <p className='text-center text-white font-black text-sm md:text-lg'>Community BTC</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
