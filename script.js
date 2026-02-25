// Function to show products 
function showProducts(page) { 
const products = document.querySelectorAll('.product'); 
const productsPerPage = 6; // adjust this value as needed 

// Hide all products 
products.forEach((product) => { 
product.style.display = 'none'; 
}); 

// Show products for current page 
const start = (page - 1) * productsPerPage; 
const end = start + productsPerPage; 
for (let i = start; i < end; i++) { 
if (products[i]) { 
products[i].style.display = 'block'; 
} 
} 
} 

// Initial page 
let currentPage = 1; 
showProducts(currentPage); 

// Add event listeners to pagination buttons 
document.querySelectorAll('.pagination button').forEach((button) => { 
button.addEventListener('click', () => { 
// Get page number from button text 
if (button.textContent === 'Next') { 
currentPage++; 
} else { 
currentPage = parseInt(button.textContent); 
} 
showProducts(currentPage); 
}); 
});
// Add to Cart functionality
document.querySelectorAll('.product button, .product-details button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
    // Add logic to update cart count or send data to backend
  });
});

// Search bar placeholder
const searchInput = document.querySelector('.navbar input[type="text"]');
searchInput.addEventListener('focus', () => {
  searchInput.placeholder = 'Type to search...';
});
function updateQuantity(change) {
  const input = document.querySelector('.qty-input');
  let qty = parseInt(input.value);
  qty += change;
  if (qty < 1) qty = 1;
  input.value = qty;
  // Update total price logic here
}
function updateQuantity(change, element) {
  const input = element.closest('.quantity').querySelector('.qty-input');
  let qty = parseInt(input.value);
  qty += change;
  if (qty < 1) qty = 1;
  input.value = qty;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseInt(item.querySelector('p').textContent.replace('Rs. ', '')) || 0;
    const qty = parseInt(item.querySelector('.qty-input').value) || 1;
    total += price * qty;
  });
  document.querySelector('.cart-total h3').textContent = `Total: Rs. ${total}`;
}
document.querySelectorAll('.cart-item button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.cart-item').remove();
    updateTotal();
  });
});