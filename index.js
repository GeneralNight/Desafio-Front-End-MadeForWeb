window.onload = function() {
    setTimelineHeight();
}

function setTimelineHeight() {
    var heightTimeline = document.getElementsByClassName("container-timeline")[0].offsetHeight;
    var heightTimelineItemImg = document.getElementsByClassName("img-level")[0].offsetHeight;
    document.getElementsByClassName("line")[0].style.height = (heightTimeline - (heightTimelineItemImg*0.75) ) +'px' ;
}


const slider = document.querySelector('.faculty-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});