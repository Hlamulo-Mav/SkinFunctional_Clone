import { Header } from "./main.js";

let container = document.querySelector('#navigation');
container.appendChild(Header.headDiv);

let body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";