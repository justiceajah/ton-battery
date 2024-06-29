import React from 'react'
import CardImage from './CardImage'

const Swap = () => {
    return (
        <div className='token-swaps mt-10 w-full py-5 md:py-0 md:mx-auto md:w-[100%] h-[350px] md:h-[600px] lg:w-[80%]  '>
            <div className='md:flex md:flex-row md:px-4 items-center justify-center   md:justify-around  md:w-full lg:justify-between'>
                <div className=' md:w-[100%]  md:h-[300px] ml-4 md:ml-0 md:relative md:top-14 lg:w-[100%] lg:top-16 lg:left-20 '>
                    <h5 className='text-center md:text-left text-[1.2rem] md:text-[1.6rem] lg:text-[2.5rem] md:px-20 lg:pl-0  lg:w-[80%] '> <span className='bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent  '>Token swaps</span> in &apos;token+token&apos; or &apos;token+ton&apos; pairs;
                    </h5>
                </div>
                <div className='mb-10 md:w-[80%] lg:w-[50%]'>

                <CardImage imgUrl='/images/exchange-swap.svg' lineUrl='/images/line-1.svg'  />
                </div>
            </div>
        </div>
    )
}

export default Swap