import React from 'react'
import Image from 'next/image'

interface Buttonforsection4Props {
  selectedButton: string
  setSelectedButton: (button: string) => void
}

function Buttonforsection4({ selectedButton, setSelectedButton }: Buttonforsection4Props) {
  const buttons = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'enthusiast', label: 'Fitness enthusiast' },
    { id: 'pro', label: 'Workout Pro' }
  ]

  return (
    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-row items-center justify-center lg:justify-start gap-2'>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setSelectedButton(button.id)}
          className={`w-full sm:w-auto md:w-auto lg:w-full xl:w-full 2xl:w-auto ${
            selectedButton === button.id 
              ? 'buttonblack-section4' 
              : 'buttonwhite-section4'
          }`}
        >
          <div className='flex items-center justify-between sm:justify-start md:justify-start lg:justify-between xl:justify-between 2xl:justify-start gap-0'>
            <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-5 pr-1'>
              {button.label}
            </p>
            <Image src="/images/Icons/GreenIcon.png" alt="arrow" width={20} height={20} className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 mr-1' />
          </div>
        </button>
      ))}
    </div>
  )
}

export default Buttonforsection4