import './globals.css';
import Navbar from './src/components/header/navbar';
import Footer from './src/components/footer/footer';
import CookieBanner from './src/components/banner/CookieBanner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Obsolete Tech Archive',
  description: 'Unearth forgotten gadgets, doomed devices, and digital flops in this digital museum of obsolete technology.',
  icons: {
    icon: '/images/OT image.png',
  },
  keywords: [
    'obsolete tech',
    'vintage technology',
    'tech archive',
    'digital museum',
    'forgotten gadgets'
  ],
  authors: [{ name: 'Obsolete Tech Archive Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Obsolete Tech Archive',
    description: 'Explore a digital museum of forgotten gadgets and obsolete tech that shaped the past.',
    url: 'https://obsoletetecharchive.com',
    type: 'website',
    siteName: 'Obsolete Tech Archive',
    images: ['/images/OT image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obsolete Tech Archive',
    description: 'A digital museum exploring the forgotten gadgets and obsolete tech of yesteryear.',
    images: ['/images/OT image.png']
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export const themeColor = '#f7f3eb';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Ezoic Header Scripts */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          {/* Ezoic - bottom_of_page - bottom_of_page */}
          <div id="ezoic-pub-ad-placeholder-103"></div>
          {/* End Ezoic - bottom_of_page - bottom_of_page */}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                ezstandalone.cmd.push(function () {
                  ezstandalone.showAds(103);
                });
              `,
            }}
          />
        </div>
      </body>
    </html>
  );
}
