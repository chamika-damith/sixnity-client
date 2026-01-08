'use client'

import React, { useState } from 'react'
import Buttonforsection4 from '../Button/Buttonforsection4'
import Image from 'next/image'

function Section4() {
  const [selectedButton, setSelectedButton] = useState('beginner')

  const descriptions = {
    beginner: 'Whether you are just starting, building strength, or pushing your limits, your fitness journey stays fully tracked in one smart system. Every rep, every session, and every milestone is recorded to help you improve faster and stay motivated daily.',
    enthusiast: 'For fitness enthusiasts ready to take their training to the next level, our system provides advanced tracking and analytics. Monitor your progress with detailed insights, personalized recommendations, and comprehensive performance metrics that help you achieve your goals faster.',
    pro: 'Professional athletes and serious trainers need precision tracking. Our system delivers real-time performance data, advanced analytics, and comprehensive reporting. Every detail is captured to optimize your training, prevent injuries, and maximize your potential.'
  }

  return (
    <div className='mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4  justify-center'>
            <div className='col-span-1 lg:col-span-2 items-center justify-center text-center lg:text-left'>
                <h2 className='title mb-4'>
                Every Move Tracked. Every Result Measured
                </h2>
                <Buttonforsection4 selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                <p className='description mt-4'>
                {descriptions[selectedButton as keyof typeof descriptions]}
                </p>
            </div>
            <div className='col-span-1 lg:col-span-3'>
                <Image src="/images/Home/Section4/Laptop.png" alt="image" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </div>

    </div>
  )
}

export default Section4