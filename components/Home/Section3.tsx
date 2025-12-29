import React from 'react'
import Image from 'next/image';

function Section3() {
    return (
        <div>
            <div className='mt-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='bg-third rounded-4xl p-6 sm:p-6 md:p-6 lg:p-6 xl:p-7 2xl:p-6 flex flex-col items-center justify-center min-h-[200px]'>
                        <div className='flex-1 flex items-center justify-center'>
                            <Image
                                src="/images/Home/Section3/Analys.svg"
                                alt="Analys"
                                width={100}
                                height={100}
                                className='w-auto h-auto max-w-full max-h-32'
                            />
                        </div>
                        <h3 className='subtitle'>
                            Hit Your Targets
                        </h3>
                        <p className='description text-center mt-2'>
                            Track progress daily and stay focused with clear performance insights.
                        </p>
                    </div>
                    <div className='bg-third rounded-4xl p-6 sm:p-6 md:p-6 lg:p-6 xl:p-7 2xl:p-6 flex flex-col items-center justify-center min-h-[200px]'>
                        <div className='flex-1 flex items-center justify-center'>
                            <Image
                                src="/images/Home/Section3/Analys.svg"
                                alt="Analys"
                                width={100}
                                height={100}
                                className='w-auto h-auto max-w-full max-h-32'
                            />
                        </div>
                        <h3 className='subtitle'>
                        Stay Consistent
                        </h3>
                        <p className='description text-center mt-2'>
                        Smart reminders, schedules, and tracking keep your momentum strong.
                        </p>
                    </div>
                    <div className='bg-third rounded-4xl p-6 sm:p-6 md:p-6 lg:p-6 xl:p-7 2xl:p-6 flex flex-col items-center justify-center min-h-[200px]'>
                        <div className='flex-1 flex items-center justify-center'>
                            <Image
                                src="/images/Home/Section3/Analys.svg"
                                alt="Analys"
                                width={100}
                                height={100}
                                className='w-auto h-auto max-w-full max-h-32'
                            />
                        </div>
                        <h3 className='subtitle'>
                        See Real Progress
                        </h3>
                        <p className='description text-center mt-2'>
                        Measure strength, activity, and improvement with live performance data.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section3