let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    alert(productName + ' কার্টে যোগ করা হয়েছে! (মূল্য: ৳ ' + price + ')');
}

function openCart() {
    alert('আপনার কার্টে ' + cartCount + 'টি পণ্য রয়েছে। অর্ডারের জন্য হোয়াটসঅ্যাপে যোগাযোগ করুন।');
}

function searchProduct() {
    let query = document.getElementById('searchInput').value;
    if(query.trim() !== "") {
        alert('"' + query + '" সম্পর্কিত পণ্য খোঁজা হচ্ছে...');
    } else {
        alert('দয়া করে অনুসন্ধানের জন্য কিছু লিখুন।');
    }
}

/* আলাদা অ্যাডমিন প্যানেল লগইন ও প্রোডাক্ট কন্ট্রোল */
function checkPassword() {
    let pass = document.getElementById('adminPass').value;
    if(pass === "admin123") {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('dashboardBox').style.display = 'block';
        alert('স্বাগতম! অ্যাডমিন প্যানেলে সফলভাবে প্রবেশ করেছেন।');
    } else {
        alert('ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।');
    }
}

function addNewProduct() {
    let name = document.getElementById('newProdName').value;
    let price = document.getElementById('newProdPrice').value;
    if(name && price) {
        alert('সফলভাবে "' + name + '" পণ্যটি সিস্টেমে যুক্ত করা হয়েছে!');
        document.getElementById('newProdName').value = '';
        document.getElementById('newProdPrice').value = '';
        document.getElementById('newProdImg').value = '';
    } else {
        alert('দয়া করে পণ্যের নাম ও দাম লিখুন।');
    }
}

function deleteProduct() {
    let name = document.getElementById('delProdName').value;
    if(name) {
        alert('"' + name + '" পণ্যটি সফলভাবে মুছে ফেলা হয়েছে।');
        document.getElementById('delProdName').value = '';
    } else {
        alert('যে পণ্যটি মুছতে চান তার নাম লিখুন।');
    }
}
