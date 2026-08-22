import type { Metadata } from 'next';
import './globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import I18nProvider from '@/providers/I18nProvider';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthChecker, LayoutShell } from '@/features';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const userType = cookieStore.get('userType')?.value;

  const siteTitle =
    userType === 'Admin'
      ? 'پنل مدیریت دنتالیت'
      : userType === 'Financial'
        ? 'پنل مدیریت مالی'
        : 'پنل معرف مشتری';
  return {
    metadataBase: new URL('https://example.com'),
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    icons: {
      icon: '/assets/icons/logo.png',
      shortcut: '/assets/icons/logo.png',
      apple: '/assets/icons/logo.png',
    },
    description: 'Admin panel with modular structure and global sidebar.',
    applicationName: siteTitle,
    generator: 'Next.js',
    keywords: [
      'real estate',
      'پنل مدیریت مالی',
      'dashboard',
      'nextjs',
      'tailwind',
    ],
    authors: [{ name: 'test' }],
    openGraph: {
      type: 'website',
      url: '/',
      title: siteTitle,
      description: 'Admin panel with modular structure and global sidebar.',
      siteName: siteTitle,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: 'Admin panel with modular structure and global sidebar.',
    },
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl' className='font-fa' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <I18nProvider>
          <ThemeProvider defaultTheme='dark'>
            <AuthChecker />
            <LayoutShell>{children}</LayoutShell>

            <ToastContainer
              position='top-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}