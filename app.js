// loader animation
const time = () => {
  var a = 0;
  setInterval(() => {
    a = a + Math.floor(Math.random() * 20);
    if (a < 101) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 150);
};

time();
gsap.to("#loader h1", {
  scale: 1.5,
  delay: 0.5,
  duration: 1,
  onStart: time(),
});
// text and image animation
gsap.to("#loader", {
  top: "-100vh",
  duration: 1,
  delay: 2.2,
});
gsap.from(".navbar .left .image , .navbar .right ul,.navbar .btn", {
  y: -100,
  duration: 1,
  delay: 3,
  opacity: 0,
  stagger: 0.5,
});
gsap.from(".hero .head-text h1", {
  y: 100,
  delay: 3,
  opacity: 0,
  duration: 1,
});
gsap.from(".true .left .image", {
  x: -2000,
  delay: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".true",
    scroller: "body",
    // markers: "true",
    start: "-70% 30%",
    end: "top 10%",
    scrub: 2,
  },
});
gsap.from(".true .right", {
  y: 100,
  delay: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".true",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".community .icon-img .image", {
  y: 100,
  delay: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".community ",
    scroller: "body",
    // markers: "true",
    start: "10% 50%",
    end: "top 10%",
    scrub: 2,
  },
});
gsap.from(".head-text p", {
  y: 100,
  delay: 3,
  scrub: 2,
  opacity: 0,
});
gsap.from(".why-cont .cards .card1", {
  y: -100,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  rotation: 100,
  duration: 1,

  scrollTrigger: {
    trigger: ".out-img ",
    scroller: "body",
    // markers: "true",
    start: "-10% 50%",
    end: "top 10%",
    scrub: 2.5,
  },
});
// navbar js
var navicon = document.querySelector(".navbar i ");
var slideicon = document.querySelector("#iikon");
var bg = document.querySelector(".black-bg");
console.log(bg);
navicon.addEventListener("click", () => {
  bg.classList.toggle("active");
});
slideicon.addEventListener("click", () => {
  bg.classList.toggle("active");
});
