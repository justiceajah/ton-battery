import React from 'react'
import CardImage from './CardImage'
import { CardType } from '@/utils/types'

type TransferType = {
  coloredHeader: string;
  header: string;
  reverse?: boolean;
}

const TransferOption = ({ imgUrl, lineUrl, coloredHeader, header, reverse = false }: CardType & TransferType) => {
  return (
    <div className={`transfer-container h-[350px] py-5  w-full  mt-4  md:flex ${reverse ? 'md:flex-row-reverse md:relative right-10 lg:right-0' : ' lg:relative lg:left-8 '}  md:items-center md:justify-between md:w-[80%] md:mx-auto space-y-10  lg:justify-around lg:items-center `}>
      <div className={`w-full  mx-auto  lg:mt-2 ${reverse ? 'md:relative md:left-12 lg:left-0' : ''} `}>
        <h5 className={`text-center lg:relative  md:w-[80%]  md:text-left ml-4 text-[1.2rem] md:text-[1.6rem] lg:text-[2.5rem] ${reverse ? 'md:text-right lg:text-left ' : ''}  `}> <span className='bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent '> {coloredHeader}</span> {header}
        </h5>
      </div>
      <div className='md:w-[80%] lg:w-[100%]'>

        <CardImage imgUrl={imgUrl} lineUrl={lineUrl} isReverse={reverse} />
      </div>
    </div>
  )
}

export default TransferOption