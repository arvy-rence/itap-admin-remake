/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard/reports',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/reports',
        permanent: true,
      },
    ]
  }
}
