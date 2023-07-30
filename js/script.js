// Funkcja do wczytania wszystkich obrazów używanych jako tło
function preloadImages(images, callback) {
  let loadedImages = 0;

  // Helper function do zliczania załadowanych obrazów
  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      callback();
    }
  }

  images.forEach((image) => {
    const img = new Image();
    img.onload = imageLoaded;
    img.src = image;
  });
}

// Funkcja zmiany tła i tekstu nagłówka na podstawie indeksu
function changeBackgroundAndTitleByIndex(index) {
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko54.webp',
    'img/uzdrovisko57.webp',
  ];

  const titles = [
    'Prowadzimy pacjentów przez drogę do zdrowia',
    'Pomożemy Ci znaleźć zdrowie',
    'Powrót do zdrowia to powrót do życia w komforcie',
  ];

  if (index >= 0 && index < images.length) {
    // Zmiana tła
    document.querySelector('.background-container').style.backgroundImage = `url(${images[index]})`;

    // Zmiana tekstu nagłówka
    document.querySelector('.section-title').textContent = titles[index];

    // Aktualizacja paginacji
    const pageIndicators = document.querySelectorAll('.page-indicator');
    pageIndicators.forEach((indicator, idx) => {
      indicator.classList.toggle('active', idx === index);
    });
  }
}

// Funkcja zmiany tła i tekstu nagłówka
function changeBackgroundAndTitle() {
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko54.webp',
    'img/uzdrovisko57.webp',
  ];

  const titles = [
    'Pierwszy tekst nagłówka',
    'Drugi tekst nagłówka',
    'Trzeci tekst nagłówka',
  ];

  let currentImageIndex = 0;

  function setNextBackgroundAndTitle() {
    // Zmiana tła i tekstu nagłówka za pomocą indeksu
    changeBackgroundAndTitleByIndex(currentImageIndex);

    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(setNextBackgroundAndTitle, 7000); // Zmiana co 7 sekund
  }

  setNextBackgroundAndTitle();
}

// Obsługa kliknięć w kropki paginacji
document.addEventListener('DOMContentLoaded', () => {
  const pageIndicators = document.querySelectorAll('.page-indicator');
  pageIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => changeBackgroundAndTitleByIndex(index));
  });
});

// Wywołanie funkcji po załadowaniu strony i wczytaniu obrazów
window.addEventListener('load', () => {
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko54.webp',
    'img/uzdrovisko57.webp',
  ];

  preloadImages(images, changeBackgroundAndTitle);
});

// ... (twój istniejący kod JavaScript) ...











var currentMemberIndex = 0;
var teamMembers = document.getElementsByClassName('team-member');
var memberDescs = document.getElementsByClassName('member-desc');
var selectedMemberImg = document.getElementById('selected-member-img');

// Funkcja wyświetlająca dane wybranego członka zespołu
function showMember(index) {
  currentMemberIndex = index;

  for (var i = 0; i < teamMembers.length; i++) {
    teamMembers[i].classList.remove('active');
  }
  teamMembers[index].classList.add('active');

  for (var i = 0; i < memberDescs.length; i++) {
    memberDescs[i].style.display = 'none';
  }
  memberDescs[index].style.display = 'block';

  // Zmiana zdjęcia na inne
  var imagePath = 'img/worker' + (index + 1) + '.webp';
  selectedMemberImg.src = imagePath;
}

// Funkcja dla strzałki w lewo
function previousMember() {
  currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
  showMember(currentMemberIndex);
}

// Funkcja dla strzałki w prawo
function nextMember() {
  currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
  showMember(currentMemberIndex);
}

// Wyświetl domyślnego członka zespołu
showMember(currentMemberIndex);

  





function openImage(imageSrc) {
  var overlay = document.getElementById("overlay");
  var overlayImg = document.getElementById("overlay-img");
  
  overlayImg.src = imageSrc;
  overlay.classList.add("active");
}

function closeImage() {
  var overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520:{
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
});



var currentBox = null;
    
        function toggleBox(boxIndex) {
  var box = document.getElementById('box' + boxIndex);
  var button = document.getElementsByClassName('custom-button')[boxIndex - 1];
  var arrow = button.querySelector('.custom-button-arrow');

  if (box.classList.contains('expanded')) {
    // Zamykanie boxa
    box.style.maxHeight = '0';
    button.classList.remove('custom-button-expanded');
    arrow.style.transform = 'rotate(0deg)';
    box.classList.remove('expanded');
  } else {
    // Zamykanie otwartego boxa, jeśli istnieje
    if (currentBox !== null && currentBox !== box) {
      currentBox.style.maxHeight = '0';
      currentBox.previousElementSibling.classList.remove('custom-button-expanded');
      currentBox.previousElementSibling.querySelector('.custom-button-arrow').style.transform = 'rotate(0deg)';
      currentBox.classList.remove('expanded');
    }

    // Otwieranie aktualnego boxa
    box.style.maxHeight = box.scrollHeight + 'px';
    button.classList.add('custom-button-expanded');
    arrow.style.transform = 'rotate(180deg)';
    box.classList.add('expanded');
    currentBox = box;
  }
}



        
        function lastSingleLetterToNewLine(el){
            let result;
            el.forEach((element, i)=>{
                
                if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
                result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp;");
                }
                element.innerHTML = result;
                console.log(result);
            });
            }

            let el = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, .text");
            lastSingleLetterToNewLine(el);

            function scrollToSectionById(sectionId) {
              const section = document.getElementById(sectionId);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }
            
            function scrollToSection(event, sectionId) {
              event.preventDefault();
            
              const section = document.getElementById(sectionId);
              section.scrollIntoView({ behavior: 'smooth' });
            }
            



            

                        