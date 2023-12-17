
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuth = false;

const protectedRoutes = ['/admin/dashboard']

const BASE_URL = 'http://localhost:3000'

function adminMiddleware(req: NextRequest){
    const authToken = req.cookies.get('authToken');

    if(!authToken){
        return NextResponse.redirect(BASE_URL + '/admin/login')
    }

    if(authToken && req.nextUrl.pathname.endsWith('/admin')){
        return NextResponse.redirect(BASE_URL + '/admin/dashboard')
    }
    
}

export default function middleware(req: NextRequest){
    if (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.endsWith('/login')) {
        console.log('Admin Page ' + req.nextUrl.host)
        return adminMiddleware(req);
    }
}
