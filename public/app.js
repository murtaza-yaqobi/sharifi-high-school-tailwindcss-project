const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const btnTop = document.getElementById("btn-top");
const btn_Bottom = document.getElementById("btn-bottom");
const home = document.getElementById("home");
const images = ["./images/hero_2.jpg", "./images/hero_1.jpg"];

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// like section
const likeButtons = document.querySelectorAll(".like-btn");
for (let i = 0; i < likeButtons.length; i++) {
  const btn = likeButtons[i];
  const wrapper = btn.parentElement;
  const count = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "🤍";
      btn.dataset.liked = "false";
      count.textContent = "0";
    } else {
      btn.textContent = "❤️";
      btn.dataset.liked = "true";
      count.textContent = "1";
    }
  });
}
// counting about start
const h1s = document.querySelectorAll(".mb-3");

function countUp(el, target) {
  let current = 0;
  const increment = target / 100;

  const updateCount = () => {
    current += increment;
    if (current < target) {
      // round off
      // round up

      el.textContent = Math.ceil(current);
      requestAnimationFrame(updateCount);
      // setInterval(updateCount,0.01);
    } else {
      el.textContent = target;
    }
  };

  updateCount();
}

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-target");
        countUp(el, target);
        observer.unobserve(el); // Run only once
      }
    });
  },
  {
    threshold: 0.6,
  }
);

h1s.forEach((h1) => observer.observe(h1));

btnTop.addEventListener("click", () => {
  home.style.backgroundImage = `url(${images[0]})`;
  // index = (index + 1) % images.length;
  btn_Bottom.classList.remove("opacity-50");
  btn_Bottom.classList.add("opacity-10");
  btnTop.classList.remove("opacity-10");
  btnTop.classList.add("opacity-50");
});
btn_Bottom.addEventListener("click", () => {
  home.style.backgroundImage = `url(${images[1]})`;
  // index = (index + 1) % images.length;
  btnTop.classList.remove("opacity-50");
  btnTop.classList.add("opacity-10");
  btn_Bottom.classList.remove("opacity-10");
  btn_Bottom.classList.add("opacity-50");
});
