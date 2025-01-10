import Image from 'next/image'
import React from 'react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
    const { user } = useKindeBrowserClient();

    return (
        <nav className='w-full py-10 h-[8vh] flex items-center px-20 justify-between border-b border-zinc-800'>
            <div className="">
                <h1 className=' text-3xl font-bold'>shedulr</h1>
            </div>
            {user && <div className='flex items-center gap-3 text-lg'>
                <div className=' flex gap-10 items-center'>
                    <div className="w-10 relative">
  
                    </div>
                    
                    Socials</div>
                <p >{user.given_name}</p>
                <Image className="h-10 w-10 rounded-full overflow-hidden" src={user?.picture as string} alt='profile' height={100} width={100} />
            </div>}
        </nav>
    )
}

export default Navbar