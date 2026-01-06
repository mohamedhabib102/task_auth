import Image from "next/image";


interface Title {
    title: string;

}

const CustomTitle: React.FC<Title> = ({ title }) => {
    return (
        <div className="text-left mb-7 select-none font-semibold relative z-40">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <span className="w-10 h-1 bg-[#BE968E] block rounded-2xl"></span>
            <div className="absolute -top-10 z-20">
            <Image
            src="/logo-trans.svg"
            alt="logo-trans"
            title="logo"
            width={98}
            height={57.1}
            className="w-24 h-14"
            />
            </div>
        </div>
    )
};
export default CustomTitle;
