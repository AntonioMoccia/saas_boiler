

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import React from 'react'
import { UserButton } from './UserButton'

function NavBar() {
    return (
        <header className=' w-full bg-red-400 h-15 '>
            <div className=' h-full max-w-screen-2xl mx-auto flex items-center justify-between '>
                
                    <div>
                        Logo
                    </div>
                    <nav className=' w-[50%] bg-green-50'>
                        Navigation
                    </nav>
                    <div>
                      <UserButton />
                    </div>
                
            </div>
        </header>
    )
}

export default NavBar