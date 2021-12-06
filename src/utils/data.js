export async function fetchProducts() {
  await sleep(getRandomInt(200, 2000));
  const res = await fetch("./product-data/data.json");
  return res.json();
}

export async function fetchMostPopularProducts() {
  await sleep(getRandomInt(200, 1000));
  const res = await fetch("./product-data/data.json");
  const data = await res.json();
  return data.sort((a, b) => b.sales - a.sales).slice(0, 4);
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
