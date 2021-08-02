export const ShopBy = (() => {

let shop_div = document.createElement("div");
shop_div.setAttribute("id", "shop-by")
shop_div.style.display = "flex";
shop_div.style.flexWrap = "wrap";
shop_div.style.justifyContent = "space-evenly";
shop_div.style.paddingTop = "30px"
shop_div.style.paddingBottom = "30px"

  let div5_link = document.createElement("a");
  let div6_link = document.createElement("a");
  let div7_link = document.createElement("a");

  div5_link.href = "#";
  div6_link.href = "#";
  div7_link.href = "#";

  let div5 = document.createElement("figure");
    let concern_image = document.createElement("img");
    let concern = document.createElement("figcaption");
    concern_image.src = "images/facemask.jpg";
    concern.textContent = "Shop by concern";
  div5.appendChild(concern_image);
  div5.appendChild(concern);

  let div6 = document.createElement("figure");
    let ingredient_image = document.createElement("img");
    let ingredient = document.createElement("figcaption");
    ingredient_image.src = "images/jocelyn-morales-JiqTLjzEH18-unsplash.jpg";
    ingredient.textContent = "Shop by ingredient";
  div6.appendChild(ingredient_image);
  div6.appendChild(ingredient);
    
  let div7 = document.createElement("figure");
    let skin_type_image = document.createElement("img");
    let skin_type = document.createElement("figcaption");
    skin_type_image.src = "images/park-street-r3ewHpMIV94-unsplash.jpg";
    skin_type.textContent = "Shop by skin type";
  div7.appendChild(skin_type_image);
  div7.appendChild(skin_type);

  div5_link.appendChild(div5);
  div6_link.appendChild(div6);
  div7_link.appendChild(div7);

shop_div.appendChild(div5_link);
shop_div.appendChild(div6_link);
shop_div.appendChild(div7_link);

return {shop_div};
})();