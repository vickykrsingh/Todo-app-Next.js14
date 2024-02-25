import { NextRequest, NextResponse } from "next/server"
const authMiddleware = async (req:NextRequest) => {
    const path = req.nextUrl.pathname
    const isPublicPath = path=='/login' || path=='/register'
    const token = req.cookies.get("token")?.value || ""
    console.log(token)
    // if the user is in public path home page and the user have token means the user is authorized 
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/todo',req.url))
    }

    // if the user is not in public path and the user don't have any token or null token means user is not authorized
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',req.url))
    }

}


export const config = { matcher: [ /* * Match all request paths except for the ones starting with: * - api (API routes) * - _next/static (static files) * - _next/image (image optimization files) * - favicon.ico (favicon file) */ '/((?!api|_next/static|_next/image|favicon.ico).*)' ], }




export default authMiddleware