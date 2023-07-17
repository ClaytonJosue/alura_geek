export const getAllProducts = async () => {
  return await fetch(`http://localhost:3000/product`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
