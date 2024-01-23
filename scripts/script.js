// JavaScript Document
console.log("hi");
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.getElementById('hamburger');
        const hamnav = document.querySelector('.hamnav');

        checkbox.addEventListener('change', function () {
            hamnav.style.display = checkbox.checked ? 'flex' : 'none';
        });
    });

  // animatie over de dopperproduct
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
    
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

      //gpt : forEach-methode voert actie uit voor elk element in de productItems. 