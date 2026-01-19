// Configuration
const scriptURL = 'https://script.google.com/macros/s/AKfycbylfnjUsgacFrdsXPK7GpnWsiTCYj8eN0DWVTxv1dJidvlk5SDqZHxvWQNtu2ddgZoMtA/exec'; 

// Elements
const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');
const statusMsg = document.getElementById('form-status');

// Handle Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // UI Loading State
    btn.disabled = true;
    btn.innerText = 'Sending...';
    statusMsg.innerText = '';

    // Send Data
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        btn.disabled = false;
        btn.innerText = 'Send Message';
        statusMsg.innerText = 'Message sent successfully!';
        statusMsg.className = 'status-msg status-success';
        form.reset();
    })
    .catch(error => {
        btn.disabled = false;
        btn.innerText = 'Send Message';
        statusMsg.innerText = 'Something went wrong. Please try again.';
        statusMsg.className = 'status-msg status-error';
        console.error('Submission error:', error);
    });
});