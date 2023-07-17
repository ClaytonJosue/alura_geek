import { createProduct } from "./data.js";

const imageInput = document.querySelector(".form__image--group input");
const categoryInput = document.querySelector(".form__category--group input");
const nameProductInput = document.querySelector(".form__product--group input");
const productPriceInput = document.querySelector(
  ".form__product_price--group input"
);
const form = document.querySelector(".add_product--content form");

const products = async () => {
  return await fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  products().then((data) => {
    let id = data.length + 1;
    createProduct(
      id,
      imageInput.value,
      categoryInput.value,
      nameProductInput.value,
      productPriceInput.value
    );
  });
});
