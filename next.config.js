module.exports = {
    swcMinify: true,
    images: {
        unoptimized: false,
        domains: [],
    },
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
