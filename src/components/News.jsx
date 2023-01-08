import React from 'react'
import img from '../assets/DefiImage.png'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div id='news' className='w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center'>
            <div className='max-w-[1240px] px-4 py-16 mx-auto'>
                <div>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <div className='flex flex-col items-end'>
                            <h3 className='text-4xl mb-4'>News</h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-700 rounded"></div>
                        </div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-16'>
                            <NewsCard
                                imgs='https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                                news='Crypto market sees rapid development and innovation, with new protocols and products emerging to solve real-world problems'
                            />
                            <NewsCard
                                imgs='https://cryptoz.iamabdus.com/v1.1/wp-content/uploads/2021/09/jievani-weerasinghe-ix9KDnqJNjA-unspla2sh.jpg'
                                news='Ethereum-based NFT platform OpenSea raises $23 million in funding to expand marketplaces and tools'
                            />
                            <NewsCard imgs='https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80'
                                news='Bitcoin adoption grows in emerging markets, with countries such as Argentina, Venezuela, and Zimbabwe leading the way'
                            />
                            <NewsCard imgs='https://images.unsplash.com/photo-1629877521896-4719f02df3c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                                news='Cryptocurrency becomes more accessible and user-friendly, with new wallets, exchanges, and services making it easier to buy, sell, and use crypto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News