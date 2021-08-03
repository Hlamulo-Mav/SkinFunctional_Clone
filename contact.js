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

    let mapp = document.createElement("div")
        let mapps= document.createElement("iframe")
        mapps.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14343.743488393258!2d28.127639!3d-26.002918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e092e33d711%3A0xe531e22e7b484df2!2sGallagher%20Ave%2C%20Halfway%20House%2C%20Midrand%2C%201685!5e0!3m2!1sen!2sza!4v1628030247321!5m2!1sen!2sza";
        mapps.style.width = "100%";
        mapps.style.height = "550px";
        mapps.style.border = "0";
        mapps.style.allowfullscreen = " ";
        mapps.style.loading = "lazy";
        mapp.appendChild(mapps);
    
    about.appendChild(div3);
    about.appendChild(mapp)
     return {about}
})();



