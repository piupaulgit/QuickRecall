import React from 'react'
import Label from './Label'

const Select = ({label}) => {
  return (
    <div>
        <Label text={label}/>
        <select>
            <option>self</option>
            <option>Other</option>
        </select>
    </div>
  )
}

export default Select