import Image from "next/image";
const Landing: React.FC = () => {
  return (
    <div className="relative w-full h-35 md:h-50 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/lading.jpg"
        alt="Landing Banner"
        fill
        priority
        className="object-cover opacity-5"
      />

      {/* Big faded background text */}
      <div className="lg:flex hidden absolute inset-0  items-center justify-center z-20">
        <h1 
          className="text-[80px] md:text-[80px] font-extrabold select-none z-10"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #0000001A"
          }}
        >
          Product Details
        </h1>
      </div>
        <div className="lg:hidden flex absolute inset-0  items-center justify-center z-20">
        <h1 
          className="text-[45px] md:text-[80px] font-extrabold select-none z-10"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #0000001A"
          }}
        >
          T-Shirt
        </h1>
      </div>

      {/* Main title */}
      <div className="lg:flex hidden absolute inset-0  items-center justify-center z-30">
        <h1 className="text-3xl md:text-4xl font-bold text-[#020202]">
          Product Details
        </h1>
      </div>
      <div className="lg:hidden flex absolute inset-0  items-center justify-center z-30">
        <h1 className="text-3xl md:text-4xl font-bold text-[#020202]">
          T-Shirt
        </h1>
      </div>
    </div>
  );
};

export default Landing;
