import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Section2 from '@/components/Program/Section2'
import Secton3 from '@/components/Program/Secton3'
import Section4 from '@/components/Program/Section4'
import Footer from '@/components/Footer/Footer'
import Comparison from '@/components/Program/Comparison'
import Section5 from '@/components/Program/Section5'
import MACoparison from '@/components/Program/MACoparison'
import Why from '@/components/Program/Why'
import WhyUs from '@/components/Program/WhyUs'
function Page() {
  return (
    <div>
      <Navbar />
      <div className='container container-global'>
      <div className="relative w-full lg:h-[70vh] xl:h-[90vh] 2xl:h-[90vh]  bg-primary-gradient rounded-lg my-0 sm:my-0 md:my-0 lg:mb-4 xl:mb-4 2xl:my-0 flex flex-col justify-center overflow-hidden">
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-neutiva font-regular '>
        Affordable Plans. <br />
        Powerful Features.
        </h1>
        <p className='description text-center mt-2 sm:mt-2 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-6 max-w-[500px] sm:max-w-[900px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[800px] mx-auto'>
        Get premium fitness support at a price that works for you. Stay consistent, stay motivated, and grow stronger every day with our cost-friendly solutions.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 w-full  items-stretch px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mt-12 lg:mt-0 mb-12 lg:mb-0'>
            <div className='col-span-1 lg:col-span-1 flex justify-center h-full'>
            <Image
                  src="/images/Home/Heromobile.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:w-auto h-auto md:h-full object-contain"
                />
            </div>
            <div className='col-span-1 lg:col-span-2 h-full px-0 py-10'>
                <div className='flex flex-col h-full justify-between w-full'>
            <Image
                    src="/images/Home/Lao.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                  <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center">
                <Image
                  src="/images/Home/Googleplay1.png"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[70px] sm:w-auto sm:h-16 md:w-auto md:h-15 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                 <Image
                  src="/images/Program/Qrcode.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[200px] sm:w-auto sm:h-80 md:w-auto md:h-30 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                <Image
                  src="/images/Home/DownloadApple.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[70px] sm:w-auto sm:h-16 md:w-auto md:h-15 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
              </div>
              </div>
            </div>
            <div className='col-span-1 lg:col-span-1 flex justify-center h-full'>
            <Image
                  src="/images/Home/Heromobile.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:w-auto h-auto md:h-full object-contain"
                />
            </div>

        </div>
        </div>
        <Section2 />
        <Comparison />
        <Section5 />
        <MACoparison />
        <Why />
        <WhyUs />
        {/* <Secton3 />
        <Section4 /> */}
        <Footer />
      </div>
    </div>
  )
}

export default Page

