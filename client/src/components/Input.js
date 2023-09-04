import React from 'react'
import Label from './Label'

const Input = ({label}) => {
  return (
    <div className='my-2'>
        <Label text={label}/>
        <input className=' rounded-md border-[1px] border-gray-300 px-2 py-2 w-full'/>
    </div>
  )
}

export default Input