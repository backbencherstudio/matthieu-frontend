// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const userType = request.cookies.get('userType')?.value;
  const pathname = request.nextUrl.pathname;

  // 1. Auth pages: logged-in users should not access them
  const authPages = ['/signin', '/signup'];

  if (token && authPages.includes(pathname)) {
    // Redirect to /admin if admin, otherwise to home
    const redirectPath = userType === 'admin' ? '/admin' : '/';
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // 2. Protect /admin – only admins allowed
  if (pathname.startsWith('/admin')) {
    if (!token) {
      // Not logged in → send to signin
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (userType !== 'admin') {
      // Logged in but not admin → send to home
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // All other routes → allow normally
  return NextResponse.next();
}

// Optional but recommended: limit when middleware runs
export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/admin/:path*',
  ],
};