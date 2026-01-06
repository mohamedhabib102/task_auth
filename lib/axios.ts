"use client";
import { CustomAxiosRequestConfig } from "@/types/Types";
import axios from "axios";
import jsCookie from "js-cookie"



const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Accept": "application/json"
    }
})


instance.interceptors.request.use((config) => {
    const customConfig = config as CustomAxiosRequestConfig;

    if (customConfig.skipAuth) return config;
    const user = jsCookie.get("user");
    const token = user ? JSON.parse(user).token : null;

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default instance;