const getHomeShoes = async () => {
  const resp = await fetch('shoes.json'); 
  const data = await resp.json();
  const result = data.products.filter((shoe) => shoe.category === "home"); // Zmieniono find na filter
  return result;
};
const getBestSellersShoes = async () => {
  const resp = await fetch('shoes.json'); 
  const data = await resp.json();
  const result = data.products.filter((shoe) => shoe.category === "bestsellers"); // Zmieniono find na filter
  return result
}
const getKidsShoes = async () => {
  const resp = await fetch('shoes.json'); 
  const data = await resp.json();
  const result = data.products.filter((shoe) => shoe.category === "kids"); // Zmieniono find na filter
  return result
}
const getWinterShoes = async () => {
  const resp = await fetch('shoes.json'); 
  const data = await resp.json();
  const result = data.products.filter((shoe) => shoe.category === "winter"); // Zmieniono find na filter
  return result
}
  
  export default {
    getHomeShoes,
    getBestSellersShoes,
    getKidsShoes,
    getWinterShoes
  };
  