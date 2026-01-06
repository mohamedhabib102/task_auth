import CustomContainer from "@/components/ui/CustomContainer";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { RxTextAlignJustify } from "react-icons/rx";




const Header = () => {
    return (
        <header>
          <CustomContainer>
           <div className="flex justify-between items-center md:py-3 py-2 bg-white">
             <nav className="flex items-center gap-10">
              <Logo />
              <ul className="lg:flex hidden items-center gap-4">
                <li className="flex items-center gap-1 text-[#8A8A8A] font-normal">
                  <Image
                   src="/home.svg"
                   alt="home icon"
                   width={16}
                   height={16} 
                   title="icon"
                  />
                  <Link href="/" className="text-sm">Home</Link>
                </li>
                <li className="flex items-center gap-1 text-[#8A8A8A] font-normal">
                 <Image
                   src="/our.svg"
                   alt="home icon"
                   width={16}
                   height={16} 
                   title="icon"
                  />
                  <Link href="/" className="text-sm">Our Category</Link>
                </li>

                  <li className="flex items-center gap-1 text-[#8A8A8A] font-normal">
                 <Image
                   src="/about.svg"
                   alt="home icon"
                   width={16}
                   height={16} 
                   title="icon"
                  />
                  <Link href="/" className="text-sm">About Us</Link>
                </li>
                  <li className="flex items-center gap-1 text-[#8A8A8A] font-normal">
                 <Image
                   src="/contact.svg"
                   alt="home icon"
                   width={16}
                   height={16} 
                   title="icon"
                  />
                  <Link href="/" className="text-sm">Contact Us</Link>
                </li>
                  <li className="flex items-center gap-1 text-[#8A8A8A] font-normal">
                 <Image
                   src="/Fqs.svg"
                   alt="home icon"
                   width={16}
                   height={16} 
                   title="icon"
                  />
                  <Link href="/" className="text-sm">FAQs</Link>
                </li>
              </ul>
            </nav>
            <ul className="items-center gap-4 lg:flex hidden">
              <li>
                <Link href="cart">
                 <Image
                   src="/cart.svg"
                   alt="search icon"
                   width={20}
                   height={20} 
                   title="icon"
                  />
                </Link>
              </li>
                <li>
                <Link href="cart">
                 <Image
                   src="/notifi.svg"
                   alt="search icon"
                   width={20}
                   height={20} 
                   title="icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="cart">
                 <Image
                   src="/favo.svg"
                   alt="search icon"
                   width={20}
                   height={20} 
                   title="icon"
                  />
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="cart" className="text-sm font-medium">
                 EN
                </Link>
                <IoIosArrowDown size={18}/>
              </li>
              <li className="flex items-center gap-1">
                <Link href="cart">
                 <Image
                   src="/acc.svg"
                   alt="search icon"
                   width={18}
                   height={18} 
                   title="icon"
                  />
                </Link>
                <IoIosArrowDown size={18}/>
              </li>
            </ul>
            <RxTextAlignJustify className="lg:hidden block cursor-pointer" size={30}/>
           </div>
          </CustomContainer>
          </header>
    )
};export default Header;