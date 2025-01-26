
// navbar
const menus = document.getElementById("menus");
const hambmenu = document.getElementById("hambmenu");

function openMenu() {
  menus.classList.toggle("hidden");
}

hambmenu.addEventListener("click", openMenu);

const min = document.getElementById("min");
const min1 = document.getElementById("min1");

function handleSize(e) {
  if (e.matches) {
    min.classList.remove("appear2");
    min.classList.add("app2");
    min1.classList.remove("appear2");
    min1.classList.add("app2");
  }
}
const mediaQ = window.matchMedia("(max-width:768px)");
handleSize(mediaQ);
mediaQ.addEventListener("change", handleSize);
// animations
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from("#logo", {
  y: -60,
  duration: 0.5,
});
tl.from("#navigate", {
  y: -60,
  duration: 0.5,
  stagger: 0.1,
});

const elements = ["#appear", "#appear1", ".appear2"];

const values = [".custom-cl"];

elements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    scale: 0,
    scrollTrigger: {
      trigger: element,
      scroll: "body",
      start: "top 100%",
      end: "top 70%",
      scrub: 2,
    },
  });
});
values.forEach((value) => {
  gsap.from(value, {
    opacity: 0,
    x: "-100%",
    scale: 0,
    scrollTrigger: {
      trigger: value,
      scroll: "body",
      start: "top 100%",
      end: "top 60%",
      scrub: 2,
    },
  });
});

gsap.from("#show", {
  opacity: 0,
  scale: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#show",
    scroll: "body",
    start: "top 100%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from(".app2", {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".app2",
    scroll: "body",
    start: "top 100%",
    end: "top 70%",
    scrub: 2,
  },
});
