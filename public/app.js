const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const btnTop = document.getElementById("btn-top");
const btn_Bottom = document.getElementById("btn-bottom");
const home = document.getElementById("home");
const images = ["./images/hero_2.jpg", "./images/hero_1.jpg"];

// discount
const discountInputName = document.getElementById("discountInputName");
const discountInputEmail = document.getElementById("discountInputEmail");
const discountSignUpBtn = document.getElementById("discountSignUpBtn");
const discountShowResult = document.getElementById("discountShowResult");

// newsletter
const inputNewsLetter = document.getElementById("inputNewsLetter");
const newsLetterBtn = document.getElementById("newsLetterBtn");
const massegNewsletter = document.getElementById("massegNewsletter");
newsLetterBtn.addEventListener("click", () => {
  const inputNewsLetterValue = inputNewsLetter.value;
  if (inputNewsLetterValue.length === 0) {
    massegNewsletter.textContent = "You don't enter your email";

    setTimeout(() => {
      massegNewsletter.textContent = "";
    }, 4000);
  } else if (
    !inputNewsLetterValue.includes("@") ||
    (!inputNewsLetterValue.includes(".com") &&
      !inputNewsLetterValue.includes(".outlook"))
  ) {
    massegNewsletter.textContent =
      "Your email must includes '@' and '.com' or '.outlook'";
    setTimeout(() => {
      massegNewsletter.textContent = "";
    }, 4000);
  } else {
    massegNewsletter.textContent = "Succusfuly Sign up";
    setTimeout(() => {
      massegNewsletter.textContent = "";
    }, 4000);
  }
});

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
        observer.unobserve(el);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

h1s.forEach((h1) => observer.observe(h1));

// hero section
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

// discount section
discountSignUpBtn.addEventListener("click", () => {
  const discountInputNameValue = discountInputName.value;
  if (discountInputNameValue.length === 0) {
    discountSignUpBtn.classList.add("bg-red-700");
    discountSignUpBtn.classList.remove("hover:bg-blue-900");
    discountShowResult.textContent = "Enter your Name plase";
    setTimeout(() => {
      discountShowResult.textContent = "";
      discountSignUpBtn.classList.remove("bg-red-700");
      discountSignUpBtn.classList.add("hover:bg-blue-900");
    }, 4000);
  } else if (
    discountInputNameValue.length > 10 ||
    discountInputNameValue.length < 3
  ) {
    discountShowResult.textContent = "Your name must be bettwen 3-10";
    discountSignUpBtn.classList.add("bg-red-700");
    discountSignUpBtn.classList.remove("hover:bg-blue-900");
    setTimeout(() => {
      discountShowResult.textContent = "";
      discountSignUpBtn.classList.remove("bg-red-700");
      discountSignUpBtn.classList.add("hover:bg-blue-900");
    }, 4000);
  } else {
    discountShowResult.textContent = "Succsufuly you got discount";
    discountSignUpBtn.classList.add("bg-green-700");
    discountSignUpBtn.classList.remove("hover:bg-blue-900");
    setTimeout(() => {
      discountShowResult.textContent = "";
      discountSignUpBtn.classList.remove("bg-green-700");
      discountSignUpBtn.classList.add("hover:bg-blue-900");
    }, 4000);
  }
  const discountInputEmailValue = discountInputEmail.value;
  if (discountInputEmailValue.length === 0) {
    discountSignUpBtn.classList.add("bg-red-700");
    discountSignUpBtn.classList.remove("hover:bg-blue-900");
    discountShowResult.textContent = "Enter your Email plase";
    setTimeout(() => {
      discountShowResult.textContent = "";
      discountSignUpBtn.classList.remove("bg-red-700");
      discountSignUpBtn.classList.add("hover:bg-blue-900");
    }, 4000);
  } else if (
    !discountInputEmailValue.includes("@") ||
    (!discountInputEmailValue.includes(".com") &&
      !discountInputEmailValue.includes(".outlook"))
  ) {
    discountSignUpBtn.classList.add("bg-red-700");
    discountSignUpBtn.classList.remove("hover:bg-blue-900");
    discountShowResult.textContent = "Your email must include '@' and '.com'";
    setTimeout(() => {
      discountShowResult.textContent = "";
      discountSignUpBtn.classList.remove("bg-red-700");
      discountSignUpBtn.classList.add("hover:bg-blue-900");
    }, 4000);
  }
});
