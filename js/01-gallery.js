// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemREf = document.querySelector(".gallery");
let itemLightbox = {};

galleryItemREf.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryItemREf.onclick = (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  itemLightbox = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="1200">
  `,
    {
      onClose: () => {
        window.removeEventListener("keydown", handlePressEscKey);
      },
      onShow: () => {
        window.addEventListener("keydown", handlePressEscKey);
      },
    }
  );
  itemLightbox.show();
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`;
    })
    .join("");
}

function handlePressEscKey(e) {
  if (e.code !== "Escape") {
    return;
  }
  itemLightbox.close();
}
