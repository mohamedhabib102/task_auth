import { FaCommentDots, FaStar } from "react-icons/fa";
import CustomContainer from "./CustomContainer";
import CustomTitle from "./CustomTitle"



const ratign = [
    {
        id: 1,
        rating: 5,
        count: 67,
    },
    {
        id: 2,
        rating: 4,
        count: 15,
    },
    {
        id: 3,
        rating: 3,
        count: 6,
    },
    {
        id: 4,
        rating: 2,
        count: 3,
    },
    {
        id: 5,
        rating: 2,
        count: 9,
    }
]



const Rating = () => {
    return (
        <CustomContainer>
          <CustomTitle 
          title="Rating & Reviews" 
          />
          {/* Ratings */}
          <div className="flex lg:flex-row flex-col items-center justify-between">
             <div className="lg:w-[60%] w-full flex lg:flex-row flex-col items-center gap-6">
                 <div className="relative">
                     <h2 className="inline-block text-[120px] font-medium mr-2">4,5</h2>
                     <span className="inline-block text-2xl text-[#B0B0B0]">/5</span>
                 </div>
                 <div className="lg:w-[65%] w-full">
                    {ratign.map((item) => (
                        <div key={item.id}
                        className="flex items-center gap-2 mb-2.5 last:mb-0"
                        >
                            <span className="text-[#545454] flex items-center gap-1 text-[20px]">
                                <FaStar size={20} color="#BE968E"/>
                                <span>{item.rating}</span>
                            </span>
                            <div className="w-full bg-[#E0E0E0] h-1.5 rounded-full mt-2">
                                <div className="bg-[#BE968E] h-1.5 rounded-full" style={{ width: `${item.count}%` }}>
                                </div>
                            </div>
                            <span className="text-[#545454] text-[20px]">{item.count}%</span>
                        </div>
                    ))}
                 </div>
             </div>
             <div className="text-center lg:block hidden">
                <span className="text-[#545454] mb-2 block">Total Reviews</span>
                <h3 className="text-6xl font-semibold mb-8">3.0K</h3>
                <button className="bg-[#BE968E] px-8 py-4 rounded-xl
                text-white w-49.5 flex items-center gap-3">
                    <span className="text-[15px]">Add Comment</span>
                <FaCommentDots size={20} className="text-[#FFFFFF]"/>
                </button>
             </div>
          </div>

          {/* Comments */}
          <div className="my-12 py-8">
              <div className="space-y-6">
                  {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="pb-6 border-b border-gray-200">
                          <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                  <h4 className="font-semibold text-[20px]">Alex Daewn</h4>
                                  <div className="flex gap-1">
                                      {[1, 2, 3, 4].map((star) => (
                                          <FaStar key={star} size={16} color="#BE968E" />
                                      ))}
                                      <FaStar size={16} color="#E0E0E0" />
                                  </div>
                              </div>
                              <span className="text-[#020202]">4 months ago</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                          </p>
                      </div>
                  ))}
              </div>
              <div className="text-center mt-8">
                  <button className="text-[#BE968E] bg-[#F5F5F5] w-51.75 p-4 rounded-xl font-semibold
                  text-sm">
                      View More Comments
                  </button>
              </div>
          </div>
        </CustomContainer>
    )
};export default Rating;