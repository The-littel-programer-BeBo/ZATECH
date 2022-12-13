// control nav in scroll
let lastScrollTop = 0,
    arrive = home.clientHeight;

window.addEventListener('scroll',()=>{
  // hide nav background in first 100vh
  let windowPosition = window.scrollY > nav.clientHeight;
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
window.addEventListener('load',animation())
  // animation sections function
  function animation(){
  ul.classList.remove('show')
  document.querySelectorAll('.move').forEach(sec=> {
    if(sec.getBoundingClientRect().top >=  -arrive/3.6 &&
      sec.getBoundingClientRect().top <= arrive/1.3) {
        sec.style.cssText = 'animation-play-state: running;';
    }
  })
}
bar.onclick=()=>{
  ul.classList.add('show')
  x.onclick=()=>{
    ul.classList.remove('show')
  }
}