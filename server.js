const express = require('express');
const cors = require('cors');
const { MOCK_PRODUCTS } = require('./data.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/products', (req, res) => {
    const { q } = req.query;
    
    if (q) {
        // Search functionality
        const searchTerm = q.toLowerCase();
        const filtered = MOCK_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.platform.toLowerCase().includes(searchTerm)
        );
        return res.json(filtered);
    }
    
    // Return all products
    res.json(MOCK_PRODUCTS);
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`🚀 PricePulse API Server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🔍 Search endpoint: http://localhost:${PORT}/products?q=iphone`);
});
