import { CardType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

const CardImage = ({imgUrl, lineUrl, isReverse=false}:CardType &{isReverse?: boolean}) => {

  return (
    <div className='relative w-full   items-center justify-center mt-8 translate-x-[25%] md:translate-x-[30%]  md:w-fit md:-top-16  md:h-[200px]'>
    <div className='w-fit rotate-12 top-0  left-0   absolute md:relative
    '>
        <Image height={400} width={207} src={imgUrl} alt="exchange-swap"     />
    </div>
    <div className='w-fit  top-0  left-0  absolute
    '>
        <Image height={400} width={207} src={imgUrl} alt="exchange-swap"  />
    </div>
    <div className={` line-holder hidden  md:inline-block w-fit  absolute  top-32 ${isReverse ? ' left-[150px]  md:left-[190px] lg:left-[315px]  w-full  transform scale-x-[-1] ' : ' -left-[300px] md:-left-[190px] lg:-left-[310px]  lg:w-full'}`}>
        <Image style={{
          maxWidth: "900px !important"
        }} width={321}  height={200} src={lineUrl} alt="exchange-swap"    />
    </div>
</div>
  )
}

export default CardImage