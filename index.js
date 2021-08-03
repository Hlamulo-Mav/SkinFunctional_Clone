import { Header } from "./Header.js";
import { Map } from "./Map.js";
import { Contact } from "./contact.js";
import { Footer } from "./Footer.js";
import { form } from "./form.js";

let body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";

let container = document.querySelector("#container");
container.appendChild(Header.navbar);
container.appendChild(Contact.about)
container.appendChild(Map.location);
container.appendChild(form.wrap)
container.appendChild(Footer.foot);
