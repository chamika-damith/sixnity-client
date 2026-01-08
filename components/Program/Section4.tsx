import React from 'react'

function Section4() {
    return (
        <div className='mt-12'>
            <div>
                <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-neutiva font-regular '>
                    Complete Feature Comparison
                </h1>
                <p className='description text-center mt-2 sm:mt-2 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-6 max-w-[500px] sm:max-w-[900px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[800px] mx-auto'>
                    Get premium fitness support at a price that works for you. Stay consistent, stay motivated, and grow stronger every day with our cost-friendly solutions.        </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12 items-stretch'>
                {/* Empty first column */}
                <div>
                    
                </div>

                {/* Basic Plan Card */}
                <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full'>
                    <h2 className='text-2xl sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl font-bold text-secondary mb-4 font-neutiva'>Basic</h2>
                    <div className='mb-6'>
                        <span className='text-4xl sm:text-5xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-secondary font-neutiva'>$299</span>
                        <span className='text-lg lg:text-base xl:text-lg 2xl:text-lg text-secondary ml-2 font-neutiva'>/month</span>
                    </div>
                    <button className="bg-primary text-secondary rounded-lg py-3 px-6 font-neutiva mt-auto">
                        Get started
                    </button>
                </div>

                {/* Standard Plan Card */}
                <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full'>
                <h2 className='text-2xl sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl font-bold text-secondary mb-4 font-neutiva'>Standard</h2>
                    <div className='mb-6'>
                    <span className='text-4xl sm:text-5xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-secondary font-neutiva'>$399</span>
                        <span className='text-lg lg:text-base xl:text-lg 2xl:text-lg text-secondary ml-2 font-neutiva'>/month</span>
                    </div>
                    <button className="bg-primary text-secondary rounded-lg py-3 px-6 font-neutiva mt-auto">
                        Get started
                    </button>
                </div>

                {/* Premium Plan Card */}
                <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full'>
                <h2 className='text-2xl sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl font-bold text-secondary mb-4 font-neutiva'>Premium</h2>
                    <div className='mb-6'>
                    <span className='text-4xl sm:text-5xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-secondary font-neutiva'>$499</span>
                    <span className='text-lg lg:text-base xl:text-lg 2xl:text-lg text-secondary ml-2 font-neutiva'>/month</span>
                    </div>
                    <button className="bg-white border-2 border-primary text-secondary rounded-lg py-3 px-6 font-neutiva mt-auto">
                        Get started
                    </button>
                </div>
            </div>
            <div className='mt-12 bg-gray-100 rounded-lg overflow-hidden overflow-x-auto'>
                <table className='w-full min-w-[600px]'>
                    {/* Table Header */}
                    <thead>
                        <tr className='bg-white border-b border-gray-200'>
                            <th className='text-left p-4 font-bold text-secondary font-neutiva'></th>
                            <th className='text-center p-4 font-bold text-secondary font-neutiva'>Basic</th>
                            <th className='text-center p-4 font-bold text-secondary font-neutiva'>Standard</th>
                            <th className='text-center p-4 font-bold text-secondary font-neutiva'>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Task Management Section */}
                        <tr className='bg-gray-200 border-b border-gray-300'>
                            <td colSpan={4} className='p-3 font-bold text-secondary font-neutiva'>Task Management</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                    Customizable Workflows
                                    <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>100</td>
                            <td className='p-4 text-center text-secondary font-neutiva'>100</td>
                            <td className='p-4 text-center text-secondary font-neutiva'>Unlimited</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Project Planning
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Time Tracking
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>

                        {/* Visualization Section */}
                        <tr className='bg-gray-200 border-b border-gray-300'>
                            <td colSpan={4} className='p-3 font-bold text-secondary font-neutiva'>Visualization</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Gantt Charts
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Agile Methodology Support
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Reporting and Analytics
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Team and Individual Dashboards
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>

                        {/* Integrations Section */}
                        <tr className='bg-gray-200 border-b border-gray-300'>
                            <td colSpan={4} className='p-3 font-bold text-secondary font-neutiva'>Integrations</td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Document Management
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Client Collaboration
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white border-b border-gray-200'>
                            <td className='p-4 text-secondary font-neutiva'>
                                <div className='flex items-center gap-2'>
                                Mobile App Integration
                                <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center text-secondary font-neutiva'>-</td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                            <td className='p-4 text-center'>
                                <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center mx-auto'>
                                    <svg className='w-4 h-4 text-secondary' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Section4