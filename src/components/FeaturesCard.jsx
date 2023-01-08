import React from 'react'

const FeaturesCard = ({ icon, heading, para }) => {
    return (
        <div className='flex text-left flex-col duration-300 hover:-translate-y-3 py-10 px-5 border rounded-2xl'>
            <div className=''>
                <div className='bg-gradient-to-r from-sky-500 to-blue-700 rounded-full max-w-fit text-2xl md:text-3xl p-3'>
                    {icon}
                </div>
                <h3 className='font-bold text-2xl md:text-3xl py-4'>{heading}</h3>
                <p className='text-xs md:text-sm'>{para}</p>
            </div>
        </div>
    )
}

export default FeaturesCard