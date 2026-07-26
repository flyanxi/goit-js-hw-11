import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = form.elements["search-text"].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({ message: error.message });
    })
    .finally(() => {
      hideLoader();
    });
});