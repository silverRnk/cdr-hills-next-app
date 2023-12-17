import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export function middleware(request: NextRequest) {
    const authToken = cookies().get('authToken');
    console.log(authToken + 'token');
    if(!authToken){
        return NextResponse.redirect('/admin/login')
    }
}
 
// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*'],
}