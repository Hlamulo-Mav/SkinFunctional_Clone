export const Contact = (() => {

    let about = document.createElement("div");
    about.setAttribute("id", "about")

    let div3 = document.createElement("div");
    div3.style.backgroundColor = "#4E5754";
    div3.style.color = "white";
    div3.style.textAlign = "center";
    div3.style.paddingTop = "0.1px";
    div3.style.paddingBottom = "0.1px";
    div3.style.margin = "0px -10px 0px -10px";

    let shipping = document.createElement("p");
    shipping.textContent = "Free shipping for orders over R850 within South Africa. "
    shipping.style.fontSize = "18px";
      let giftCard_link = document.createElement("a");
      giftCard_link.href = "#";
      giftCard_link.classList.add("fa", "fa-gift");
      giftCard_link.textContent = " Buy a gift card"
      giftCard_link.style.color = "#89D1E8";
    shipping.appendChild(giftCard_link);

    div3.appendChild(shipping);

    about.appendChild(div3);
     return {about}
})();