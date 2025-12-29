import React from 'react'

function Email() {
  return (
    <div className='flex flex-col lg:flex-row gap-2 mt-4'>
        <button className="blackborder flex-1">
            <div className='flex items-center gap-2 w-full'>
                <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-6 w-full'>
                    Enter Your Email
                </p>
            </div>
        </button>
        <button className='bg-[#DBEC5B] text-[#313730] rounded-full border-none cursor-pointer transition-opacity hover:opacity-90 font-neutiva w-full lg:w-auto'>
            <div className='flex items-center justify-center gap-2 w-full'>
                <p className='py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-2 lg:px-4 xl:py-3 xl:px-4 2xl:py-3 2xl:px-6'>
                    Get Start
                </p>
            </div>
        </button>
    </div>
  )
}

export default Email