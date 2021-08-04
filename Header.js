
export const Header = (() => {
//let container = document.querySelector('#navigation')
let navbar = document.createElement("nav");
navbar.setAttribute("id", "navigation")
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

    phone_icon.href = "tel:0112345678";
    whatsapp_icon.href = "https://wa.link/4xdus5";
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

    facebook_icon.href = "https://www.facebook.com/";
    twitter_icon.href = "https://twitter.com/";
    instagram_icon.href = "https://instagram.com/";
    youtube_icon.href = "https://youtube.com/";

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
  allPages.setAttribute("class", "navbar")
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
    contact_link.href = "Contact-Us.html"
    search_link.href = "#"

    home_link.textContent = "HOME";
    shop_link.textContent = " SHOP ";
    featured_link.textContent = "NEW & FEATURED";
    advice_link.textContent = " EXPERT ADVICE ";
    contact_link.textContent = "CONTACT US";

    shop.style.fontFamily = "'Encode Sans', sans-serif"
    advice.style.fontFamily = "'Encode Sans', sans-serif"

    search_link.classList.add("fa", "fa-search");
    shop_link.classList.add("fa", "fa-angle-down", "drop-btn");
    advice_link.classList.add("fa", "fa-angle-down", "drop-btn");

    home.appendChild(home_link);
    shop.appendChild(shop_link);
    featured.appendChild(featured_link);
    advice.appendChild(advice_link);
    contact.appendChild(contact_link);
    search.appendChild(search_link);

    let shop_div = document.createElement("div");
    shop_div.classList.add("dropdown-content");
      let shop_by_product = document.createElement("a");
      shop_by_product.textContent = "Shop by Product";
      let shop_by_ingredient = document.createElement("a");
      shop_by_ingredient.textContent = "Shop by Ingredient"
      let shop_by_skin_type = document.createElement("a");
      shop_by_skin_type.textContent = "Shop by Skin Type"
      let shop_by_concern = document.createElement("a");
      shop_by_concern.textContent = "Shop by Concern";
    shop_div.appendChild(shop_by_product);
    shop_div.appendChild(shop_by_ingredient);
    shop_div.appendChild(shop_by_skin_type);
    shop_div.appendChild(shop_by_concern);

    let advice_div = document.createElement("div");
    advice_div.classList.add("dropdown-content")
      let skintelligence = document.createElement("a");
      skintelligence.textContent = "Skintelligence";
      let FAQs = document.createElement("a");
      FAQs.textContent = "FAQs"
      let patch_testing = document.createElement("a");
      patch_testing.textContent = "Patch Testing"
      let treatment = document.createElement("a");
      treatment.textContent = "Skin Treatment Programs";
      let questionnaire = document.createElement("a");
      questionnaire.textContent = "Skincare Questionnaire";
    advice_div.appendChild(skintelligence);
    advice_div.appendChild(FAQs);
    advice_div.appendChild(patch_testing);
    advice_div.appendChild(treatment);
    advice_div.appendChild(questionnaire);

    let shopping = document.createElement("div");
    shopping.classList.add("dropdown");
    shopping.appendChild(shop);
    shopping.appendChild(shop_div);
    let expert_advice = document.createElement("div");
    expert_advice.classList.add("dropdown");
    expert_advice.appendChild(advice);
    expert_advice.appendChild(advice_div);

    pages.appendChild(home);
    pages.appendChild(shopping);
    pages.appendChild(featured);
    pages.appendChild(expert_advice);
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

navbar.appendChild(div);
navbar.appendChild(hr);
navbar.appendChild(div2);

return {navbar};

})();