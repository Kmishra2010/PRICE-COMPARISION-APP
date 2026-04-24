class PriceComparisonApp {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentSort = 'price-asc';
        this.API_BASE = 'http://localhost:3000';
        
        this.elements = {
            searchInput: document.getElementById('searchInput'),
            searchLoading: document.getElementById('searchLoading'),
            totalProducts: document.getElementById('totalProducts'),
            productsGrid: document.getElementById('productsGrid'),
            emptyState: document.getElementById('emptyState'),
            sortBtns: document.querySelectorAll('.sort-btn'),
            bestDealToast: document.getElementById('bestDealToast')
        };

        this.init();
    }

    async init() {
        // Add event listeners
        this.elements.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
        this.elements.sortBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleSort(btn.dataset.sort));
        });

        // Load initial products
        await this.loadProducts();
        this.render();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    async loadProducts() {
        try {
            this.elements.searchLoading.style.display = 'flex';
            const response = await fetch(`${this.API_BASE}/products`);
            this.products = await response.json();
            this.filteredProducts = [...this.products];
        } catch (error) {
            console.error('Failed to load products:', error);
            // Fallback to mock data
            this.products = MOCK_PRODUCTS;
            this.filteredProducts = [...this.products];
        } finally {
            this.elements.searchLoading.style.display = 'none';
        }
    }

    handleSearch() {
        const query = this.elements.searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.platform.toLowerCase().includes(query)
            );
        }

        this.sortProducts();
        this.render();
    }

    handleSort(sortType) {
        this.currentSort = sortType;
        
        // Update active button
        this.elements.sortBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-sort="${sortType}"]`).classList.add('active');
        
        this.sortProducts();
        this.render();
    }

    sortProducts() {
        const sorted = [...this.filteredProducts];
        
        if (this.currentSort === 'price-asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else {
            sorted.sort((a, b) => b.price - a.price);
        }
        
        this.filteredProducts = sorted;
    }

    render() {
        const total = this.filteredProducts.length;
        this.elements.totalProducts.textContent = total;
        
        if (total === 0) {
            this.elements.emptyState.style.display = 'block';
            this.elements.productsGrid.innerHTML = '';
            return;
        }

        this.elements.emptyState.style.display = 'none';
        this.renderProducts();
    }

    renderProducts() {
        const fragment = document.createDocumentFragment();
        const cheapestPrice = Math.min(...this.filteredProducts.map(p => p.price));
        
        this.filteredProducts.forEach((product, index) => {
            const isCheapest = product.price === cheapestPrice;
            const card = this.createProductCard(product, isCheapest, index);
            fragment.appendChild(card);
        });

        this.elements.productsGrid.innerHTML = '';
        this.elements.productsGrid.appendChild(fragment);

        // Show best deal toast if we have products
        if (this.filteredProducts.length > 0 && cheapestPrice > 0) {
            this.showBestDealToast(cheapestPrice);
        }
    }

    createProductCard(product, isCheapest, index) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const platformClass = `platform-${product.platform.toLowerCase()}`;
        
        card.innerHTML = `
            ${isCheapest ? `<div class="best-deal-badge">🥇 BEST DEAL</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.style.display='none'">
            <div class="product-content">
                <div class="platform-badge ${platformClass}">
                    <i class="fas fa-${this.getPlatformIcon(product.platform)}"></i>
                    ${product.platform}
                </div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <button class="buy-btn" onclick="window.open('${product.link}', '_blank')">
                    <i class="fas fa-shopping-cart"></i>
                    Buy Now
                </button>
            </div>
        `;
        
        return card;
    }

    getPlatformIcon(platform) {
        const icons = {
            'Amazon': 'truck',
            'Flipkart': 'store',
            'Myntra': 'tshirt'
        };
        return icons[platform] || 'globe';
    }

    showBestDealToast(price) {
        const toast = this.elements.bestDealToast;
        toast.innerHTML = `<i class="fas fa-crown"></i><span
