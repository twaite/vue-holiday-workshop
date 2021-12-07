import data from "@/assets/product-data.json";

export async function fetchProducts() {
  await sleep(getRandomInt(200, 2000));
  return data;
}

export async function fetchMostPopularProducts() {
  await sleep(getRandomInt(200, 1000));
  return data.sort((a, b) => b.sales - a.sales).slice(0, 4);
}

export async function fetchProductById(id) {
  await sleep(getRandomInt(200, 1000));
  return data.find((p) => p.id === Number(id));
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
