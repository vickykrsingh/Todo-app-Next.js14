"use client"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CreateTodoCard } from "./CreateTodoCard"
import { UserRegistrationCard } from "./UserRegistration"
import { UserLoginCard } from "./UserLogin"
import Link from "next/link"
import { usePathname } from "next/navigation"
import cookies from 'js-cookie'
import LogoutBtn from "./LogoutBtn"
export function Menu() {
  const pathname = usePathname()
  const token = cookies.get('token')
  return (
    <Menubar>
      {
        token ? (
          <>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={'/todo/create'} >Create</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <LogoutBtn/>
          </>
        ) : (
          <>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={'/login'} className={`${pathname=='/login' ? 'text-slate-600 font-semibold underline' : ''}`} >Login</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={'/register'} className={`${pathname=='/register' ? 'text-slate-600 font-semibold underline' : ''}`} >Register</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </>
        )
      }
    </Menubar>
  )
}
