export async function fetchProducts() {
  const res = await fetch("./product-data/data.json");
  return res.json();
}
