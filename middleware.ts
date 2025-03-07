// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

// Define the paths where authentication is required
const protectedPaths = ['/admin', '/dashboard', '/profile', '/api'];

// Middleware function
export function middleware(req: NextRequest) {
  const token =
    req.cookies.get('next-auth.session-token') ||
    req.cookies.get('__Secure-next-auth.session-token');
  const pathname = req.nextUrl.pathname;

  // Check if the user is accessing a protected path without being authenticated
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    const callbackUrl = encodeURIComponent(req.nextUrl.href); // Encode the current URL as a callback
    const redirectUrl = new URL(`/signin`, req.url); // Base redirect URL
    redirectUrl.searchParams.set('callbackUrl', callbackUrl); // Add the callback URL as a query parameter

    return NextResponse.redirect(redirectUrl); // Redirect to the sign-in page with the callback
  }

  return NextResponse.next(); // Proceed if authenticated or accessing public routes
}

// Export configuration directly (do not re-export)
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/profile/:path*'],
};