"use client";
import instance from "@/lib/axios";
import { CustomAxiosRequestConfig } from "@/types/Types";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "@/lib/context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";


const PageRegister = () => {
    const {login, userData} = useAuth()
    const [eye, setEye] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
      name: '',
      email: '',
      password: '',
      mobile: '',
      confirmPassword: '',
      mobile_country_code: '',
    })
    const router = useRouter()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    }
    const handleEye = () => {
      setEye(!eye);
    };


    /*
    442 code email is already taken
    400 code number is already taken
    */


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);


        // validation phone number
        const phoneRegex = /^\d{8,}/;
        if (!phoneRegex.test(data?.mobile || '')) {
            setMessage("Please enter a valid phone number with at least 8 digits.");
            return;
        }
        
        // validation country code
        const countryCodeRegex = /^\d{2,3}$/;
        if (!countryCodeRegex.test(data?.mobile_country_code || '')) {
            setMessage("Please enter a valid country code with exactly 3 digits.");
            return;
        }

        // validation password
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$_])[A-Za-z\d@#$_]{8,}$/;
        if (!passwordRegex.test(data?.password || '')) {
            setMessage("Password must be at least 8 characters long and include at least one letter, one number, and one special character (@, #, $, _).");
            return;
        }
        try {
            setLoading(true);
            console.log(data);
            const fromData = new FormData();
            fromData.append("name", data?.name || '');
            fromData.append("email", data?.email || '');
            fromData.append("password", data?.password || '');
            fromData.append("password_confirmation", data?.confirmPassword || '');
            fromData.append("mobile", data?.mobile || '');
            fromData.append("mobile_country_code", data?.mobile_country_code || '');
            const res = await instance.post("auth/register", fromData,
              {skipAuth: true} as CustomAxiosRequestConfig);
            const {
                name, 
                email,
                mobile, 
                mobile_country_code, 
                id, 
                type, 
                image,email_verified_at,
                token,
            } = res.data.data;

            login({
                id,
                type,
                name,
                email,
                mobile,
                mobile_country_code,
                image,
                email_verified_at,
                token,
            })
            router.push("/auth/verify");
        } catch (error: unknown) {
            console.log(error);
            if (axios.isAxiosError(error)) {
               if (error.response?.status === 422){
                setMessage("The email has already been taken");
               } 
               if (error.response?.status === 400){
                setMessage("The mobile number has already been taken");
               }
            }
        } finally{
            setLoading(false);
        }
    }

    return (
    <section
      className="flex justify-center items-center h-[90vh] p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="text-center bg-white dark:bg-gray-900 border-2 border-[#EEE] dark:border-gray-800 rounded-2xl p-6 lg:w-125 w-full shadow-lg transition-colors duration-300"
      >
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Create
          <span className="text-blue-500 ml-2">Account</span>
        </h1>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="text"
            placeholder="Type Full Name"
            name="name"
            value={data?.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="email"
            placeholder="Type Email"
            name="email"
            value={data?.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="text"
            placeholder="Type Mobile Number"
            name="mobile"
            value={data?.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type={eye ? "text" : "password"}
            placeholder="Type Password"
            name="password"
            value={data?.password}
            onChange={handleChange}
            required
          />
          <span
            className={`right-4
              } absolute top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors`}
            onClick={handleEye}
          >
            {eye ? <FaEye size={22} /> : <FaEyeSlash size={22} />}
          </span>
        </div>

        
        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type={eye ? "text" : "password"}
            placeholder="Type Confirm Password"
            name="confirmPassword"
            value={data?.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className={`right-4
              } absolute top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors`}
            onClick={handleEye}
          >
            {eye ? <FaEye size={22} /> : <FaEyeSlash size={22} />}
          </span>
        </div>


        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="text"
            placeholder="Type Mobile Country Code"
            name="mobile_country_code"
            value={data?.mobile_country_code}
            onChange={handleChange}
            required
          />
        </div>

        {message && (
          <p className="text-left p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold rounded-xl mb-4 border border-red-100 dark:border-red-900/30">
            {message}
          </p>
        )}

        <p className="text-left text-sm font-semibold"> Do you have an account? 
          <Link href="/auth/login" className="text-red-500 underline inline-block mx-2">sign in</Link>
        </p>
       

        <button
        disabled={loading} 
        className={
            `
            ${loading ? "opacity-70 cursor-not-allowed!" : "cursor-pointer"}
            bg-blue-500 hover:bg-blue-600 active:scale-95 p-3 rounded-xl text-white font-bold w-full text-lg mt-2 shadow-lg hover:shadow-blue-500/30 transition-all duration-300
            `
        }>
          {loading ? 
          <AiOutlineLoading size={25} className="animate-spin inline-block"/>
          : "Continue"}
        </button>
      </form>
    </section>
    )
};export default PageRegister;