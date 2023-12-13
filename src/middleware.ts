
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuth = false;

const protectedRoutes = ['/admin/dashboard']

function adminMiddleware(req: NextRequest){
    console.log(req.nextUrl.pathname);
    if(!isAuth && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL("/admin/login", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}

export default function middleware(req: NextRequest){
    if (req.nextUrl.pathname.startsWith('/admin')) {
        console.log('admin page')
      }
}