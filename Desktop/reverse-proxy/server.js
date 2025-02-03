const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// إعداد الوكيل العكسي
app.use('/', createProxyMiddleware({
    target: 'https://sellthetrend.com', // استبدل هذا بالموقع الذي تريد إعادة توجيه الطلبات إليه
    changeOrigin: true,
    secure: false,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔗 Proxy Server is running on port ${PORT}`);
});
