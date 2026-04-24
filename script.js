let products = [
    {
        name: "Nivia Carbonite 2.0",
        price: 799,
        site: "Amazon",
        link: "#"
    },
    {
        name: "Yonex GR 303",
        price: 899,
        site: "Flipkart",
        link: "#"
    },
    {
        name: "Li-Ning XP 70",
        price: 749,
        site: "Snapdeal",
        link: "#"
    }
];

let filtered = [...products];

function displayProducts() {
    let results = document.getElementById("results");
    results.innerHTML = "";

    filtered.sort((a, b) => a.price - b.price);

    filtered.forEach((p, index) => {
        results.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>${p.site}</p>
                ${index === 0 ? '<p class="best">🔥 Best Deal</p>' : ''}
                <a href="${p.link}" target="_blank">Buy Now</a>
            </div>
        `;
    });
}

document.getElementById("searchInput").addEventListener("input", function() {
    let value = this.value.toLowerCase();

    filtered = products.filter(p => 
        p.name.toLowerCase().includes(value)
    );

    displayProducts();
});

function sortLow() {
    filtered.sort((a, b) => a.price - b.price);
    displayProducts();
}

function sortHigh() {
    filtered.sort((a, b) => b.price - a.price);
    displayProducts();
}

// Load initial
displayProducts();
