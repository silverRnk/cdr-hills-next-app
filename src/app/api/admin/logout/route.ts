import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  cookies().delete('authToken')
  return new Response('', {status: 200})
}