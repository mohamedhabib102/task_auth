"use client"
import CustomContainer from "./CustomContainer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import CustomTitle from "./CustomTitle"
import { motion } from "framer-motion";

const similarProducts = [
  {
    id: 'p1',
    category: 'Dresses',
    title: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
    price: 'AED 900',
    rating: 4.5,
    reviewsCount: 2910,
    img: '/images/slider1.png',
    colors: ['#BE968E','#5D5D5B','#FFFFFF'],
    badge: null,
  },
  {
    id: 'p2',
    category: 'Dresses',
    title: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
    price: 'AED 900',
    oldPrice: 'AED 1300',
    rating: 4.5,
    reviewsCount: 2910,
    img: '/images/slider2.png',
    colors: ['#BE968E','#5D5D5B','#FFFFFF'],
    badge: '25% OFF',
  },
  {
    id: 'p3',
    category: 'Dresses',
    title: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
    price: 'AED 900',
    rating: 4.5,
    reviewsCount: 2910,
    img: '/images/slider3.png',
    colors: ['#BE968E','#5D5D5B','#FFFFFF'],
    badge: null,
    featured: true,
  },
  {
    id: 'p4',
    category: 'Dresses',
    title: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
    price: 'AED 900',
    oldPrice: 'AED 1300',
    rating: 4.5,
    reviewsCount: 2910,
    img: '/images/slider4.png',
    colors: ['#BE968E','#5D5D5B','#FFFFFF'],
    badge: '25% OFF',
  },
 {
    id: 'p5',
    category: 'Dresses',
    title: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
    price: 'AED 900',
    oldPrice: 'AED 1300',
    rating: 4.5,
    reviewsCount: 2910,
    img: '/images/slider5.png',
    colors: ['#BE968E','#5D5D5B','#FFFFFF'],
    badge: '25% OFF',
  }
]

const Similar = () => {
    const nextEl = 'swiper-button-next'
    const prevEl = 'swiper-button-prev'
    
    return (
        <CustomContainer>
            <div className="py-6">
                <CustomTitle
                title="Similar Items"
                />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                
            >
                                <Swiper
                    modules={[Navigation]}
                   navigation={{
                     nextEl: `#${nextEl}`,
                     prevEl: `#${prevEl}`,
                   }}
                    spaceBetween={24}
                    breakpoints={{
                        320: { slidesPerView: 1.3 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4.3 }
                    }}

                >
                    {similarProducts.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className="border border-[#0000000D] rounded-2xl p-4 bg-white">
                                <div className="relative rounded-lg overflow-hidden ">
                                    {p.badge && (
                                        <div className="absolute top-3 text-[#BE968E] left-3 bg-white py-2 px-3 rounded-lg text-[10px]
                                        border border-[#4040401A]">{p.badge}</div>
                                    )}
                                    <div className="absolute top-3 right-0 flex gap-2">
                                    {p.featured ? (
                                        <>
                                         <button className="w-9 h-9 rounded-lg border border-[#4040401A] p-1.5">

                                     <Image
                                      src="/bag-remove.svg"
                                      alt="search icon"
                                      width={24}
                                      height={24} 
                                      title="icon"
                                     />
                                 </button>
                                 <button className="w-9 h-9 rounded-lg border border-[#4040401A] p-1.5">
                                      <Image
                                       src="/Subtract.svg"
                                       alt="search icon"
                                       width={24}
                                       height={24} 
                                       title="icon"
                                      />
                                 </button>
                                        </>
                                    ) : (
                                        <>
                                    <button className="w-9 h-9 rounded-lg border border-[#4040401A] p-1.5">
                                     <Image
                                      src="/bag-add.svg"
                                      alt="search icon"
                                      width={24}
                                      height={24} 
                                      title="icon"
                                     />
                                 </button>
                                 <button className="w-9 h-9 rounded-lg border border-[#4040401A] p-1.5">
                                      <Image
                                       src="/love.svg"
                                       alt="search icon"
                                       width={24}
                                       height={24} 
                                       title="icon"
                                      />
                                 </button>
                                        </>
                                     )}

                                    </div>
                                    <img src={p.img} alt={p.title} className="w-full h-44 object-contain p-4" />
                                </div>
                                <div className="flex items-center justify-between">
                                <div className="mt-4 text-sm text-gray-500">{p.category}</div>
                                 <div className="flex items-center gap-2 mt-1">
                                    <FaStar size={16} color="#BE968E" />
                                    <div className="text-xs text-[#BE968E]">{p.rating}</div>
                                    <div className="text-xs text-gray-400">({p.reviewsCount})</div>
                                </div>
                                </div>
                               
                                <h4 className="mt-2 font-medium text-sm line-clamp-2">{p.title}</h4>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className="font-semibold">{p.price}</div>
                                        {p.oldPrice && <div className="text-xs text-gray-400 line-through">{p.oldPrice}</div>}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {p.colors.slice(0,3).map((c, i) => (
                                            <span key={i} className="w-5 h-5 rounded-full" style={{ background: c }} />
                                        ))}
                                        {p.colors.length > 3 && <span className="text-xs text-gray-400">+{p.colors.length - 3}</span>}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex flex-row-reverse items-center gap-2 justify-center
                mt-8">
                    <button 
                    id={nextEl}
                    className="bg-[#BE968E] w-12 h-12 rounded-full flex justify-center items-center"
                  >
                    <GoChevronRight size={24} className="text-white" />
                  </button>

                  <button 
                    id={prevEl}
                    className="bg-[#E8EDF2] w-12 h-12 rounded-full flex justify-center items-center"
                  >
                    <GoChevronLeft size={24} className="text-black" />
                  </button>

                </div>
            </motion.div>


            </div>
        </CustomContainer>
    )
}

export default Similar