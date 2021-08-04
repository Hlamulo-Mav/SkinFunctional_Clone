export const form = (() => {

    let wrap = document.createElement("div");
        wrap.style.display = "flex";
        wrap.style.justifyContent = "space-evenly"
        wrap.style.flexWrap = "wrap";
        wrap.style.margin = "50px 0px"
        wrap.style.fontFamily = "'Encode Sans', sans-serif";

        let div4 = document.createElement("div");
    // Create a break line element
            let br = document.createElement("br"); 
    // Create a form 
            let form = document.createElement("form");
            form.style.backgroundColor = "#f2f2f2";
            form.style.borderRadius = "5px";
            form.style.padding = "20px";
            form.style.paddingTop = "100px";
            form.style.fontFamily = "'Encode Sans', sans-serif";
            form.setAttribute("method", "post");
            form.setAttribute("action", "submit.php");

    // Create an input element for Fullname
            let PN = document.createElement("p");
            let FN = document.createElement("input");
            FN.setAttribute("type", "text");
            FN.setAttribute("name", "Full Name");
            FN.setAttribute("placeholder", "Enter your Full Name...");

    // Create an input element for  Email Address
            let PD = document.createElement("p");
            let ID = document.createElement("input");
            ID.setAttribute("type", "text");
            ID.setAttribute("name", "Email Addess");
            ID.setAttribute("placeholder", "Enter Your Email Address...");

        // Create an input element for sUBJECT
            let PB = document.createElement("p");
            let SB = document.createElement("input");
            SB.setAttribute("type", "text");
            SB.setAttribute("name", "Subject");
            SB.setAttribute("placeholder", "Subject..");

             // Create an input element for Message
             let PM = document.createElement("p");
             let Msg= document.createElement("input");
             Msg.setAttribute("type", "text");
             Msg.setAttribute("name", "Message");
             Msg.setAttribute("placeholder", "Message..");
             Msg.style.height = "130px";

             PN.textContent = "Full Names";
             PD.textContent = "Email";
             PB.textContent = "Subject";
             PM.textContent = "Message / Enquiry";
        

             //attach captcha image
             
            let image = document.createElement("div")
            image.style.justifyContent = "space-evenly"
            let image1 = document.createElement("img")
            image1.src = "images/captcha.png";
            image1.setAttribute("id", "cap");
            image.appendChild(image1);

    // Create a submit button
            let submit = document.createElement("input");
            submit.setAttribute("id", "submit")
            submit.setAttribute("type", "submit");
            submit.setAttribute("value", "Submit");
            submit.style.fontSize = "13px"
            submit.style.border = "none";
            submit.style.padding = "12px 20px";
            submit.style.borderRadius = "5px";

            
    // Append the input to the form
            form.append(PN);
            form.append(FN);
            form.appendChild(br.cloneNode());
            form.append(PD);   
            form.append(ID);
            form.appendChild(br.cloneNode());
            form.appendChild(PB);
            form.append(SB); 
            form.appendChild(br.cloneNode());
            form.append(PM);  
            form.append(Msg); 
            form.appendChild(br.cloneNode());
            form.appendChild(image);
            form.appendChild(br.cloneNode());
            form.append(submit); 
            form.style.paddingTop = "40px";

            document.getElementsByTagName("body")[0]
            .appendChild(form);
            div4.appendChild(form)

    let div5 = document.createElement("div");
        div5.style.width = "500px";
        let h1 = document.createElement("h1");
        let p1 = document.createElement("p");
        let p11 = document.createElement("p"); 
        let h2 = document.createElement("h1");
        let p2 = document.createElement("p");
        let h3 = document.createElement("h1");
        let h4 = document.createElement("h4");
        let p4 = document.createElement("p");
        let h5 = document.createElement("h4");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        let p7 = document.createElement("p");

        h1.textContent = "Contact Numbers";
        p1.textContent = "WhatsApp: 076 039 8651";
        p11.textContent = "Tel: 078 002 1826";
        h2.textContent = "Physical Address";
        p2.textContent = "Office 3A-1, Broadacres Shopping Centre, Cnr Cedar Avenue and Valley Road Broadacres, AH Sandton 2191";
        h3.textContent = "Email Us";
        h4.textContent = "Orders";
        p4.textContent ="orders@crystalclear.com"; 
        h5.textContent ="Customer service";
        p5.textContent = "customerservice@crystalclear.com";
        p6.textContent = "Do you have questions about how we can help you?"
        p7.textContent = "Send us an email and we’ll get in touch shortly."

        div5.appendChild(h1);
        div5.appendChild(p1);
        div5.appendChild(p11);
        div5.appendChild(h2);
        div5.appendChild(p2);
        div5.appendChild(h3);
        div5.appendChild(h4);
        div5.appendChild(p4);
        div5.appendChild(h5);
        div5.appendChild(p5);
        div5.appendChild(br.cloneNode());
        div5.appendChild(p6);
        div5.appendChild(p7);

        wrap.appendChild(form);
        wrap.appendChild(div5);
        

    return {wrap};
})();