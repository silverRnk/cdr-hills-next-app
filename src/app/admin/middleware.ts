
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuth = false;

const protectedRoutes = ['/dashboard', '/students']

export default function middleware(req: NextRequest){
    console.log(req.nextUrl.pathname);
    if(!isAuth && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
    
}