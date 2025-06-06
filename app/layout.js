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
  description: 'A digital museum of forgotten technology',
  icons: {
    icon: '/images/OT image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-y7A6GONAAiY+1YHHe4tkaLTKuxh2vI+ksAEzAqlUwZebghY6vUJxU5TW4WrEpzGvXtF+Tx09mfB1AmSxyAhJgA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Obsolete Tech Archive</title>
        <meta name="description" content="Unearth forgotten gadgets, doomed devices, and digital flops in this digital museum of obsolete technology." />
        <meta name="keywords" content="obsolete tech, vintage technology, tech archive, digital museum, forgotten gadgets" />
        <meta property="og:title" content="Obsolete Tech Archive" />
        <meta property="og:description" content="Explore a digital museum of forgotten gadgets and obsolete tech that shaped the past." />
        <meta property="og:image" content="/images/OT image.png" />
        <meta property="og:url" content="https://obsoletetecharchive.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="author" content="Obsolete Tech Archive Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f3eb" />

        {/* Open Graph enhancements */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Obsolete Tech Archive" />

        {/* Twitter Card enhancements */}
        <meta name="twitter:title" content="Obsolete Tech Archive" />
        <meta name="twitter:description" content="A digital museum exploring the forgotten gadgets and obsolete tech of yesteryear." />
        <meta name="twitter:image" content="/images/OT image.png" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f7f3eb' }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
