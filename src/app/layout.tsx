import type { Metadata } from 'next';
import './globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import I18nProvider from '@/providers/I18nProvider';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthChecker, LayoutShell, PublicHeader } from '@/features';
import Script from 'next/script';
import { SiteFooter } from '@/features/landing';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const userType = cookieStore.get('userType')?.value;

  const siteTitle =
    userType === 'Admin'
      ? 'پنل مدیریت دنتالیت'
      : userType === 'Financial'
        ? 'پنل مدیریت مالی'
        : 'باشگاه معرفین دنتالیت';
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
      <head>
        <Script
          id='gtm-script'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXZLPBGG');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TXZLPBGG'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <I18nProvider>
          <ThemeProvider defaultTheme='light'>
            <AuthChecker />
            <PublicHeader />
            <LayoutShell>{children}</LayoutShell>
            <SiteFooter />
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