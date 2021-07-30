export const Header = (() => {
    const header = document.createElement('section');
    
    const top_contact_div = document.createElement('div');
    top_contact_div.style.display = "flex";
    top_contact_div.style.justify-content = "space-between"; 

    const ul1 = document.createElement('ul');
    const phone_num = document.createElement('li');
    const whatsapp_num = document.createElement('li');
    const email = document.createElement('li');

    phone_num.textContent = "011 234 5678";
    whatsapp_num.textContent = "071 234 5678";
    email.textContent = "info@skinfunctional.com";
    
    phone_num.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-phone"></a>");
    whatsapp_num.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-whatsapp"></a>");
    email.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-envelope"></a>");

    ul1.style.display = "flex";
    phone_num.style.listStyle ="none";
    whatsapp_num.style.listStyle ="none";
    email.style.listStyle ="none";

    ul1.appendChild(phone_num);
    ul1.appendChild(whatsapp_num);
    ul1.appendChild(email);
    top_contact_div.appendChild(ul1);

    const ul2 = document.createElement('ul');
    const facebook = document.createElement('li');
    const twitter = document.createElement('li');
    const instagram = document.createElement('li');
    const youtube = document.createElement('li');

    facebook.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-facebook"></a>");
    twitter.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-twitter"></a>");
    instagram.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-instagram"></a>");
    youtube.insertAdjacentHTML("afterbegin", "<a href="#" class="fa fa-youtube"></a>");

    ul2.style.display = "flex";
    facebook.style.listStyle ="none";
    twitter.style.listStyle ="none";
    instagram.style.listStyle ="none";
    youtube.style.listStyle ="none";

    ul2.appendChild(facebook);
    ul2.appendChild(twitter);
    ul2.appendChild(instagram);
    ul2.appendChild(youtube);
    top_content_div.appendChild(ul2);
    
    const hr = document.createElement('hr');
    top_content_div.appendChild(hr);
    
    header.appendChild(top_content_div);
    return header;
})();
