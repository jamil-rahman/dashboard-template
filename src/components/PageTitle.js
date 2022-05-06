
import React from 'react'

export default function PageTitle({title}) {
  return (
    <div className='w-full h-20 p-6 bg-primaryb border-b border-b-border'>
        <h5 className='font-body font-bold text-neutral-900'>{title}</h5>
    </div>
  )
}
