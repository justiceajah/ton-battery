import { CardType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

const CardImage = ({imgUrl, lineUrl, isReverse=false}:CardType &{isReverse?: boolean}) => {
  return (
    <div className='relative w-full   items-center justify-center mt-8 translate-x-[28%]  md:w-fit md:-top-16  md:h-[200px] border-2'>
    <div className='w-fit rotate-12 top-0  left-0   absolute md:relative
    '>
        <Image height={100} width={150} src={imgUrl} alt="exchange-swap" />
    </div>
    <div className='w-fit  top-0  left-0  absolute
    '>
        <Image height={100} width={150} src={imgUrl} alt="exchange-swap" />
    </div>
    <div className={`hidden  md:block w-fit  top-24 ${isReverse ? 'left-[150px]  ' : ' -left-[145px]'}  absolute 
    `}>
        <Image height={100} width={150} src={lineUrl} alt="exchange-swap" />
    </div>
</div>
  )
}

export default CardImage