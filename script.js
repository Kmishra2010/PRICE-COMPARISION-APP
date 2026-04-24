function searchProduct() {
    let results = document.getElementById("results");

    let products = [
        {
            name: "Nivia Racket",
            price: 799,
            site: "Amazon",
            link: "#"
        },
        {
            name: "Yonex Racket",
            price: 899,
            site: "Flipkart",
            link: "#"
        },
        {
            name: "Li-Ning Racket",
            price: 750,
            site: "Snapdeal",
            link: "#"
        }
    ];

    results.innerHTML = "";

    products.sort((a, b) => a.price - b.price);

    products.forEach(p => {
        results.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <p>Site: ${p.site}</p>
                <a href="${p.link}" target="_blank">Buy Now</a>
            </div>
        `;
    });
}
