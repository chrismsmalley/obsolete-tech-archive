import './globals.css';
import Navbar from './src/components/header/navbar';
import Footer from './src/components/footer/footer';
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
  themeColor: '#f7f3eb',
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
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          margin: 0,
          padding: '0 1rem',
          backgroundColor: '#f7f3eb',
          fontSize: '16px',
          lineHeight: '1.5',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
