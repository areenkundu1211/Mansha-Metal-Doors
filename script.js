document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber =
        document.getElementById("whatsappNumber").value;

    const whatsappMessage =
`New Inquiry from Mansha Metal Doors Website

Name: ${name}
Email: ${email}
Phone: ${phone}

Requirement:
${message}`;

    const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});