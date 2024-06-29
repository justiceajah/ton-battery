import Image from 'next/image'
import React from 'react'
import Swap from '../../tonkeeper-benefits/Swap'
import TransferOption from '../../tonkeeper-benefits/TransferOption'
import ColoredSectionHeader from '../../ColoredSectionHeader'


const Benefits = () => {
    return (
        <div className='relative mt-[120px] md:mt-0 lg:top-40 '>
            <div className='benefits-header px-2'>
                <ColoredSectionHeader headerText={"HERE ARE THE BENEFITS OF THE BATTERY"}/>
                <h4 className=' text-[0.8rem] text-center mt-2 md:text-[0.88rem] lg:text-[1.3rem]'>Currently, you can use the Battery for the following operations</h4>
            </div>
            <div className='star-buster-container absolute -top-14 right-5 w-[50px] md:-top-3 md:right-20'>
                <Image height={100} width={100} src={'/images/Burst-pucker-2.svg'} alt="burster-pucker" />
            </div>


            <div className='benefit-bg-images w-full relative md:h-[1100px] lg:h-full overflow-x-hidden md:mt-10 lg:mt-20'>
                <div className='relative  md:left-0  lg:left-0 '>


                    <div className='absolute top-[550px] left-4'>

                        <Image height={50} width={40} src={'/images/Burst-pucker-2.svg'} alt="burster-pucker" />
                    </div>

                    <Swap />
                    <div className=' w-full  relative md:-top-72 md-[600px] py-20  md:py-0 space-y-16 lg:translate-x-[8%]'>
                        <TransferOption imgUrl='/images/transfer.svg' lineUrl='/images/line-94.svg' coloredHeader='Token' header='transfers' />
                        <TransferOption imgUrl='/images/nft-transfer.svg' lineUrl='/images/line-94.svg' coloredHeader='NFT' header='transfers' reverse={true} />

                    </div>
                </div>

                <div className='w-full px-4 md:relative md:-top-48 lg:-top-40 lg:w-[50%] lg:mx-auto'>
                    <h5 className='text-center text-[1rem] md:text-[1.5rem] text-content4'>
                    The battery is measured in charges that cover those network fees. For example, token swaps require ~50 charges, token transfers ~10 charges, and NFT transfers ~4 charges.
                    </h5>
                </div>
            </div>


        </div>
    )

}

export default Benefits