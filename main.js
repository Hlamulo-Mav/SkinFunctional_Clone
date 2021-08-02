// Header
let container = document.querySelector('#navigation')

let div = document.createElement('div');
div.style.marginTop = "-10px"
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.padding = "0px 20px"

  let contacts = document.createElement('ul');
    let phone_num = document.createElement('li');
    let whatsapp_num = document.createElement('li');
    let email = document.createElement('li');

    let phone_icon = document.createElement('a');
    let whatsapp_icon = document.createElement('a');
    let email_icon = document.createElement('a');

    phone_icon.href = "#";
    whatsapp_icon.href = "#";
    email_icon.href = "mailto:info@crystalcear.com";

    phone_icon.classList.add("fa", "fa-phone");
    whatsapp_icon.classList.add("fa", "fa-whatsapp");
    email_icon.classList.add("fa", "fa-envelope");

    phone_icon.textContent = "  011 234 5678";
    whatsapp_icon.textContent = "  071 234 5678";
    email_icon.textContent = "  info@crystalclear.com";

    phone_num.appendChild(phone_icon);
    whatsapp_num.appendChild(whatsapp_icon);
    email.appendChild(email_icon);

    phone_num.style.cssText = "inline-block"
    whatsapp_num.style.display = "inline-block"
    email.style.display = "inline-block"

    contacts.appendChild(phone_num);
    contacts.appendChild(whatsapp_num);
    contacts.appendChild(email);
    contacts.style.marginLeft = "-40px"

    let socials = document.createElement('ul');
    let facebook = document.createElement('li');
    let twitter = document.createElement('li');
    let instagram = document.createElement('li');
    let youtube = document.createElement('li');

    let facebook_icon = document.createElement('a');
    let twitter_icon = document.createElement('a');
    let instagram_icon = document.createElement('a');
    let youtube_icon = document.createElement('a');

    facebook_icon.href = "#";
    twitter_icon.href = "#";
    instagram_icon.href = "#";
    youtube_icon.href = "#";

    facebook_icon.classList.add("fa", "fa-facebook");
    twitter_icon.classList.add("fa", "fa-twitter");
    instagram_icon.classList.add("fa", "fa-instagram");
    youtube_icon.classList.add("fa", "fa-youtube-play");

    facebook.appendChild(facebook_icon);
    twitter.appendChild(twitter_icon);
    instagram.appendChild(instagram_icon);
    youtube.appendChild(youtube_icon);

    facebook.style.display = "inline-block"
    twitter.style.display = "inline-block"
    instagram.style.display = "inline-block"
    youtube.style.display = "inline-block"

    socials.appendChild(facebook);
    socials.appendChild(twitter);
    socials.appendChild(instagram);
    socials.appendChild(youtube);

div.appendChild(contacts);
div.appendChild(socials);

let hr = document.createElement('hr')
hr.style.marginTop = "-7px"

let div2 = document.createElement("div")
div2.style.display = "flex"
div2.style.justifyContent = "space-evenly"
  let logo = document.createElement("img")
  logo.src = "images/logo.jpg";
  logo.setAttribute("id", "logo");

  let allPages = document.createElement("div");
  let pages = document.createElement("ul");
  let searchPage = document.createElement("ul");
  pages.style.textAlign = "center"
  searchPage.style.margin = "auto"
  allPages.setAttribute("id", "navbar")
    let home = document.createElement("li")
    let shop = document.createElement("li")
    let featured = document.createElement("li")
    let advice = document.createElement("li")
    let contact = document.createElement("li")
    let search = document.createElement("li")

    let home_link = document.createElement("a")
    let shop_link = document.createElement("a")
    let featured_link = document.createElement("a")
    let advice_link = document.createElement("a")
    let contact_link = document.createElement("a")
    let search_link = document.createElement("a")

    home_link.href = "index.html"
    shop_link.href = "#"
    featured_link.href = "#"
    advice_link.href = "#"
    contact_link.href = "#"
    search_link.href = "#"

    home_link.textContent = "HOME";
    shop_link.textContent = " SHOP";
    featured_link.textContent = "NEW & FEATURED";
    advice_link.textContent = " EXPERT ADVICE";
    contact_link.textContent = "CONTACT US";

    search_link.classList.add("fa", "fa-search");
    shop_link.classList.add("fa", "fa-angle-down");
    advice_link.classList.add("fa", "fa-angle-down");

    home.appendChild(home_link);
    shop.appendChild(shop_link);
    featured.appendChild(featured_link);
    advice.appendChild(advice_link);
    contact.appendChild(contact_link);
    search.appendChild(search_link);

    pages.appendChild(home);
    pages.appendChild(shop);
    pages.appendChild(featured);
    pages.appendChild(advice);
    pages.appendChild(contact);
    searchPage.appendChild(search);

  allPages.appendChild(pages);
  allPages.appendChild(searchPage);

  let members = document.createElement('div');
    let membership = document.createElement("ul");
    membership.style.paddingTop = "20px";
    //membership.style.paddingRight = "20px"
    let membershipCart = document.createElement("ul");
    membershipCart.style.marginLeft = "145px"
    membershipCart.style.paddingTop = "50px"
      let password = document.createElement("li");
      let member = document.createElement("li");
      let cart = document.createElement("li");

      let password_link = document.createElement("a");
      let member_link = document.createElement("a");
      let cart_link = document.createElement("a");

      password_link.href = "#";
      member_link.href = "#";
      cart_link.href = "#";

      password_link.textContent = "Lost Password?"
      member_link.classList.add("fa", "fa-user");
      cart_link.classList.add("fa", "fa-cart-plus");

      password.appendChild(password_link);
      member.appendChild(member_link);
      cart.appendChild(cart_link);

      membership.appendChild(password);
      membership.appendChild(member);
      membershipCart.appendChild(cart);
    members.appendChild(membership);
    members.appendChild(membershipCart)

  
div2.appendChild(logo);
div2.appendChild(allPages);
div2.appendChild(members);

container.appendChild(div);
container.appendChild(hr)
container.appendChild(div2);

//about
let about = document.querySelector("#about");

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

  let div4 = document.createElement("div");
  div4.style.backgroundImage = 'url("images/lanju-fotografie-r-r-sgXzbo0-unsplash.jpg")';
  div4.style.backgroundRepeat = "no-repeat";
  div4.style.backgroundPosition = "center";
  div4.style.backgroundSize = "cover";
  div4.style.padding = "80px 40px 80px 40px"
  div4.style.margin = "0px -10px 0px -10px"
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

//shop-by
let shop_by = document.querySelector("#shop-by");
let shop_div = document.createElement("div");
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

shop_by.appendChild(shop_div);

//new products
let new_products = document.querySelector("#new-products");
  let product_div = document.createElement("div");
  product_div.style.backgroundColor = "#C8C7D4"
    let h2 = document.createElement("h2");
    h2.textContent = "New Products";
    product_div.appendChild(h2);

new_products.appendChild(product_div);