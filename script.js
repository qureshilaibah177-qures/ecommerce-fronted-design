// Add basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.navbar input[type="text"]');
    searchInput.addEventListener('focus', () => {
        searchInput.style.border = '2px solid #ff6600';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.style.border = '1px solid #ccc';
    });
});
// Get all products
const products = document.querySelectorAll('.product');

// Set number of products per page
const productsPerPage = 6;

// Set current page
let currentPage = 1;

// Function to show products
function showProducts(page) {
  // Hide all products
  products.forEach((product) => {
    product.style.display = 'none';
  });

  // Show products for current page
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  for (let i = start; i < end; i++) {
    products[i].style.display = 'block';
  }
}

// Show products for current page
showProducts(currentPage);

// Add event listeners to pagination buttons
document.querySelectorAll('.pagination button').forEach((button) => {
  button.addEventListener('click', () => {
    // Get page number from button text
    const page = parseInt(button.textContent);
    showProducts(page);
  });
});