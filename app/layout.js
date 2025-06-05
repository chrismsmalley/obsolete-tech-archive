import './globals.css';
import Navbar from './src/components/header/navbar';
import Footer from './src/components/footer/footer';

export const metadata = {
  title: 'Obsolete Tech Archive',
  description: 'A digital museum of forgotten technology',
  icons: {
    icon: '/images/OT image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-y7A6GONAAiY+1YHHe4tkaLTKuxh2vI+ksAEzAqlUwZebghY6vUJxU5TW4WrEpzGvXtF+Tx09mfB1AmSxyAhJgA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f7f3eb', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
