import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/profile', '/panel'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  const pathname = req.nextUrl.pathname;

  const protectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (protectedRoute && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/panel/:path*'],
};
