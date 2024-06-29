import { headers } from 'next/headers'
import React from 'react'

const ColoredSectionHeader = ({headerText}:{headerText: string}) => {
  return (
    <h3 className='text-[1.3rem] font-bold bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent md:text-[1.5rem] lg:text-[2.166rem] text-center'>{headerText}</h3>
  )
}

export default ColoredSectionHeader