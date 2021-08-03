export const NewProducts = (() => {
    
let new_products = document.createElement("div");
  let product_div = document.createElement("div");
  product_div.style.backgroundColor = "#E0DFED";
  product_div.style.paddingBottom = "50px";
  product_div.setAttribute("id", "products")
    let h2 = document.createElement("h2");
    h2.textContent = "New Products";
    h2.style.textAlign = "center";
    h2.style.fontSize = "40px";
    h2.style.paddingTop = "30px";

    let section = document.createElement("section");
      let figure1 = document.createElement("figure");
        let product1 = document.createElement("img");
        product1.src = "images/NiemaBeauty.jpg";
        let caption1_a = document.createElement("figcaption");
        let caption1_b = document.createElement("figcaption");
        caption1_a.textContent = "Niema Beauty Skin Mist";
        caption1_a.style.fontSize = "21px"
        caption1_b.textContent = "R300,00";
      figure1.appendChild(product1);
      figure1.appendChild(caption1_a);
      figure1.appendChild(caption1_b);

      let figure2 = document.createElement("figure");
        let product2 = document.createElement("img");
        product2.src = "images/pic3.jpg";
        let caption2_a = document.createElement("figcaption");
        caption2_a.style.fontSize = "21px"
        let caption2_b = document.createElement("figcaption");
        caption2_a.textContent = "Wild Rising Skin Hydrate";
        caption2_b.textContent = "R320,00";
      figure2.appendChild(product2);
      figure2.appendChild(caption2_a);
      figure2.appendChild(caption2_b);

      let figure3 = document.createElement("figure");
        let product3 = document.createElement("img");
        product3.src = "images/pic4.png";
        let caption3_a = document.createElement("figcaption");
        caption3_a.style.fontSize = "21px"
        let caption3_b = document.createElement("figcaption");
        caption3_a.textContent = "Rosemary Facial Oil";
        caption3_b.textContent = "R270,00";
      figure3.appendChild(product3);
      figure3.appendChild(caption3_a);
      figure3.appendChild(caption3_b);

      let figure4 = document.createElement("figure");
        let product4 = document.createElement("img");
        product4.src = "images/Sioris-You-Are-My-Shining-Sunscreen-Default-Title.jpg";
        let caption4_a = document.createElement("figcaption");
        caption4_a.style.fontSize = "21px"
        let caption4_b = document.createElement("figcaption");
        caption4_a.textContent = "SIOFIS Daily Moisturiser";
        caption4_b.textContent = "R290,00";
      figure4.appendChild(product4);
      figure4.appendChild(caption4_a);
      figure4.appendChild(caption4_b);


      section.appendChild(figure1);
      section.appendChild(figure2);
      section.appendChild(figure3);
      section.appendChild(figure4);

  product_div.appendChild(h2);
  product_div.appendChild(section)

new_products.appendChild(product_div);

return {new_products}
})();