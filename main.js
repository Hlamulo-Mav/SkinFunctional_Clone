import { Header } from "./Header.js";
import { About } from "./About.js";
import { ShopBy } from "./ShopBy.js";
import { NewProducts } from "./NewProducts.js";
import { Blog } from "./Blog.js";

let body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";

let container = document.querySelector("#container");
container.appendChild(Header.navbar);
container.appendChild(About.about);
container.appendChild(ShopBy.shop_div);
container.appendChild(NewProducts.new_products);
container.appendChild(Blog.blogDiv);