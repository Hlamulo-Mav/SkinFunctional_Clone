export const NewProducts = (() => {
    
let new_products = document.createElement("div");
  let product_div = document.createElement("div");
  product_div.style.backgroundColor = "#E0DFED";
  //product_div.style.margin = "0 -10px";
  product_div.style.paddingBottom = "50px";
  product_div.setAttribute("id", "products")
    let h2 = document.createElement("h2");
    h2.textContent = "New Products";
    h2.style.textAlign = "center";
    h2.style.fontSize = "40px";
    h2.style.paddingTop = "30px";

    let section = document.createElement("section");
      let product1 = document.createElement("img");
      product1.src = "images/NiemaBeauty.jpg";
      product1.classList.add("products");
      let product2 = document.createElement("img");
      product2.src = "images/pic3.jpg";
      product2.classList.add("products");
      let product3 = document.createElement("img");
      product3.src = "images/pic4.png";
      product3.classList.add("products");
      let product4 = document.createElement("img");
      product4.src = "images/Sioris-You-Are-My-Shining-Sunscreen-Default-Title.jpg";
      product4.classList.add("products");

      section.appendChild(product1);
      section.appendChild(product2);
      section.appendChild(product3);
      section.appendChild(product4);

  product_div.appendChild(h2);
  product_div.appendChild(section)

new_products.appendChild(product_div);

return {new_products}
})();