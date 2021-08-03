export const Map = (() => {
    let location = document.createElement("map");

     let iframe = document.createElement("iframe");
     iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.963788851656!2d28.124806614524633!3d-26.00200356209695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e08d57b99c1%3A0x92af70bd643549d4!2s676%20Gallagher%20Ave%2C%20Halfway%20House%2C%20Midrand%2C%201685!5e0!3m2!1sen!2sza!4v1628027042866!5m2!1sen!2sza";
     iframe.style.width = "100%";
     iframe.style.height = "500px";
     iframe.style.border = "0";
     iframe.allowFullscreen = "";
     iframe.setAttribute("loading", "lazy");

     location.appendChild(iframe);

     return {location};
})();