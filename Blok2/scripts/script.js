// JavaScript Document
console.log("hi");
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.getElementById('hamburger');
        const hamnav = document.querySelector('.hamnav');

        checkbox.addEventListener('change', function () {
            hamnav.style.display = checkbox.checked ? 'flex' : 'none';
        });
    });
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
    
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
