export const Blog = (() => {
    let blogDiv = document.createElement("div");
    blogDiv.style.display = "flex";
    blogDiv.style.justifyContent = "space-evenly"
    blogDiv.style.flexWrap = "wrap";
    blogDiv.style.margin = "50px 0px"
      let image = document.createElement("img");
      image.src = "images/skin-care-cream.jpg";
      image.style.width = "400px";
      image.style.height = "500px";
      //image.style.margin = "50px";

      let skinBlog = document.createElement("div");
      skinBlog.style.width = "700px";
        let title = document.createElement("h1");
        title.style.fontSize = "50px"
        let description = document.createElement("p");
        description.style.fontSize = "17px"
        let blog_button = document.createElement("button");
        blog_button.style.fontSize = "13px"
        blog_button.style.border = "none";
        blog_button.style.padding = "15px 20px";
        blog_button.style.marginTop = "30px";
        blog_button.style.borderRadius = "15px";

        title.textContent = "Skintelligence Blog - Promoting prolonged skincare all year round"
        description.textContent = "Proper skin care is important because our skin is the largest barrier against infection that we have. Keeping our skin healthy and moist helps keep this barrier strong..."
        blog_button.textContent = "Read more";
        description.style.fontFamily = "'Encode Sans', sans-serif";
        blog_button.style.fontFamily = "'Encode Sans', sans-serif";

      skinBlog.appendChild(title);
      skinBlog.appendChild(description);
      skinBlog.appendChild(blog_button);

    blogDiv.appendChild(image);
    blogDiv.appendChild(skinBlog);

    return {blogDiv};
})();