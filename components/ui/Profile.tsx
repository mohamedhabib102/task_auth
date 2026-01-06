"use client";
import { useAuth } from "@/lib/context/authContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaCheck, FaTimes } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const Profile = () => {
    const {userData, logout} = useAuth()
    const [load, setLoad] = useState(false)


    useEffect(() => {
        setLoad(!load)
    }, [])
    

    return (
        <>
        {load && userData?.id ? (
            <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Welcome, {userData?.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Your account information</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">


                    <Image
                    src={userData?.image}
                    alt=""
                    title=""
                    width={120}
                    height={120}
                    className="w-32 h-32 mx-auto mb-3"
                    />
                    
                    {/* User ID */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <FaUser className="text-blue-500" size={20} />
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">User ID</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-8">{userData?.id}</p>
                    </div>

                    {/* Email */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <FaEnvelope className="text-red-500" size={20} />
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Email</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-8">{userData?.email}</p>
                    </div>

                    {/* Phone */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <FaPhone className="text-green-500" size={20} />
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Phone</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-8">{userData?.mobile}</p>
                    </div>

                    {/* Country Code */}
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <FaGlobe className="text-purple-500" size={20} />
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Country Code</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-8">{userData?.mobile_country_code}</p>
                    </div>

                    {/* Account Status */}
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            {userData?.email_verified_at ? (
                                <FaCheck className="text-green-500" size={20} />
                            ) : (
                                <FaTimes className="text-red-500" size={20} />
                            )}
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Account Status</p>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                            <span className={`inline-block w-3 h-3 rounded-full ${userData?.email_verified_at ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {userData?.email_verified_at ? "Active" : "Inactive"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                    <button 
                    onClick={() => logout({url: "/auth/login"})}
                    className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300">
                        Logout <LuLogOut size={28} className="text-red-500"/>
                    </button>
                </div>
            </div>
        </div>

        ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full text-center border border-gray-200 dark:border-gray-700">
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
               You are not logged in
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
               You must be logged in to access this page.
            </p>

            <div className="flex flex-col gap-3">
                <a
                    href="/auth/login"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
                >
                   Login
                </a>

                <a
                    href="/auth/register"
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-bold py-3 rounded-xl transition"
                >
                   Register
                </a>
            </div>
        </div>
    </div>)}

        </>
    );
};

export default Profile;