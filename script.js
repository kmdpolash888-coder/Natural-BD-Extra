const defaultProducts = [
    { id: 1, name: "খাঁটি মধু (Natural Honey)", price: "৫৫০ টাকা", desc: "বনের খাঁটি ও পুষ্টিসমৃদ্ধ মধু, ১ কেজি।", img: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "আয়ুর্বেদিক হেয়ার অয়েল", price: "৩৫০ টাকা", desc: "চুলের পুষ্টি ও চুল পড়া রোধে পরীক্ষিত ভেষজ তেল।", img: "https://images.unsplash.com/photo-1608248597359-f55c7075d5f2?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "হোমিওপ্যাথিক সুগার কেয়ার কিট", price: "৭৫০ টাকা", desc: "প্রাকৃতিক উপাদানে তৈরি স্বাস্থ্য সুরক্ষামূলক কিট।", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "মরিঙ্গা পাউডার (সজিনা পাতা)", price: "৪০০ টাকা", desc: "রোগ প্রতিরোধ ক্ষমতা বাড়াতে ১০০% অর্গানিক মরিঙ্গা পাউডার।", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" }
];

function getProducts() {
    const saved = localStorage.getItem('nbd_products');
    return saved ? JSON.parse(saved) : defaultProducts;
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    const products = getProducts();
    grid.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${p.img}')"></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="product-footer">
                    <span class="price">${p.price}</span>
                    <a href="https://wa.me/8801910532834?text=হ্যালো,%20আমি%20এই%20পণ্যটি%20অর্ডার%20করতে%20চাই:%0Aনাম:%20${encodeURIComponent(p.name)}%0Aদাম:%20${encodeURIComponent(p.price)}" target="_blank" class="order-wa-btn">
                        <i class="fa-brands fa-whatsapp"></i> অর্ডার করুন
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('searchInput')?.addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const products = getProducts();
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777;">কোনো পণ্য পাওয়া যায়নি।</p>';
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${p.img}')"></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="product-footer">
                    <span class="price">${p.price}</span>
                    <a href="https://wa.me/8801910532834?text=হ্যালো,%20আমি%20এই%20পণ্যটি%20অর্ডার%20করতে%20চাই:%0Aনাম:%20${encodeURIComponent(p.name)}%0Aদাম:%20${encodeURIComponent(p.price)}" target="_blank" class="order-wa-btn">
                        <i class="fa-brands fa-whatsapp"></i> অর্ডার করুন
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
});

window.onload = function() {
    renderProducts();
};
