"use client"
import Image from "next/image"
import Link from "next/link";


const Logo: React.FC = () => {
    return (
      <Link href="/">
       <Image
        src="/logo.svg"
        alt="image logo"
        title="logo"
        width={50}
        height={50}
        className="lg:w-18 lg:h-18 w-12 h-12 object-contain"
      />
      </Link>
    )
}
export default Logo;