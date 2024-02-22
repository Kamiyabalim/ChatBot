let header_info = document.querySelector('.header-info');
let chatbot_app = document.querySelector('.chatbot_app');
let contact_info = document.getElementById('contact_info');

header_info.addEventListener("click", () => {
    chatbot_app.classList.add('active');
});

contact_info.addEventListener("click", () => {
    chatbot_app.classList.remove('active');
});