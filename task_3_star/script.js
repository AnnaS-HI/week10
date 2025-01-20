document.querySelectorAll('.image-item').forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('selected'); 
    });
  });
  
  // Функция чтобы узнать общую стоимость
  function calculateTotalPrice(defaultQuantity = 2, defaultPrice = 15000000) {
    const selectedImages = document.querySelectorAll('.image-item.selected'); 
    let totalPrice = 0;
  
    if (selectedImages.length > 0) {
      selectedImages.forEach(image => {
        const price = parseFloat(image.getAttribute('data-price')); 
        totalPrice += price;
      });
    } else {
      totalPrice = defaultQuantity * defaultPrice;
    }
    return totalPrice; 
  }
  
    // Функция для манипуляции над стоимостью
  function updateTotal() {
    const total = calculateTotalPrice(); 
    const formattedTotal = total.toLocaleString('ru-RU'); 
    document.getElementById('totalPrice').textContent = formattedTotal; 
    alert(`Стоимость покупки: ${formattedTotal} рублей`); 
  }
  