document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Webhook URL from Discord
    const webhookURL = 'https://discord.com/api/webhooks/1284809221468323870/eUViG2coN3GiE_1t8gAuYhVPX_1kvJ6GWvE-2f-W_jYPDFo3K8aB0fuEBPFWGpYlRk5W';
  
    // Create the message content to send to Discord
    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
    };
  
    // Send the form data to Discord using the webhook
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  