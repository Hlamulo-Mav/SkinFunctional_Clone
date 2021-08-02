// Header
let container = document.querySelector('#navigation')

let div = document.createElement('div');
div.style.marginTop = "-10px"
div.style.display = "flex";
div.style.justifyContent = "space-between";

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
div2.style.justifyContent = "space-between"
  let logo = document.createElement("img")
  logo.src = "images/logo.jpg";
  logo.setAttribute("id", "logo");

  let allPages = document.createElement("div");
  let pages = document.createElement("ul");
  let searchPage = document.createElement("ul");
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
    contact_link.href = "Contact-Us.html"
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
    membership.style.paddingRight = "20px"
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
  //div3.style.fontSize = "25px";

    let shipping = document.createElement("p");
    shipping.textContent = "Free shipping for orders over R850 within South Africa. "
      let giftCard_link = document.createElement("a");
      giftCard_link.href = "#";
      giftCard_link.classList.add("fa", "fa-gift");
      giftCard_link.textContent = " Buy a gift card"
      giftCard_link.style.color = "#89D1E8";
    shipping.appendChild(giftCard_link);

  div3.appendChild(shipping);
about.appendChild(div3);

    let div4 = document.createElement("div");
            // Create a break line element
            let br = document.createElement("br"); 
    // Create a form 
            let form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action", "submit.php");

    // Create an input element for Fullname
            let FN = document.createElement("input");
            FN.setAttribute("type", "text");
            FN.setAttribute("name", "Full Name");
            FN.setAttribute("placeholder", "Full Name");

    // Create an input element for  Email Address
            let ID = document.createElement("input");
            ID.setAttribute("type", "text");
            ID.setAttribute("name", "Email Addess");
            ID.setAttribute("placeholder", "Email Address");

        // Create an input element for sUBJECT
            let SB = document.createElement("input");
            SB.setAttribute("type", "text");
            SB.setAttribute("name", "Subject");
            SB.setAttribute("placeholder", "Subject");

             // Create an input element for sUBJECT
             let Msg= document.createElement("input");
             Msg.setAttribute("type", "text");
             Msg.setAttribute("name", "Message");
             Msg.setAttribute("placeholder", "Message");
             Msg.style.height = "170px";

    // Create a submit button
            let s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");

    // Append the input to the form
            form.append(FN);
            form.appendChild(br.cloneNode());   
            form.append(ID);
            form.appendChild(br.cloneNode());
            form.append(SB); 
            form.appendChild(br.cloneNode());   
            form.append(Msg); 
            form.appendChild(br.cloneNode()); 
            form.append(s); 
            form.style.paddingTop = "50px";

            document.getElementsByTagName("body")[0]
            .appendChild(form);
    
    about.appendChild(div4)

//flex

let flex = document.querySelector("#flex");

    let div5 = document.createElement("div")
        div5.style.float = "left";
        let h1 = document.createElement("h1");
        let p1 = document.createElement("p");
        let h2 = document.createElement("h1");
        let p2 = document.createElement("p");
        let h3 = document.createElement("h1");
        let h4 = document.createElement("h4");
        let p4 = document.createElement("p");
        let h5 = document.createElement("h4");
        let p5 = document.createElement("p");

        h1.textContent = "Contact Numbers";
        p1.textContent = "WhatsApp: 076 039 8651";
        h2.textContent = "Physical Address";
        p2.textContent = "Office 3A-1, Broadacres Shopping Centre Cnr Cedar Avenue and Valley Road Broadacres AH Sandton 2191";
        h3.textContent = "Email Us";
        h4.textContent = "Orders";
        p4.textContent ="orders@skinfunctional.com";
        h5.textContent ="Customer service";
        p5.textContent = "customerservice@skinfunctional.com";

        div5.appendChild(h1);
        div5.appendChild(p1);
        div5.appendChild(h2);
        div5.appendChild(p2);
        div5.appendChild(h3);
        div5.appendChild(h4);
        div5.appendChild(p4);
        div5.appendChild(h5);
        div5.appendChild(p5);
flex.appendChild(div5)