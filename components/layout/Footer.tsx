"use client"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md"
import { TbBrandWhatsappFilled } from "react-icons/tb"
import CustomContainer from "../ui/CustomContainer"

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12">
      {/* full-width background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/footer.jpg" alt="footer-bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#020202B2]" />
      </div>

      {/* centered content */}
      <CustomContainer>
        <div className="py-14 text-white">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo + text */}
            <div className="space-y-4 col-span-2 lg:col-span-1">
              <div className="w-32">
                <Image src="/logo-trans.svg" alt="logo"
                 width={65} 
                 height={51} 
                 className="object-contain" />
              </div>
              <p className="text-sm text-[#E8DCD7] font-medium">
                Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab.
              </p>
            </div>

            {/* Contact Us - Mobile only */}
            <div className="lg:hidden block">
              <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
              <ul className="text-sm space-y-3 text-[#E8DCD7]">
                <li className="flex items-center gap-2">
                  <MdLocalPhone size={16} /> +87 01928491
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail size={16} /> Named@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn size={16} /> 381, cairo, egypt
                </li>
              </ul>
            </div>


            {/* Let Us Help */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Let Us Help</h4>
              <ul className="text-sm space-y-2 text-[#E8DCD7]">
                <li>My Account</li>
                <li>FAQS</li>
                <li>Contact & Support</li>
                <li>Categories</li>
                <li>All Products</li>
              </ul>
            </div>

            {/* Policies - Desktop only */}
            <div className="lg:block hidden">
              <h4 className="font-semibold mb-4 text-lg">Policies</h4>
              <ul className="text-sm space-y-3 text-[#E8DCD7]">
                <li>Refund Policy</li>
                <li>About Us</li>
                <li>Cancellation Policy</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>



            {/* Send Email + Follow */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-4 text-lg">Send Email</h4>
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 relative mb-6">
                <input placeholder="Email address" className="flex-1 px-3 py-2 text-xs outline-none text-black rounded-l-lg" />
                <button className="bg-[#BE968E] text-white px-4 py-2 rounded-lg text-xs">Send</button>
              </div>

              <div className="text-sm text-white mb-3">Follow Us</div>
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 flex items-center justify-center"><FaFacebookF size={20} /></button>
                <button className="w-6 h-6 flex items-center justify-center"><FaTwitter size={20} /></button>
                <button className="w-6 h-6 flex items-center justify-center"><FaInstagram size={20} /></button>
                <button className="w-6 h-6 flex items-center justify-center"><FaLinkedinIn size={20} /></button>
                <button className="w-6 h-6 flex items-center justify-center"><TbBrandWhatsappFilled size={20} /></button>
                <button className="w-6 h-6 flex items-center justify-center"><FaTelegramPlane size={20} /></button>
              </div>
            </div>
          </div>

        </div>
      </CustomContainer>
    </footer>
  )
}

export default Footer
