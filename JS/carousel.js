const track = document.querySelector('.two-col-promo__image-carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.two-col-promo__right-arrow--dark');
const prevButton = document.querySelector('.two-col-promo__left-arrow--dark');

// console.log(slides);


// const slideWidth = slideSize.width;

// console.log(slideWidth);

// Arrange slides next to one another

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// Loop below does the three lines above automatically

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);



// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// });



// setInterval(autoMoveSlide(track, ))

// autoMoveSlide();

// when I click right, move slides to the right

const moveRightOnClick = (track, currentSlide, targetSlide) => {

  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');

  // var amountToMoveLeft = track.querySelector('.current-slide').previousSibling.style.left;
  // current
}

// When click left, move slides to the left

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const previousSlide = currentSlide.previousElementSibling;

  moveRightOnClick(track, currentSlide, previousSlide);
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  // const amountToMove = nextSlide.style.left;

  // move to the next slide

  // console.log(amountToMove);

  // track.style.transform = 'translateX(-' + amountToMove + ')';
  // currentSlide.classList.remove('current-slide');
  // nextSlide.classList.add('current-slide');

  moveRightOnClick(track, currentSlide, nextSlide);

  console.log('click');

});

// function autoMoveSlide() {

//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
//   timeToMove = 
// }



// setInterval(moveRightOnClick(track, currentSlide, targetSlide) {
//   const currentSlide = track.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
// }, 3000);

// setInterval(function(){ alert("Hello"); }, 3000);

// When I click the nav indicators, move to that slide




// function autoMoveSlide(track, currentSlide, targetSlide) {

  // track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  // currentSlide.classList.remove('current-slide');
  // targetSlide.classList.add('current-slide');

  // const trackMate = document.querySelector('.two-col-promo__image-carousel-track');
  // var currentSlide = trackMate.querySelector('.current-slide');
  // var target = currentSlide.nextElementSibling;

  // trackMate.style.transform = 'translateX(-' + target.style.left + ')';
  // currentSlide.classList.remove('current-slide');
  // target.classList.add('current-slide');

  // setInterval(autoMoveSlide(track, currentSlide, targetSlide), 3000);

  // setInterval(function () {
  //   console.log('It is me');
  // }, 1000);

  // setInterval(autoMoveSlide(track, currentSlide, target), 2000);
// }

// setInterval(autoMoveSlide(), 2000);
