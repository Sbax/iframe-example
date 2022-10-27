const PROXY_CONFIG = {
  "/echo": {
    target: process.env.BASE_URL,
    secure: true,
    changeOrigin: true,
    pathRewrite: {
      "^/echo": "",
    },
    headers: { "X-AL-Environment-Access": "true" },
  },
  "/_next": {
    target: `${process.env.BASE_URL}/_next`,
    secure: true,
    changeOrigin: true,
    pathRewrite: {
      "^/_next": "",
    },
  },
  logLevel: "debug",
};

module.exports = PROXY_CONFIG;
