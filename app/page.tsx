import Image from "next/image";
import Loader from "@/components/Loader/loader";
import WhiteButton from "@/components/Button/WhiteButton";
import Navbar from "@/components/Navbar/Navbar";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";
import Section7 from "@/components/Home/Section7";
import Section8 from "@/components/Home/Section8";
import Footer from "@/components/Footer/Footer";
import StartFree from "@/components/Button/StartFree";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="container  container-global">
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[400px] lg:h-[70vh] xl:h-[90vh] 2xl:h-[90vh]  bg-primary-gradient rounded-lg my-0 sm:my-0 md:my-0 lg:mb-4 xl:mb-4 2xl:my-0 flex flex-col justify-end overflow-hidden">
        <div className="absolute justify-end items-end w-full h-screen sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[80vh] z-1">
          <div className="w-full h-0 sm:h-[500px] md:h-[60vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[80vh] flex justify-center ">
            <Image
              src="/images/Home/Girl.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0 sm:gap-0 md:gap-0 lg:gap-2 xl:gap-2 2xl:gap-4 items-end  lg:pl-8 xl:pl-10 2xl:pl-10">
          <div className="col-span-1 lg:col-span-2 px-6 lg:px-0 w-full h-full pt-8 sm:pt-8 md:pt-8 lg:pt-6 pb-6 md:px-6">
            <div>
              <h1 className="font-neutiva text-[40px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]  font-regular  xl:leading-[60px] 2xl:leading-[80px] leading-[40px] text-transparent bg-clip-text bg-linear-to-b from-[#313730] to-[rgba(49,55,48,0.6)] dark:from-[#ffffff] dark:to-[rgba(255,255,255,0.6)]">
                Boost Your Fitness, Without Breaking the Bank
              </h1>
              <div className="my-6">
                <StartFree /> 
              </div>
              <p className="description max-w-[300px] ">
                From gym operations to personal coaching and member progress, everything you need to grow and perform is right here.
              </p>
              <div className="flex flex-row gap-4 mt-4 mb-6">
                <Image
                  src="/images/Home/Googleplay1.png"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                <Image
                  src="/images/Home/DownloadApple.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
              </div>

            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 pb-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 px-6 ">
            <div className="flex flex-col md:flex-row gap-2 items-end">
              <div className="w-full flex flex-col items-center">
                <div className="w-full ">
                  <WhiteButton />
                  <div className="bg-white/30 backdrop-blur-md w-full border border-white rounded-3xl p-6 shadow-lg mb-4">
                    <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                    Stay motivated, train better, and hit new goals daily with tools designed for real fitness journeys.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/images/Home/Lao.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-auto md:h-[50vh] lg:h-[50vh] xl:h-[70vh] 2xl:h-[70vh] flex justify-center ">
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
        </div>
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
        {/* Done! */}
      </div>
      
    </div>
  );
}
