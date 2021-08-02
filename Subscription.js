export const Subscription = (() => {
    let subscribe = document.createElement("div");
    subscribe.style.backgroundColor = "#4E5754";
    subscribe.style.padding = "20px 20px"

      let p1 = document.createElement("p");
      p1.textContent = "CRYSTAL CLEAR SKIN uses well researched and proven active ingredients at ideal doses to address common skin concerns to restore skin’s ideal functioning."
      p1.style.color = "white";
      p1.style.textAlign = "center";
      p1.style.fontSize = "25px";
      let p2 = document.createElement("p");
      p2.textContent = "Fragrance Free";
      p2.style.color = "white";
      p2.style.textAlign = "center";
      p2.style.fontSize = "25px";
      let p3 = document.createElement("p");
      p3.textContent = "Alcohol Free";
      p3.style.color = "white";
      p3.style.textAlign = "center";
      p3.style.fontSize = "25px";
      let p4 = document.createElement("p");
      p4.textContent = "Cruelty Free";
      p4.style.color = "white";
      p4.style.textAlign = "center";
      p4.style.fontSize = "25px";
      let p5 = document.createElement("p");
      p5.textContent = "Vegan Friendly";
      p5.style.color = "white";
      p5.style.textAlign = "center";
      p5.style.fontSize = "25px";
      let p6 = document.createElement("p");
      p6.textContent = "Lovingly created in South Africa";
      p6.style.color = "white";
      p6.style.textAlign = "center";
      p6.style.fontSize = "25px";

      let subForm = document.createElement("div");
      subForm.style.backgroundColor = "#E0DFED";
      subForm.style.padding = "20px 40px";
      subForm.style.display = "flex"
      subForm.style.justifyContent = "space-between";
        let info = document.createElement("div")
        info.style.width = "600px"
          let h2 = document.createElement("h2")
          h2.textContent = "Join our newsletter";
          let p = document.createElement("p")
          p.textContent = "Expert advice, specials and new products, first in your inbox! No spamming, we promise!"
          p.style.fontSize = "17px"
        info.appendChild(h2)
        info.appendChild(p)

        let form = document.createElement("form");
        form.style.alignSelf = "center";
          let input = document.createElement("input");
          input.style.width = "500px"
          input.setAttribute("type", "email");
          input.setAttribute("name", "Email Addess");
          input.setAttribute("placeholder", "Enter your email address");
          input.required = true;

          let submit = document.createElement("input");
            submit.setAttribute("id", "submit")
            submit.setAttribute("type", "submit");
            submit.setAttribute("value", "Submit");
            submit.style.fontSize = "13px"
            submit.style.border = "none";
            submit.style.padding = "12px 20px";
            submit.style.borderRadius = "5px";
        form.appendChild(input);
        form.appendChild(submit);

      subForm.appendChild(info);
      subForm.appendChild(form);
      
    subscribe.appendChild(p1);
    subscribe.appendChild(p2);
    subscribe.appendChild(p3);
    subscribe.appendChild(p4);
    subscribe.appendChild(p5);
    subscribe.appendChild(p6);
    subscribe.appendChild(subForm);

    return {subscribe};
})();