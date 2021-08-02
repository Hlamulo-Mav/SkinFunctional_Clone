export const NewProducts = (() => {
    let new_products = document.createElement("div");
  let product_div = document.createElement("div");
  product_div.style.backgroundColor = "#E0DFED";
  product_div.style.margin = "0 -10px";
    let h2 = document.createElement("h2");
    h2.textContent = "New Products";
    h2.style.textAlign = "center";
    h2.style.fontSize = "40px";
    h2.style.paddingTop = "30px";
    h2.style.paddingBottom = "50px";

    product_div.appendChild(h2);

new_products.appendChild(product_div);

return {new_products}
})();