"use client";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import CustomContainer from "../ui/CustomContainer";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsFillHandbagFill } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";


const Product = () => {
    return (
        <CustomContainer>
            {/* Breadcrumb */}
            <div className="font-medium w-full flex items-center gap-1 bg-[#ECECEC66] px-4.5 py-3 rounded-2xl mx-auto mt-4
            lg:text-[16px] text-xs">
                <span>Home</span>
                <RiArrowRightSLine size={29} />
                <span className="lg">Our Category</span>
                <RiArrowRightSLine size={29} />
                <span className="text-[#8A8A8A]">Product Details</span>
            </div>

            {/* Main Product Section */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 my-10">
                {/* Left Side - Images */}
               
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}        
                    >

                    
                    <div className="bg-[#F5F5F5] rounded-3xl mb-4  overflow-hidden relative pt-6 z-20">
                        <Image
                            src="/images/produc1.png"
                            alt="product image"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                        <div className="flex items-start w-full
                        absolute top-0 bg-linear-to-b to-[#F4F4F433] from-[#0000004D] h-20
                             rounded pt-4 px-2 -z-10">
                                {[1,2,3,4].map((_, index) => (
                            <div key={index} className={`
                            w-[calc(100%/4)] h-1 bg-[#D4D4D4] rounded mx-1 ${index === 1 ? 'bg-[#FFFFFF]' : ''}
                            `}>
                                
                            </div>
                        ))}
                        </div>

                        <button className="absolute right-4 top-1/2 translate-y-1/2 bottom-4 bg-[#BE968E] w-12 h-12 rounded-full p-2 flex
                        justify-center items-center z-10">
                            <GoChevronRight size={24} className="text-white" />
                        </button>

                        <button className="absolute left-4 top-1/2 translate-y-1/2 bottom-4 bg-[#C4C4C4] w-12 h-12 rounded-full p-2 flex
                        justify-center items-center z-10">
                            <GoChevronLeft size={24} className="text-white" />
                        </button>
                        
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-3 relative">
                        <div className="relative z-40 w-35.5 h-35.5 bg-[#F5F5F5] rounded-lg overflow-hidden cursor-pointer">
                            <Image src="/images/produc2.png" alt="thumb1" width={142} height={142} className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-40 w-35.5 h-35.5 bg-[#F5F5F5] rounded-lg overflow-hidden cursor-pointer">
                            <Image src="/images/produc3.png" alt="thumb2" width={142} height={142} className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-40 w-35.5 h-35.5 bg-[#F5F5F5] rounded-lg overflow-hidden cursor-pointer flex items-center justify-center">
                            <Image src="/images/produc4.png" alt="thumb2" width={142} height={142} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#020202B2] bg-opacity-40 flex items-center justify-center"/>
                            <span className="absolute text-white text-3xl font-semibold">+2</span>
                        </div>
                    </div>
          
                </motion.div>
                
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }} 
                    className="w-full"       
                    >
                                    {/* Product Type Badge */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[#BE968E] font-semibold py-2 px-4 border border-[#BE968E]
                    rounded-4xl capitalize">T-Shirt</span>

                    <div className="flex items-center gap-2">
                        <button className=" w-12 h-12 rounded-lg border border-[#4040401A] p-2">
                        <Image
                         src="/bag-add.svg"
                         alt="search icon"
                         width={40}
                         height={40} 
                         title="icon"
                        />
                    </button>
                    <button className="w-12 h-12 rounded-lg border border-[#4040401A] p-2">
                         <Image
                          src="/love.svg"
                          alt="search icon"
                          width={40}
                          height={40} 
                          title="icon"
                         />
                    </button>
                    </div>


                    </div>

                    {/* Product Title */}
                    <h1 className="font-medium my-3 text-2xl">JJ.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue</h1>

                    {/* Price */}
                    <div className="my-4">
                        <span className="text-[20px] font-medium mr-2">$300.00</span>
                        <span className="text-[16px] text-gray-400 line-through">$360.00</span>
                        <span className="text-xs text-gray-500 block font-medium">This price is exclusive of taxes</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm my-4 font-normal">
                        Lorem ipsum dolor sit, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit diam nonummy
                    </p>

                    {/* Type Selection */}
                    <div className="my-6 relative w-75">
                        <label className="text-sm font-semibold mb-2 block absolute 
                        -top-4.5 left-4 bg-white py-2 px-1">Type</label>
                        <div className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2"><Image
                        src="/arrow.svg"
                        alt="arrow icon"
                        width={20}
                        height={20}
                        className="w-4"
                        /></div>
                        <select className="appearance-none w-full border border-[#00000026] rounded-lg p-4 text-sm outline-none">
                            <option className="font-medium text-xs">Cotton</option>
                            <option className="font-medium text-xs">Polyester</option>
                        </select>
                    </div>

                    {/* Size Selection */}
                               <div className="my-6 relative w-75">
                        <label className="text-sm font-semibold mb-2 block absolute 
                        -top-4.5 left-4 bg-white py-2 px-1">Size</label>
                        <div className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2"><Image
                        src="/arrow.svg"
                        alt="arrow icon"
                        width={20}
                        height={20}
                        className="w-4"
                        /></div>
                        <select className="appearance-none w-full border border-[#00000026] rounded-lg p-4 text-sm outline-none">
                            <option className="font-medium text-xs">2XI</option>
                            <option className="font-medium text-xs">MD</option>
                            <option className="font-medium text-xs">LG</option>
                            <option className="font-medium text-xs">XL</option>
                        </select>
                    </div>

                    {/* Colors */}
                    <div className="my-12">
                        <label className="text-[20px] font-medium mb-3 block">Colors</label>
                        <div className="flex gap-3">
                            <div className="w-16 h-16 rounded-full bg-[#F4F7F9] p-3.5 flex justify-center items-center">
                                <button className="w-8 h-8 bg-[#D90202] rounded-full border-2 border-gray-300"></button>
                            </div>
                            <div className="relative w-16 h-16 rounded-full bg-[#F4F7F9] border border-[#020202] p-3.5 flex justify-center items-center">
                                <button className="w-8 h-8 bg-[#B8CCDA] rounded-full border-2 border-gray-300"></button>
                                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-sm">Blue</span>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-[#F4F7F9] p-3.5 flex justify-center items-center">
                                <button className="w-8 h-8 bg-[#988755] rounded-full border-2 border-gray-300"></button>
                            </div>

                            <div className="w-16 h-16 rounded-full bg-[#F4F7F9] p-3.5 flex justify-center items-center">
                                <button className="w-8 h-8 bg-[#7198C8] rounded-full border-2 border-gray-300"></button>
                            </div>

                            <div className="w-16 h-16 rounded-full bg-[#F4F7F9] p-3.5 flex justify-center items-center">
                                <button className="w-8 h-8 bg-[#5D5D5B] rounded-full border-2 border-gray-300"></button>
                            </div>
                        </div>
                    </div>

                    {/* Quantity and Price */}
                    <label className="text-[20px] font-medium mb-3 block">Quantity <span className="text-[#8A8A8A] text-[16px]">{`($300.00 for Piece)`}</span></label>
                    <div className="mt-2 flex lg:flex-row flex-col items-center justify-between gap-4">
                         <div className="flex items-center gap-4 md:w-auto w-full">
                            <div className="flex items-center gap-4 bg-[#F5F5F5] p-3 rounded-lg">
                            <button className="w-10 h-10 flex justify-center items-center cursor-pointer bg-white text-[#B0B0B0] rounded text-center"><FiMinus size={20} /></button>
                            <span className="text-lg font-semibold w-8 text-center">01</span>
                            <button className="w-10 h-10 flex justify-center items-center cursor-pointer bg-white  text-black rounded text-center"><FiPlus size={20} /></button>
                        </div>
                        <span className="text-2xl font-medium">$300.00</span>
                         </div>
                         <button className="cursor-pointer lg:w-58.5 w-full bg-[#BE968E] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                            Add To Cart
                            <BsFillHandbagFill  size={20} />
                        </button>
                    </div>
                    </motion.div>
            </div>

        </CustomContainer>
    );
};

export default Product;