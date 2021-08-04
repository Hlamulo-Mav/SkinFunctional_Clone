import { Header } from "./Header.js";
import { Contact } from "./contact.js";
<<<<<<< HEAD
=======
import { Footer } from "./Footer.js";
>>>>>>> 109ba5c395c2135842f2f7358d2a6cd9cf844ec2
import { form } from "./form.js";
import { Footerr } from "./contact_footer.js";

let body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";

let container = document.querySelector("#container");
container.appendChild(Header.navbar);
container.appendChild(Contact.about)
container.appendChild(form.wrap)
<<<<<<< HEAD
container.appendChild(Footerr.foot)

=======
container.appendChild(Footer.foot);
>>>>>>> 109ba5c395c2135842f2f7358d2a6cd9cf844ec2
