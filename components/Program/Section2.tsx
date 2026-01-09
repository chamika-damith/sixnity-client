import React from 'react'
import Image from 'next/image'

function Section2() {
  return (
    <div className='mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4'>
            <div className='bg-third rounded-4xl p-6'>
            <Image
                  src="/images/Program/Icon1.svg"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain dark:brightness-0 dark:invert"
                />
                <h2 className='subtitle2 mt-4 font-bold'>
                No Subscription Fees
                </h2>
                <p className='description mt-2'>
                Unlimited members, unlimited trainers, unlimited workouts—completely free.
                </p>
                
            </div>
            <div className='bg-third rounded-4xl p-6'>
            <Image
                  src="/images/Program/Icon2.svg"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain dark:brightness-0 dark:invert"
                />
                <h2 className='subtitle2 mt-4 font-bold'>
                Easy to Use
                </h2>
                <p className='description mt-2'>
                Clean and intuitive interface for both gym owners and clients.
                </p>
                
            </div>
            <div className='bg-third rounded-4xl p-6'>
            <Image
                  src="/images/Program/Icon3.svg"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain dark:brightness-0 dark:invert"
                />
                <h2 className='subtitle2 mt-4 font-bold'>
                Accessible Anywhere
                </h2>
                <p className='description mt-2'>
                Manage your gym on mobile, tablet, or desktop—anytime, anywhere.
                </p>
                
            </div>
            <div className='bg-third rounded-4xl p-6'>
            <Image
                  src="/images/Program/Icon4.svg"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain dark:brightness-0 dark:invert"
                />
                <h2 className='subtitle2 mt-4 font-bold'>
                Built for All Gym Sizes
                </h2>
                <p className='description mt-2'>
                From small home gyms to multi-branch fitness chains.
                </p>
                
            </div>

        </div>

    </div>
  )
}

export default Section2