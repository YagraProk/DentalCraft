document.addEventListener('DOMContentLoaded', function() {
  const whatsappButton = document.querySelector('.whatsap_button');
  const closeButton = document.querySelector('.close-button');
  
  
  closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    whatsappButton.classList.add('hidden');
  });
  
  
  whatsappButton.addEventListener('click', function(e) {
    if (whatsappButton.classList.contains('hidden')) {
      e.preventDefault();
      e.stopPropagation();
      whatsappButton.classList.remove('hidden');
    }
  });
  
  
  const whatsappLink = document.querySelector('.whatsap_button a');
  whatsappLink.addEventListener('click', function(e) {
    if (whatsappButton.classList.contains('hidden')) {
      e.preventDefault();
      e.stopPropagation();
      whatsappButton.classList.remove('hidden');
    }
  });
});