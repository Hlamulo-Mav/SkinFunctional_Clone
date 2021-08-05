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
            //form.appendChild(capcha);
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
        let h6 = document.createElement("h4");
        let h7 = document.createElement("h4");

        let p11_link = document.createElement('a');
        let p1_link = document.createElement('a');
        let p4_link = document.createElement('a')
        let p5_link = document.createElement('a')
        let p2_link = document.createElement('a')

        p11_link.href = "tel:0112345678";
        p1_link.href = "https://wa.link/4xdus5";
        p4_link.href = "mailto:info@crystalcear.com";
        p5_link.href = "mailto:info@crystalcear.com";
        p2_link.href = "https://www.google.com/maps/place/Gallagher+Ave,+Halfway+House,+Midrand,+1685/@-26.002918,28.127639,15z/data=!4m5!3m4!1s0x1e956e092e33d711:0xe531e22e7b484df2!8m2!3d-26.0029183!4d28.1276394?hl=en"

        h1.textContent = "Contact Numbers";
        p1_link.textContent = "WhatsApp: 076 039 8651";
        p11_link.textContent = "Tel: 012 002 1826"; 
        h2.textContent = "Physical Address";
        p2_link.textContent = "Office 3A-1, Halfway House Centre, Cnr Cedar Avenue and Valley Road Broadacres, AH Midrand, 2191";
        h3.textContent = "Email Us";
        h4.textContent = "Orders";
        p4_link.textContent ="orders@crystalclear.com"; 
        h5.textContent ="Customer service";
        p5_link.textContent = "customerservice@crystalclear.com";
        h6.textContent = "Do you have questions about how we can help you?"
        h7.textContent = "Send us an email and we’ll get in touch shortly."

        p1.appendChild(p1_link)
        p11.appendChild(p11_link)
        p4.appendChild(p4_link)
        p5.appendChild(p5_link)
        p2.appendChild(p2_link)

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
        div5.appendChild(h6);
        div5.appendChild(h7);

        wrap.appendChild(form);
        wrap.appendChild(div5);
        

    return {wrap};
})();