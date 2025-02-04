const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://www.sellthetrend.com',
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['x-frame-options'] = 'ALLOWALL';
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Reverse Proxy running on port ${PORT}`);
});
