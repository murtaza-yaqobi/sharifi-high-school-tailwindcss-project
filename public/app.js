const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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
