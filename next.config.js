/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard/reports',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/reports',
        permanent: false,
      },
    ]
  }
}
