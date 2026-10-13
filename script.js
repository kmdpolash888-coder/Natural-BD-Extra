let cartCount = 0;

function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    alert(productName + ' কার্টে যোগ করা হয়েছে! (মূল্য: ৳ ' + price + ')');
}

function openCart() {
    alert('আপনার কার্টে ' + cartCount + 'টি পণ্য রয়েছে।');
}

function checkPassword() {
    let pass = document.getElementById('adminPass').value;
    if(pass === "admin123") {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('dashboardBox').style.display = 'block';
        alert('সফলভাবে লগইন হয়েছে!');
    } else {
        alert('ভুল পাসওয়ার্ড!');
    }
}

function addNewProduct() {
    let name = document.getElementById('newProdName').value;
    let price = document.getElementById('newProdPrice').value;
    if(name && price) {
        alert('"' + name + '" পণ্যটি সফলভাবে যুক্ত হয়েছে!');
    } else {
        alert('সব তথ্য পূরণ করুন।');
    }
}

function deleteProduct() {
    let name = document.getElementById('delProdName').value;
    if(name) {
        alert('"' + name + '" পণ্যটি মুছে ফেলা হয়েছে।');
    }
}
