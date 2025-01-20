const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Текущий индекс изображения
let currentIndex = 7; // Номер начального изображения (week7_test.png)

// Функция обновления изображения
function updateGallery(index) {
  galleryImage.src = `./assets/image/week${index}_test.png`;
}

// Обработчик кнопки "Назад"
prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 7 ? 10 : currentIndex - 1; // Возврат к последнему, если дошли до первого
  updateGallery(currentIndex);
});

// Обработчик кнопки "Вперёд"
nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 10 ? 7 : currentIndex + 1; // Возврат к первому, если дошли до последнего
  updateGallery(currentIndex);
});
