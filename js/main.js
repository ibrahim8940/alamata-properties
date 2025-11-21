document.addEventListener("DOMContentLoaded", () => {
  // ---------------- NAVBAR TOGGLE ----------------
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }

  // ---------------- MODAL HANDLER ----------------
  const grid = document.getElementById("properties-grid");
  const modalBack = document.getElementById("modal-back");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalLocation = document.getElementById("modal-location");
  const modalPrice = document.getElementById("modal-price");
  const modalDesc = document.getElementById("modal-desc");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.getElementById("modal-close");

  if (grid) {
    grid.addEventListener("click", (e) => {
      const a = e.target.closest(".card-link");
      if (!a) return;

      if (e.ctrlKey || e.metaKey || e.button === 1) return; // allow new-tab click
      e.preventDefault();

      modalTitle.textContent = a.dataset.title || "Listing";
      modalPrice.textContent = a.dataset.price || "";
      modalLocation.textContent = a.dataset.location || "";
      modalDesc.textContent = a.dataset.desc || "";
      modalImage.src = a.dataset.image || "";
      modalImage.alt = a.dataset.title || "";
      modalLink.href = a.href;

      modalBack.style.display = "flex";
      modalBack.setAttribute("aria-hidden", "false");
      modalClose.focus();
    });
  }

  function closeModal() {
    modalBack.style.display = "none";
    modalBack.setAttribute("aria-hidden", "true");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);

  if (modalBack) {
    modalBack.addEventListener("click", (e) => {
      if (e.target === modalBack) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBack.style.display === "flex") closeModal();
  });

  // ---------------- SCROLL ANIMATION ----------------
  const elements = document.querySelectorAll(".scroll-anim");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // animate in
        } else {
          entry.target.classList.remove("show"); // animate on re-scroll
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
});
