module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://wow-r0wf.onrender.com/api/:path*", // Proxy to Backend
      },
    ];
  },
};
