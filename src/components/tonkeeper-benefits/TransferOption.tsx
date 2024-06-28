import React from 'react'
import CardImage from './CardImage'
import { CardType } from '@/utils/types'

type TransferType = {
    coloredHeader: string;
    header: string;
    reverse?: boolean;
}

const TransferOption = ({imgUrl, lineUrl, coloredHeader, header, reverse = false}:CardType & TransferType) => {
  return (
    <div className={`transfer-container h-[350px]  w-full  mt-4  md:flex ${reverse ? 'md:flex-row-reverse': ' '}  md:items-center md:justify-between md:w-[60%] md:mx-auto `}>
    <div className='md:w-fit md:-mt-[100px]'>
        <h5 className='text-center w-fit md:text-left ml-4 text-[1.2rem] md:text-[1.6rem] '> <span className='bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent '> {coloredHeader}</span> {header}
        </h5>
    </div>
    <CardImage imgUrl={imgUrl} lineUrl={lineUrl} isReverse={reverse} />
</div>
  )
}

export default TransferOption