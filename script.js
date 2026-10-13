let clickCount = 0;
let cartCount = 0;

// সিক্রেট এডমিন প্যানেলের জন্য ফুটারের লেখার ওপর ২৫ বার ক্লিক কাউন্ট
function triggerAdminModal() {
    clickCount++;
    if (clickCount >= 25) {
        clickCount = 0;
        document.getElementById('secretAdminModal').style.display = 'flex';
    }
}

function closeAdminModal() {
    document.getElementById('secretAdminModal').style.display = 'none';
}

// কম্বো প্যাকেজ হোয়াটসঅ্যাপ অর্ডার (সঠিক অফার মূল্য ৳ ৩,৫০০ সহ)
function orderComboWhatsApp() {
    let message = "আসসালামু আলাইকুম, আমি স্পেশাল কম্বো প্যাকেজটি (অফার মূল্য: ৳ ৩,৫০০) অর্ডার করতে চাই।\nদয়া করে আমার অর্ডারটি কনফার্ম করুন।";
    let whatsappUrl = "https://wa.me/8801910532834?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

// কার্ট ডিটেলস ওপেন
function openCartDetails() {
    document.getElementById('orderModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// কার্ট থেকে হোয়াটসঅ্যাপে অর্ডার পাঠানো
function sendOrderToWhatsApp() {
    let details = document.getElementById('customerDetails').value;
    if(details.trim() === "") {
        alert("দয়া করে আপনার নাম, ঠিকানা ও মোবাইল নম্বর লিখুন।");
        return;
    }
    let message = "নতুন অর্ডার বিবরণ:\n" + details;
    let whatsappUrl = "https://wa.me/8801910532834?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
    closeModal();
}

// গ্যালারি থেকে ছবি আপলোড করে সাইটে যুক্ত করা (নির্দিষ্ট সাইজ ছাড়াই)
function saveNewProduct() {
    let name = document.getElementById('adminProdName').value;
    let price = document.getElementById('adminProdPrice').value;
    let imageInput = document.getElementById('adminProdImage');

    if(name && price && imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageUrl = e.target.result;
            
            let grid = document.getElementById('dynamicProductGrid');
            let card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${imageUrl}" alt="Product">
                <h3>${name}</h3>
                <p class="price">৳ ${price}</p>
                <button onclick="addToCartAndOrder('${name}', '${price}')">অর্ডার করুন</button>
            `;
            grid.appendChild(card);
            
            alert('সফলভাবে পণ্যটি প্রকাশিত হয়েছে!');
            closeAdminModal();
            
            document.getElementById('adminProdName').value = '';
            document.getElementById('adminProdPrice').value = '';
            document.getElementById('adminProdImage').value = '';
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert("দয়া করে সব তথ্য এবং ছবি দিন।");
    }
}

function addToCartAndOrder(productName, price) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    let message = "হ্যালো, আমি এই পণ্যটি কিনতে চাই:\nপণ্যের নাম: " + productName + "\nমূল্য: ৳ " + price;
    let whatsappUrl = "https://wa.me/8801910532834?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

function uploadProductDirect() {
    let name = document.getElementById('pName').value;
    let price = document.getElementById('pPrice').value;
    let imageInput = document.getElementById('pImage');

    if(name && price && imageInput.files && imageInput.files[0]) {
        alert("পণ্য সফলভাবে সেভ হয়েছে!");
        document.getElementById('pName').value = '';
        document.getElementById('pPrice').value = '';
        document.getElementById('pImage').value = '';
    } else {
        alert("সকল তথ্য ও ছবি পূরণ করুন।");
    }
}
