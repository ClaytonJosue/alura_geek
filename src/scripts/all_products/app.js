import { getAllProducts } from "./data.js";

const productList = document.querySelector(".products__list");

getAllProducts().then((data) => {
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
          <p class="products--id"># ${item.id}</p>
          <img src="/assets/icons/delete-icon.svg" class="delete_icon" alt="Delete Icon">
          <img src="/assets/icons/edit-icon.svg" class="edit_icon" alt="Edit Icon">
        </li>
      `;
    });
  }
  productList.innerHTML = list;
});
