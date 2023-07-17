export const createProduct = async (id, image, category, name, price) => {
  return await fetch(`http://localhost:3000/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, image, category, name, price }),
  });
};
