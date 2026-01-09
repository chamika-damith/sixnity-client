'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Section7() {
  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 }
  }

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }

  return (
    <div className='mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3  items-stretch'>
        <motion.div 
          className='grid grid-rows-1 lg:grid-rows-2 gap-4 h-full w-full rounded-4xl py-6 sm:py-12 md:py-16 lg:py-6 xl:py-12 2xl:py-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2 }}
        >
                <motion.div 
                  className=' w-full h-full rounded-lg p-4 flex flex-col'
                  variants={leftCardVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className='flex-1'></div>
                    <div className='flex flex-col mt-auto'>
                        
                        <motion.div 
                          className='flex justify-end mb-4'
                          variants={badgeVariants}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        >
                            <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                                <p className='text-black '>
                                Real-Time Body Composition
                                </p>
                            </div>
                        </motion.div>
                        <div className='flex items-center mb-2'>
                            <motion.div 
                              className='bg-black dark:bg-white h-[2px] flex-1 mr-2'
                              style={{ transformOrigin: "left" }}
                              variants={lineVariants}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            ></motion.div>
                            <motion.div 
                              className='border-2 border-black dark:border-white rounded-full p-1'
                              variants={circleVariants}
                              transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
                            >
                                <div className='bg-black dark:bg-white w-2 h-2 rounded-full'></div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                  className=' w-full h-full rounded-lg p-4 flex flex-col'
                  variants={leftCardVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <div className='flex-1'></div>
                    <div className='flex flex-col mt-auto'>
                        
                        <motion.div 
                          className='flex justify-end mb-4'
                          variants={badgeVariants}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        >
                            <div className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'>
                                <p className='text-black '>
                                Instant Body Fat Insights
                                </p>
                            </div>
                        </motion.div>
                        <div className='flex items-center mb-2'>
                            <motion.div 
                              className='bg-black dark:bg-white h-[2px] flex-1 mr-2'
                              style={{ transformOrigin: "left" }}
                              variants={lineVariants}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                            ></motion.div>
                            <motion.div 
                              className='border-2 border-black dark:border-white rounded-full p-1'
                              variants={circleVariants}
                              transition={{ duration: 0.4, ease: "easeOut", delay: 0.9 }}
                            >
                                <div className='bg-black dark:bg-white w-2 h-2 rounded-full'></div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
              className='w-[80%] sm:w-[40%] md:w-[50%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] mx-auto flex items-center justify-center'
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image src="/images/Home/Section7/MobileApp.png" alt="Image1" width={0} height={0} sizes="100vw" className='w-full h-auto object-contain' />
            </motion.div>
            <motion.div 
              className='grid grid-rows-1 lg:grid-rows-2 gap-4 h-full w-full rounded-4xl py-6 sm:py-12 md:py-16 lg:py-6 xl:py-12 2xl:py-12'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.2 }}
            >
                <motion.div 
                  className=' w-full h-full rounded-lg p-4 flex flex-col'
                  variants={rightCardVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className='flex justify-end'>
                        <motion.div 
                          className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'
                          variants={badgeVariants}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        >
                            <p className='text-black '>
                            Full Body Metrics at a Glance
                            </p>
                        </motion.div>
                    </div>
                    <div className='flex items-center mt-2'>
                        <motion.div 
                          className='border-2 border-black dark:border-white rounded-full p-1'
                          variants={circleVariants}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                        >
                            <div className='bg-black dark:bg-white w-2 h-2 rounded-full'></div>
                        </motion.div>
                        <motion.div 
                          className='bg-black dark:bg-white h-[2px] flex-1 ml-2'
                          style={{ transformOrigin: "left" }}
                          variants={lineVariants}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                        ></motion.div>
                    </div>
                </motion.div>
                <motion.div 
                  className=' w-full h-full rounded-lg p-4 flex flex-col'
                  variants={rightCardVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <div className='flex justify-end'>
                        <motion.div 
                          className='bg-[#DBEC5B] px-4 py-2 rounded-lg w-fit'
                          variants={badgeVariants}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        >
                            <p className='text-black '>
                            Daily Calories Burned
                            </p>
                        </motion.div>
                    </div>
                    <div className='flex items-center mt-2'>
                        <motion.div 
                          className='border-2 border-black dark:border-white rounded-full p-1'
                          variants={circleVariants}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
                        >
                            <div className='bg-black dark:bg-white w-2 h-2 rounded-full'></div>
                        </motion.div>
                        <motion.div 
                          className='bg-black dark:bg-white h-[2px] flex-1 ml-2'
                          style={{ transformOrigin: "left" }}
                          variants={lineVariants}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                        ></motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

    </div>
  )
}

export default Section7