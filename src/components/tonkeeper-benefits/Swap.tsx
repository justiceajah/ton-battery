import React from 'react'
import CardImage from './CardImage'

const Swap = () => {
    return (
        <div className='token-swaps mt-20 w-full h-[350px] md:h-[600px]'>
            <div className='md:flex md:flex-row md:px-10 items-center justify-center '>
                <div className='md:w-full  md:h-[300px] ml-4'>
                    <h5 className='text-center md:text-left md:pl-10'> <span className='bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent text-[19px] '>Token swaps</span> in &apos;token+token&apos; or &apos;token+ton&apos; pairs;
                    </h5>
                </div>
                <CardImage imgUrl='/images/exchange-swap.svg' lineUrl='/images/line-1.svg' />
            </div>
        </div>
    )
}

export default Swap