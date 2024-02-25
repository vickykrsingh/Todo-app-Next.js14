import { logout } from "@/actions/auth/logout"
import { Button } from "../ui/button"
import { MenubarMenu, MenubarTrigger } from "../ui/menubar"

function LogoutBtn() {
    return (
        <form action={logout}>
            <MenubarMenu>
                <MenubarTrigger>
                    <Button type="submit" className="bg-transparent  text-gray-900 hover:bg-transparent hover:text-slate-700 font-semibold">Logout</Button>
                </MenubarTrigger>
            </MenubarMenu>
        </form>
    )
}

export default LogoutBtn