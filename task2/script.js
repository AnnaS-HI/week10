const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 7; // Номер начального изображения (week7_test.png) работает только с файлами с определенным именем, просто хотелось испробовать получится ли так

function updateGallery(index) {
  galleryImage.src = `./assets/image/week${index}_test.png`;
}


prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 7 ? 10 : currentIndex - 1; 
  updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 10 ? 7 : currentIndex + 1; 
  updateGallery(currentIndex);
});
