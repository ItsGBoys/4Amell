let slideIndex = [0, 1, 3, 4];
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slideshow-item');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < slideIndex.length; i++) {
    slideIndex[i]++;
    if (slideIndex[i] > slides.length) {
      slideIndex[i] = 1;
    }
    slides[slideIndex[i] - 1].style.display = 'block';
  }
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toggleContainerBtn").addEventListener("click", function() {
    let container = document.getElementById("hiddenContainer");
    container.style.display = (container.style.display === "none" || container.style.display === "") ? "block" : "none";
  });
});
let backgroundMusic = document.getElementById('backgroundMusic');

// Mute audio saat halaman dimuat
backgroundMusic.muted = true;

// Callback saat tab aktif/non-aktif berubah
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // Tab aktif, aktifkan audio
    backgroundMusic.muted = false;
  } else {
    // Tab non-aktif, matikan audio
    backgroundMusic.muted = true;
  }
});

