import {FC} from 'react'

import React from 'react'

const Button: FC<{text: string}> = ({text}) => {
  return (
    <button className='bg-primary text-white px-7 py-4 
    rounded-full shadow-lg hover:scale-110 duration-300'>{text}</button>
  )
}

export default Button