"use client";
import instance from "@/lib/axios";
import { useAuth } from "@/lib/context/authContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";




const PageLogin = () => {
    const [eye, setEye] = useState(false);
    const { login } = useAuth();
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setData({...data, [name]: value});
     };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);


        // validation password
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$_])[A-Za-z\d@#$_]{8,}$/;
        if (!passwordRegex.test(data?.password || '')) {
            setMessage("Password must be at least 8 characters long and include at least one letter, one number, and one special character (@, #, $, _).");
            return;
        }

        try {
            setLoading(true);
            const fromData = new FormData();
    
            fromData.append("email", data?.email || '');
            fromData.append("password", data?.password || '');
            const res = await instance.post("auth/login", fromData);

            const { id, type, name, email, mobile_country_code, mobile, image, email_verified_at, token } = res.data.data;

            login({
              id,
              type,
              name,
              email,
              mobile_country_code,
              mobile,
              image,
              email_verified_at,
              token,
            })
            router.push("/");
        } catch (error: unknown) {
            console.log(error);
            if (axios.isAxiosError(error)){
              // 422 Email does not exist
              // 400 Incorrect email or password
                if (error.response?.status === 422) {
                    setMessage("Email does not exist");
                }
                if (error.response?.status === 400) {
                    setMessage("Incorrect email or password");
                }
            }
        } finally{
            setLoading(false);
        }
    }
      
  const handleEye = () => {
    setEye(!eye);
  };
    return (
    <section
      className="flex justify-center items-center h-[90vh] p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="text-center bg-white dark:bg-gray-900 border-2 border-[#EEE] dark:border-gray-800 rounded-2xl p-6 lg:w-125 w-full shadow-lg transition-colors duration-300"
      >
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Login
          <span className="text-blue-500">Page</span>
        </h1>

        <div className="mb-6 last:mb-0 relative">
          <input
            className="border-2 border-[#EEE] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl w-full text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-lg placeholder:duration-200 focus:placeholder:opacity-0 focus:border-blue-500 outline-none transition-all"
            type="email"
            placeholder="Type Email"
            name="email"
            value={data.email}
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
            value={data.password}
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

        {message && (
          <p className="text-left p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold rounded-xl mb-4 border border-red-100 dark:border-red-900/30">
            {message}
          </p>
        )}

        <p className="text-left text-sm font-semibold"> Don't have an account?
          <Link href="/auth/register" className="text-red-500 underline inline-block mx-2">sign in</Link>
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
          : "Sign In"}
        </button>
      </form>
    </section>
    )
};export default PageLogin;