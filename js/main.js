const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

(function () {
  const grid = document.getElementById("properties-grid");
  const modalBack = document.getElementById("modal-back");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalLocation = document.getElementById("modal-location");
  const modalPrice = document.getElementById("modal-price");
  const modalDesc = document.getElementById("modal-desc");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.getElementById("modal-close");

  // click handler - if user holds Ctrl/Meta or clicks with middle button we let default navigation happen
  grid.addEventListener("click", (e) => {
    const a = e.target.closest(".card-link");
    if (!a) return;
    // if user wants to open in new tab -> let default
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    // prevent navigation to listing page and open modal instead
    e.preventDefault();

    // read data attributes
    const title = a.dataset.title || "Listing";
    const price = a.dataset.price || "";
    const location = a.dataset.location || "";
    const image = a.dataset.image || "";
    const desc = a.dataset.desc || "";
    const href = a.getAttribute("href") || "#";

    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalLocation.textContent = location;
    modalDesc.textContent = desc;
    modalImage.src = image;
    modalImage.alt = title;
    modalLink.href = href;

    // show modal
    modalBack.style.display = "flex";
    modalBack.setAttribute("aria-hidden", "false");

    // trap focus (simple)
    modalClose.focus();
  });

  // close helpers
  function closeModal() {
    modalBack.style.display = "none";
    modalBack.setAttribute("aria-hidden", "true");
  }

  modalClose.addEventListener("click", closeModal);
  modalBack.addEventListener("click", (e) => {
    if (e.target === modalBack) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBack.style.display === "flex") closeModal();
  });
})();
