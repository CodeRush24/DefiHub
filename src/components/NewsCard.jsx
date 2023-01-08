import React from 'react'
import img from '../assets/DefiImage.png'

const NewsCard = ({ imgs, news }) => {
    return (
        <div className="flex items-stretch justify-center border">
            <a className="relative block bg-gray-900 group"
                href="##">
                <div className='p-0'>
                    <img className="absolute inset-0 object-cover w-full h-full  group-hover:opacity-75"
                        src={imgs} />
                </div>
                <p className='opacity-100 text-sm text-left px-1 py-0.5 absolute group-hover:opacity-0 font-medium bottom-0 bg-black bg-opacity-75'>
                    {news}
                </p>
                <div className="relative">
                    <div className="mt-36 group-hover:bg-black group-hover:bg-opacity-75 py-2">
                        <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="">
                                <p className="text-sm text-white">
                                    {news}
                                </p>
                                <button className="px-3 py-0.5 text-sm text-white bg-green-600">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NewsCard