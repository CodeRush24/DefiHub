import React from 'react'

const Community = () => {
    return (
        <div id='community' className='w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center'>
            <div className='max-w-[1240px] px-4 py-16 mx-auto'>
                <div>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <div className='flex flex-col items-end'>
                            <h3 className='text-4xl mb-4'>Join DefiHub Community</h3>
                            <div className="h-1 w-72 bg-gradient-to-r from-sky-500 to-blue-700 rounded"></div>
                        </div>
                        <div className='py-4 mt-10 flex flex-col md:flex-row justify-between items-center w-96'>
                            <div>
                                <input className='px-3 py-2 rounded-3xl w-60 text-black' type="email" placeholder='Enter your email' />
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <button>Sign Up</button>
                            </div>
                        </div>
                        <div className='flex md:items-center md:justify-center py-2 '>
                            <input className='md:mr-2' type="checkbox" />
                            <p className='text-sm md:text-lg'>Yes, I agree to receive email communications from DeFiHub.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community