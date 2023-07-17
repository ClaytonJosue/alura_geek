import { getProducts } from "./data.js";

const starWarsListContainer = document.querySelector(
  ".products--list-starwars"
);
const consoleListContainer = document.querySelector(".products--list-console");

// Star Wars
getProducts("StarWars").then((data) => {
  let list = "";
  if (data.length <= 0) {
    list = `<li>No results found</li>`;
  } else {
    data.forEach((item) => {
      list += `
        <li class="products--item" key="${item.id}">
          <img src="${item.image}" alt="Produto um" class="products--image">
          <p class="products--name">${item.name}</p>
          <p class="products--price">R$ <span>${item.price}</span>,00</p>
          <a href="#" class="products--link">Ver produto</a>
        </li>
      `;
    });
  }
  starWarsListContainer.innerHTML = list;
});

// Consoles
getProducts("Consoles").then((data) => {
  let list = "";
  if (data.length <= 0) {
    list = `<li>No results found</li>`;
  } else {
    data.forEach((item) => {
      list += `
        <li class="products--item" key="${item.id}">
          <img src="${item.image}" alt="Produto um" class="products--image">
          <p class="products--name">${item.name}</p>
          <p class="products--price">R$ <span>${item.price}</span>,00</p>
          <a href="#" class="products--link">Ver produto</a>
        </li>
      `;
    });
  }
  consoleListContainer.innerHTML = list;
});
