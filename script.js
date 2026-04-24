* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #10b981;
    --accent: #f59e0b;
    --danger: #ef4444;
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border: #e2e8f0;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: var(--bg-secondary);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary);
}

.logo i {
    font-size: 2rem;
}

.search-container {
    flex: 1;
    max-width: 600px;
}

.search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3.5rem;
    border: 2px solid var(--border);
    border-radius: var(--radius);
    font-size: 1rem;
    transition: var(--transition);
    background: var(--bg-secondary);
}

.search-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgb(99 102 241 / 0.1);
}

.search-icon {
    position: absolute;
    left: 1rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.search-loading {
    position: absolute;
    right: 1rem;
    display: none;
}

.spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border);
    border-top: 2px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Stats & Sorting */
.stats-sorting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.stats {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
}

.sorting {
    display: flex;
    gap: 0.5rem;
}

.sort-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.sort-btn:hover {
    border-color: var(--primary);
    background: rgb(99 102 241 / 0.05);
}

.sort-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* Results */
.results-container {
    min-height: 400px;
}

.empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-secondary);
}

.empty-state i {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    opacity: 0.5;
}

.empty-state h3 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

/* Product Card */
.product-card {
    background: var(--bg-secondary);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.6s ease forwards;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
}

.product-content {
    padding: 1.5rem;
}

.platform-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: var(--bg-primary);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.platform-amazon { color: #ff9900; }
.platform-flipkart { color: #2874f0; }
.platform-myntra { color: #ff3f6c; }

.product-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    color: var(--text-primary);
}

.product-price {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--secondary);
    margin-bottom: 1rem;
}

.best-deal-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--secondary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-size: 0.85rem;
    font-weight: 700;
    box-shadow: var(--shadow-md);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.buy-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    border: none;
    border-radius: var(--radius);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.buy-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* Toast */
.toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--secondary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    box-shadow: var(--shadow-lg);
    transform: translateX(400px);
    opacity: 0;
    transition: var(--transition);
    z-index: 1000;
}

.toast.show {
    transform: translateX(0);
    opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .stats-sorting {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
    
    .sorting {
        justify-content: center;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .stats {
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .product-content {
        padding: 1.25rem;
    }
}
