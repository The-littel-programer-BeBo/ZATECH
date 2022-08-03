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
  document.querySelectorAll('.move').forEach(sec=> {
    if(sec.getBoundingClientRect().top >=  -arrive &&
        sec.getBoundingClientRect().top <= arrive) {
      sec.style.cssText = 'animation-play-state: running;';
    }
  })
})
// window.addEventListener('load',()=>{
// })
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}
// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);