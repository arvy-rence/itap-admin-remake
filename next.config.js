/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/reports',
        permanent: true,
      },
    ]
  }
}
