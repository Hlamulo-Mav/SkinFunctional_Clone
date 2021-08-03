export const Heading = (()=> {
  let logo = document.createElement("img")
  logo.src = "images/logo.jpg";
  logo.setAttribute("id", "logo");
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    const searchPage = document.createElement('ul');
    const li_home = document.createElement('li');
    const li_Shop = document.createElement('li');
    const li_new= document.createElement('li');
    const li_expert = document.createElement('li');
    const li_constactus = document.createElement('li');
    const search = document.createElement('li');

    li_constactus.setAttribute('class', 'tab');
    li_Shop.setAttribute('class', 'tab');


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
    contact_link.textContent = "CONTACTUS";

    search_link.classList.add("fa", "fa-search");
    shop_link.classList.add("fa", "fa-angle-down");
    advice_link.classList.add("fa", "fa-angle-down");

    li_home.appendChild(home_link);
    li_Shop.appendChild(shop_link);
    li_new.appendChild(featured_link);
    li_expert.appendChild(advice_link);
    li_constactus.appendChild(contact_link);
    search.appendChild(search_link);

    navbar.classList = "navbar";
    navbar.style.background = "gray";
    ul.style.display = "flex";
    ul.style.justifyContent = "space-evenly";
    ul.style.margin = "auto";
    li_Shop.style.listStyle = "none";
    li_new.style.listStyle = "none";
    li_expert.style.listStyle = "none";
    li_constactus.style.listStyle = "none";
    searchPage.style.margin = "auto";
    
    ul.appendChild(li_home);
    ul.appendChild(li_Shop);
    ul.appendChild(li_new);
    ul.appendChild(li_expert);
    ul.appendChild(li_constactus);
    navbar.appendChild(ul);

    search_link.classList.add("fa", "fa-search");
    shop_link.classList.add("fa", "fa-angle-down");
    advice_link.classList.add("fa", "fa-angle-down");

    return{navbar}
})();

