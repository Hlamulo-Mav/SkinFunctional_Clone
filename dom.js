export const Header = (() => {
    const top_contact_div = document.createElement('div');
    top_contact_div.display = flex;

    const ul1 = document.createElement('ul');
    const phone_num = document.createElement('li');
    const whatsapp_num = document.createElement('li');
    const email = document.createElement('li');

    phone_num.textContent = "011 234 5678";
    whatsapp_num.textContent = "071 234 5678";
    email.textContent = "info@skinfunctional.com";

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

    facebook.innerHTML = "";
    twitter.innerHTML = "";
    instagram.innerHTML = "";
    youtube.innerHTML = "";

    ul2.style.display = "flex";
    facebook.style.listStyle ="none";
    twitter.style.listStyle ="none";
    instagram.style.listStyle ="none";
    instagram.style.listStyle ="none";

    ul2.appendChild();
    ul2.appendChild(whatsapp_num);
    ul2.appendChild(email);
})();