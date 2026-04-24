let products = [
    { name: "Nivia Racket", price: 799, site: "Amazon", link: "https://amazon.in" },
    { name: "Yonex Racket", price: 899, site: "Flipkart", link: "https://flipkart.com" },
    { name: "Li-Ning Racket", price: 749, site: "Snapdeal", link: "https://snapdeal.com" }
];

let filtered = [...products];

function displayProducts() {
    const results = document.getElementById("results");
    results.innerHTML = "";

    filtered.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <p>${p.site}</p>
            ${index === 0 ? "<p style='color:green;'>Best Deal</p>" : ""}
            <a href="${p.link}" target="_blank">Buy</a>
        `;

        results.appendChild(card);
    });
}

// 🔍 Search FIX
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts();
});

// 🔽 Sort buttons FIX
document.getElementById("lowBtn").addEventListener("click", () => {
    filtered.sort((a, b) => a.price - b.price);
    displayProducts();
});

document.getElementById("highBtn").addEventListener("click", () => {
    filtered.sort((a, b) => b.price - a.price);
    displayProducts();
});

// 🔥 Initial load FIX
displayProducts();
