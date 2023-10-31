import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItemsBasic = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</div>`;
  })
  .join("");
gallery.innerHTML = galleryItemsBasic;
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const imageElem = e.target.classList.contains("gallery__image");
  if (!imageElem) return;
  createModalWindow(e);
});
function createModalWindow(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => {
        addEventListener("keydown", onEscapePress);
      },
      onClose: () => {
        removeEventListener("keydown", onEscapePress);
      },
    }
  );
  function onEscapePress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
