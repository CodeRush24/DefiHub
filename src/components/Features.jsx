import React from 'react'
import { SiHiveBlockchain, SiBlockchaindotcom, SiChartdotjs } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import { BsBarChartLineFill } from 'react-icons/bs'
import FeaturesCard from './FeaturesCard'

const Features = () => {
    return (
        <div id='features' className='w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center mt-8'>
            <div className='max-w-[1240px] text-white mx-auto px-4 py-16'>
                <div>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <div className='flex flex-col items-end'>
                            <h3 className='text-4xl mb-4'>Features</h3>
                            <div className="h-1 w-28 bg-gradient-to-r from-sky-500 to-blue-700 rounded"></div>
                        </div>
                    </div>
                    <p className='text-left md:text-center mt-2 font-semibold text-sm md:text-lg text-white py-4'>At Defi Hub, we believe that Defi has the power to democratize finance and create a more inclusive and equitable global economy. </p>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                        {/* Card */}
                        <FeaturesCard
                            icon={<SiHiveBlockchain />}
                            heading='Blockchain Wallet'
                            para='A secure and user-friendly wallet that enables you to store, manage, and transact with your blockchain assets. The wallet could support multiple blockchain protocols and currencies, and offer features such as backup and recovery, multi-sig, and exchange integration.'
                        />

                        <FeaturesCard
                            icon={<SiBlockchaindotcom />}
                            heading='Defi Tracker'
                            para='Keep track of your Defi portfolio and performance with our Defi Tracker tool. Simply connect your wallet and see your holdings, values, and returns in real-time. You can also set alerts for your favorite tokens and protocols.'
                        />

                        <FeaturesCard
                            icon={<VscServerProcess />}
                            heading='Defi Insider'
                            para='A secure and user-friendly wallet that enables you to store, manage, and transact with your blockchain assets. The wallet could support multiple blockchain protocols and currencies, and offer features such as backup and recovery, multi-sig, and exchange integration.'
                        />

                        <FeaturesCard
                            icon={<BsBarChartLineFill />}
                            heading='DefiHub Market'
                            para="Get exclusive access to Defi experts, insights, and resources with our Defi Insider program. As a Defi Insider, you'll get invites to private webinars, meetups, and hackathons, as well as early access to new Defi products and services."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
// flex flex-col md:flex-row justify-between items-center
// bg-gradient-to-r from-sky-500 to-blue-700 rounded-full max-w-fit text-xl p-3
// 54:20