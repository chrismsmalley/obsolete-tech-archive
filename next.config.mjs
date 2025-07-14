/** @type {import('next').NextConfig} */
const nextConfig = {
     async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/obsoletetecharchive.com',
        permanent: true,
      },
    ];
  },
};
//   output: 'export',

export default nextConfig;

