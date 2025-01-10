"use client";
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from 'next/navigation';


const Page = () => {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    useEffect(() => {
        if (isAuthenticated) {
            redirect('/dashboard');
        }
    }, [isAuthenticated, isLoading]);
    if (isLoading) {
        return <div className='h-screen w-full flex items-center justify-center'>
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-zinc-500 animate-spin">
                </div>
            </div>
        </div>
    }
    return (
        <div className='h-screen flex justify-center items-center '>
            <div className="h-[30%] w-[40%] border border-[#2b2a2a] rounded-xl flex items-center justify-evenly relative flex-col ">
                <div className=" flex flex-col items-center">
                    <h1 className='text-3xl font-bold'>Welcome back</h1>
                    <p className='font-sm text-zinc-500'> Your upcoming posts are waiting.</p>
                </div>
                <LoginLink className='flex items-center gap-3 border font-mono border-[#2b2a2a] font-medium tracking-normal py-3 px-8 rounded-xl text-lg'
                    authUrlParams={{
                        connection_id: process.env.GOOGLE_CONNECTION_ID || "conn_01944e932d53065b8a58da854043c3c3"
                    }}
                >
                    <FcGoogle size={30} />  Sign In with Google
                </LoginLink>
                <div className="text-lg font-light">
                    <p> Dont have an account <Link className='underline text-zinc-400' href={'register'} >Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Page