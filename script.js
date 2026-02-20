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