export const Footer = (() => {
    let foot = document.createElement("div");
    foot.style.backgroundColor = "#E0DFED";
    foot.style.padding = "60px 30px";
    foot.style.color = "#4E5754"
    
    let footNav = document.createElement("ul");
    footNav.style.textAlign = "center";
      let list1 = document.createElement("li");
      let list2 = document.createElement("li");
      let list3 = document.createElement("li");
      let list4 = document.createElement("li");
      let list5 = document.createElement("li");
      let list6 = document.createElement("li");
      let list7 = document.createElement("li");
      let list8 = document.createElement("li");

      let link1 = document.createElement("a");
      let link2 = document.createElement("a");
      let link3 = document.createElement("a");
      let link4 = document.createElement("a");
      let link5 = document.createElement("a");
      let link6 = document.createElement("a");
      let link7 = document.createElement("a");
      let link8 = document.createElement("a");

      link1.href = "#";
      link2.href = "#";
      link3.href = "#";
      link4.href = "#";
      link5.href = "#";
      link6.href = "#";
      link7.href = "#";
      link8.href = "#";
      
      link1.textContent = "HOME";
      link2.textContent = "SHOP";
      link3.textContent = "NEW & FEATURED";
      link4.textContent = "EXPERT ADVICE";
      link5.textContent = "CONTACT US";
      link6.textContent = "DELIVERY INFORMATION";
      link7.textContent = "RETURNS";
      link8.textContent = "LOYALTY PROGRAM";

      list1.appendChild(link1);
      list2.appendChild(link2);
      list3.appendChild(link3);
      list4.appendChild(link4);
      list5.appendChild(link5);
      list6.appendChild(link6);
      list7.appendChild(link7);
      list8.appendChild(link8);

    footNav.appendChild(list1);
    footNav.appendChild(list2);
    footNav.appendChild(list3);
    footNav.appendChild(list4);
    footNav.appendChild(list5);
    footNav.appendChild(list6);
    footNav.appendChild(list7);
    footNav.appendChild(list8);

    let socials = document.createElement('ul');
    socials.style.textAlign = "center";
    socials.style.padding = "20px 0px"
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

    let copyright = document.createElement("p");
    copyright.style.textAlign = "center";
    copyright.style.paddingTop = "20px"
    copyright.textContent = "Crystal Clear - All Rights Reserved. 2021";

    foot.appendChild(footNav);
    foot.appendChild(socials);
    foot.appendChild(copyright);

    return {foot};
})();