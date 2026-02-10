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