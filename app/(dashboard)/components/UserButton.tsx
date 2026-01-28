"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"


export function UserButton() {

    const logout = async ()=>{
        await authClient.signOut()
        redirect("/sign-in")
    }


    const { data: session, error } = authClient.useSession()
    console.log(session)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>


                {
                    session?.session ? (
                        <Avatar>
                            <AvatarImage
                                src={session.user.image ? session.user.image : undefined}
                                alt="user"
                                className="grayscale"
                            />
                            <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ) : (
                        <Button>
                            Login
                        </Button>
                    )
                }


            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Button variant={'ghost'} onClick={logout}>
                            Logout
                        </Button>
                      
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}