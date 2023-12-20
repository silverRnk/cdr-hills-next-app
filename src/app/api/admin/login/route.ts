import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  cookies().set('authToken', '123456', {sameSite: 'strict'})
  return new Response('success', {status: 200});
}