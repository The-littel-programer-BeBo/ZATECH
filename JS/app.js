// control nav in scroll
let lastScrollTop = 0,
    arrive = home.clientHeight/2;

window.addEventListener('scroll',()=>{
  // hide nav background in first 100vh
  let windowPosition = window.scrollY > home.clientHeight;
  nav.classList.toggle('nav-active',windowPosition)
  // hide nav in scroll down
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  if(scrollTop > lastScrollTop){
    nav.style.cssText = 'transform: translateY(-110%);'
  }else{
    nav.style.cssText = 'transform: translateY(0%);'
  }
  lastScrollTop = scrollTop;
  // play animation
  animation()
})
// animation sections function
function animation(){
  document.querySelectorAll('.move').forEach(sec=> {
    if(sec.getBoundingClientRect().top >=  -arrive &&
        sec.getBoundingClientRect().top <= arrive) {
      sec.style.cssText = 'animation-play-state: running;';
    }
  })
}
window.addEventListener('load',animation())