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

// গোপন অ্যাডমিন প্যানেল সিকিউরিটি ফাংশন
function openAdminPanel() {
    let password = prompt("গোপন অ্যাডমিন প্যানেলে প্রবেশ করতে পাসওয়ার্ড দিন:");
    if (password === "admin123") {
        let action = prompt("অ্যাডমিন প্যানেল:\n1. নতুন পণ্য যোগ করুন\n2. পণ্য ডিলিট করুন\n\nনম্বরটি লিখুন (1 বা 2):");
        if(action === "1") {
            let pName = prompt("নতুন পণ্যের নাম লিখুন:");
            let pPrice = prompt("পণ্যের দাম লিখুন (টাকা):");
            if(pName && pPrice) {
                alert('সফলভাবে "' + pName + '" পণ্যটি যুক্ত করা হয়েছে!');
            }
        } else if(action === "2") {
            prompt("ডিলিট করতে চান এমন পণ্যের নাম বা আইডি লিখুন:");
            alert('পণ্যটি সফলভাবে মুছে ফেলা হয়েছে।');
        }
    } else if(password !== null) {
        alert("ভুল পাসওয়ার্ড! আপনার অ্যাক্সেস অস্বীকৃত হয়েছে।");
    }
}
