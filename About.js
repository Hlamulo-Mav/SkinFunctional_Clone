export const About = (() => {
    let about = document.createElement("div");
    about.setAttribute("id", "about")

  let div3 = document.createElement("div");
  div3.style.backgroundColor = "#4E5754";
  div3.style.color = "white";
  div3.style.textAlign = "center";
  div3.style.paddingTop = "0.1px";
  div3.style.paddingBottom = "0.1px";
  //div3.style.margin = "0px -10px 0px -10px";

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

  let div4 = document.createElement("div");
  div4.style.backgroundImage = 'url("images/lanju-fotografie-r-r-sgXzbo0-unsplash.jpg")';
  div4.style.backgroundRepeat = "no-repeat";
  div4.style.backgroundPosition = "center";
  div4.style.backgroundSize = "cover";
  div4.style.padding = "80px 40px 80px 40px"
  //div4.style.margin = "0px -10px 0px -10px"
    let h1 = document.createElement("h1");
    h1.style.width = "700px"
    h1.style.fontSize = "70px"
    h1.style.color = "#2C2A2F"
    let paragraph = document.createElement("p")
    paragraph.style.fontSize = "20px"
    paragraph.style.color = "#2C2A2F"
    let productButton = document.createElement("button");
    productButton.style.fontSize = "20px"
    //productButton.style.color = "white"
    //productButton.style.backgroundColor = "#2C2A2F"
    productButton.style.border = "none";
    productButton.style.padding = "15px 20px";
    productButton.style.marginTop = "30px";
    h1.textContent = "Skincare that delivers noticeable results";
    paragraph.textContent = "CRYSTAL CLEAR SKIN is a range of skincare products expertly formulated using optimal concentrations of effective and trusted ingredients to restore and maintain skin's ideal functioning. The brand was created to demistify skincare jargon and misinformation to deliver honourable skintelligence. Equipped with skintelligence, you can confidently adapt your skincare routine to your skin's ever-changing needs. Each product contains ingredients that have earned the right to be there, leaving no room fo redundancy."
    productButton.textContent = "Our Products"
  div4.appendChild(h1);
  div4.appendChild(paragraph);
  div4.appendChild(productButton);


about.appendChild(div3);
about.appendChild(div4);

return {about};
})();