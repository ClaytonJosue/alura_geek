export const getProducts = async (category) => {
  return await fetch(`http://localhost:3000/product?category=${category}`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
