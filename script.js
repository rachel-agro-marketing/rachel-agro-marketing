// Set footer years
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Contact page buttons
  const whatsappBtn = document.getElementById('whatsappBtn');
  const emailBtn = document.getElementById('emailBtn');
  if(whatsappBtn){
    // Opens WhatsApp chat to the chosen number
    whatsappBtn.href = "https://wa.me/919977306982";
  }
  if(emailBtn){
    emailBtn.href = "mailto:info.rggroup@gmail.com";
  }

  // Handle contact form submission
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const message = document.getElementById('message').value.trim();

      const subject = encodeURIComponent(`Website Inquiry from ${name || 'Visitor'}`);
      const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\n\nMessage:\n${message}`);

      // Open user's email client with prefilled content (opens default mail program)
      window.location.href = `mailto:info.rggroup@gmail.com?subject=${subject}&body=${body}`;
    });

    // WhatsApp button in the form
    const sendWhatsApp = document.getElementById('sendWhatsApp');
    sendWhatsApp.addEventListener('click', function(){
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const message = document.getElementById('message').value.trim();

      const text = encodeURIComponent(`Enquiry from website:\nName: ${name}\nCompany: ${company}\nMessage: ${message}`);
      // WhatsApp number set to 9977306982 (India) - include country code 91
      window.open(`https://wa.me/919977306982?text=${text}`, '_blank');
    });
  }
});
