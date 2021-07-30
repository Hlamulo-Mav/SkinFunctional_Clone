export const Header = (() => {
    const header = document.createElement('section');
    
    const top_contact_div = document.createElement('div');
    top_contact_div.style.display = "flex";
    //top_contact_div.style.justify-content = "space-between"; 

    const ul1 = document.createElement('ul');
    const phone_num = document.createElement('li');
    const whatsapp_num = document.createElement('li');
    const email = document.createElement('li');

    const phone_icon = document.createElement('a');
    const whatsapp_icon = document.createElement('a');
    const email_icon = document.createElement('a');

    phone_icon.href = "#";
    whatsapp_icon.href = "#";
    email_icon.href = "#";

    phone_icon.classList.add('fa fa-phone');
    whatsapp_icon.classList.add('fa fa-whatsapp');
    email_icon.classList.add('fa fa-envelope');

    phone_num.appendChild(phone_icon);
    whatsapp_num.appendChild(whatsapp_icon);
    email.appendChild(email_icon);

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

    const facebook_icon = document.createElement('a');
    const twitter_icon = document.createElement('a');
    const instagram_icon = document.createElement('a');
    const youtube_icon = document.createElement('a');

    facebook_icon.href = "#";
    twitter_icon.href = "#";
    instagram_icon.href = "#";
    youtube_icon.href = "#";

    facebook_icon.classList.add('fa fa-phone');
    twitter_icon.classList.add('fa fa-whatsapp');
    instagram_icon.classList.add('fa fa-envelope');
    youtube_icon.classList.add('fa fa-envelope');

    facebook.appendChild(facebook_icon);
    twitter.appendChild(twitter_icon);
    instagram.appendChild(instagram_icon);
    youtube.appendChild(youtube_icon);

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

    return { header }
})();
