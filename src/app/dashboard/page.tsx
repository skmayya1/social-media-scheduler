"use client";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const Page = () => {
    return (
        <div>
            <LogoutLink className='text-lg font-light underline text-zinc-400'>Logout</LogoutLink>
        </div>
    )
}

export default Page