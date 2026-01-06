"use client";
import instance from "@/lib/axios";
import { useAuth } from "@/lib/context/authContext";
import { CustomAxiosRequestConfig } from "@/types/Types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";



const PageLogin = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [code, setCode] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const {userData, login} = useAuth()
    const router = useRouter();


    const handleCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         setMessage("");
        
        // validation code 
        const codeRegex = /^\d{1,6}/;
        if (!codeRegex.test(code)) {
            setMessage("Invalid verification code");
            return;
        }
        try {
            setLoading(true);
            const res = await instance.post("auth/verify-email", {
                code,
            });
            login({
             id: userData?.id!,
             type: userData?.type!,
             name: userData?.name!,
             email: userData?.email!,
             mobile_country_code: userData?.mobile_country_code!,
             mobile: userData?.mobile!,
             image: userData?.image!,
             token: userData?.token!,
             email_verified_at: true,
            });
            router.push("/");
        } catch (error: unknown) {
            console.log(error);
            if (axios.isAxiosError(error)){
                if (error.response?.status === 400) {
                    setMessage("Invalid verification code");
                }
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
       if (!userData?.id){
         router.push("/")
        }
        
      if (userData?.email_verified_at){
          router.push("/")
      }
     }, [])
      
    return (
    <section
      className="flex justify-center items-center h-[90vh] p-4"
    >
      <form
        onSubmit={handleCode}
        className="text-center bg-white dark:bg-gray-900 border-2 border-[#EEE] dark:border-gray-800 rounded-2xl p-6 lg:w-125 w-full shadow-lg transition-colors duration-300"
      >
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
           Verify Code
          <span className="text-blue-500 mx-2">Page</span>
        </h1>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="text"
            placeholder="Type Verify code"
            name="code"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>


        {message && (
          <p className="text-left p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold rounded-xl mb-4 border border-red-100 dark:border-red-900/30">
            {message}
          </p>
        )}
       

         
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
          : "Activate Account"}
        </button>
      </form>
    </section>
    )
};export default PageLogin;