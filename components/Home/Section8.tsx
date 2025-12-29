'use client'

import React from 'react'
import Image from 'next/image'

const reviewsData = [
  {
    id: 1,
    name: 'NINA',
    role: 'ART DIRECTOR',
    image: '/images/Home/Section8/Review.png',
    testimonial:
      '"I lost 15kg in just six months thanks to their HIIT classes and nutrition advice. The amazing Muzcula community here is so supportive."',
    stars: '/images/Home/Section8/Start.svg'
  },
  {
    id: 2,
    name: 'NINA',
    role: 'ART DIRECTOR',
    image: '/images/Home/Section8/Review.png',
    testimonial:
      '"I lost 15kg in just six months thanks to their HIIT classes and nutrition advice. The amazing Muzcula community here is so supportive."',
    stars: '/images/Home/Section8/Start.svg'
  },
  {
    id: 3,
    name: 'NINA',
    role: 'ART DIRECTOR',
    image: '/images/Home/Section8/Review.png',
    testimonial:
      '"I lost 15kg in just six months thanks to their HIIT classes and nutrition advice. The amazing Muzcula community here is so supportive."',
    stars: '/images/Home/Section8/Start.svg'
  },
  {
    id: 4,
    name: 'NINA',
    role: 'ART DIRECTOR',
    image: '/images/Home/Section8/Review.png',
    testimonial:
      '"I lost 15kg in just six months thanks to their HIIT classes and nutrition advice. The amazing Muzcula community here is so supportive."',
    stars: '/images/Home/Section8/Start.svg'
  }
]

function Section8() {
  return (
    <div className="mt-12">
      {/* FIXED HEIGHT CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-stretch h-[600px]">
        
        {/* LEFT SIDE */}
        <div className="col-span-1 lg:col-span-5 h-full flex flex-col">
          <h1 className="title">
            Where Real<br /> Transformations Begin
          </h1>

          <div className="grid grid-cols-2 gap-4 mt-6 flex-1 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
              <Image
                src="/images/Home/Section8/Video1.png"
                alt="Image1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
              <Image
                src="/images/Home/Section8/Video2.png"
                alt="Image2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1 lg:col-span-3 h-full overflow-hidden">
          {/* SCROLL AREA */}
          <div className="h-full overflow-y-auto pr-2 scrollbar-hide">
            <div className="flex flex-col gap-4">
              {reviewsData.map((review) => (
                <div key={review.id} className="shrink-0">
                  <div className="w-full rounded-4xl border-2 border-black p-8">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                      <p className="text-2xl font-bold">{review.name}</p>
                      <p className="text-xl text-[#DBEC5B]">
                        – {review.role}
                      </p>
                    </div>

                    <p className="small-description mt-4">
                      {review.testimonial}
                    </p>

                    <div className="mt-4">
                      <Image
                        src={review.stars}
                        alt="Stars"
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section8
