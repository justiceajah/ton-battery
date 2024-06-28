import Image from 'next/image'
import React from 'react'
import Swap from './Swap'
import TransferOption from './TransferOption'

const Benefits = () => {
    return (
        <div className='relative'>
            <div className='benefits-header px-2'>
                <h3 className='text-[1.3rem] font-bold bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent md:text-[1.5rem] lg:text-[2.166rem] text-center'>HERE ARE THE BENEFITS OF THE BATTERY</h3>
                <h4 className=' text-[0.77rem] text-center mt-2 md:text-[0.88rem] lg:text-[1.3rem]'>Currently, you can use the Battery for the following operations</h4>
            </div>
            <div className='star-buster-container absolute -top-14 right-5 w-[50px] md:-top-3 md:right-20'>
                <Image height={100} width={100} src={'/images/Burst-pucker-2.svg'} alt="burster-pucker" />
            </div>


            <div className='benefit-bg-images w-full relative'>
                <div className='absolute top-[550px] left-4'>

            <Image height={50} width={40} src={'/images/Burst-pucker-2.svg'} alt="burster-pucker" />
                </div>
                
                <Swap />
                <div className=' w-full  relative  '>
                <TransferOption imgUrl='/images/transfer.svg' lineUrl='/images/line-93.svg' coloredHeader='Token' header='transfer' />
                <TransferOption imgUrl='/images/nft-transfer.svg' lineUrl='/images/line-93.svg' coloredHeader='NFT' header='transfer' reverse={true} />

                </div>
            </div>


        </div>
    )

}

export default Benefits