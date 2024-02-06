'use client'
import React, { useState } from 'react'
const Accordion = () => {

    const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className=' bg-grayMain/70 p-4'>
        <div className=' flex justify-between items-center'>
            <p>Edit Image</p>
            <p onClick={() => setAccordionOpen(!accordionOpen)} className=' cursor-pointer transition-all duration-500 ease-in-out'>
                {accordionOpen ? 'Hide' : 'Show'}
            </p>
        </div>
        <div className={`  transition-all duration-500 ease-in-out ${accordionOpen ? ' block' : ' hidden'}`}>
         <p className=' '>Accordion content</p>
        </div>
    </div>
  )
}

export default Accordion