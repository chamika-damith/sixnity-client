import React from 'react'
import DownloadApp from '../Button/DownloadApp'

function Section6() {
  return (
    <div className='mt-24 mb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center'>
            <div>
            <h2 className='title mb-4'>
            Track Everything.<br /> Improve Anything.
            </h2>
            <DownloadApp/>
            </div>

            <div>
                <p className='description'>
                Track your workouts, calories, steps, body fat, and daily performance in one powerful system built to keep you consistent and motivated.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Section6