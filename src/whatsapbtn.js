document.addEventListener('DOMContentLoaded', function() {
  const telegramButton = document.querySelector('.telegram_button');
  const whatsappButton = document.querySelector('.whatsap_button');
  const closeButton = document.querySelector('.close-button');
  
 
  function showBothIcons() {
    whatsappButton.classList.remove('hidden');
    telegramButton.classList.remove('hidden');
  }
  
  
  closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    whatsappButton.classList.add('hidden');
    telegramButton.classList.add('hidden');
  });
  
 
  whatsappButton.addEventListener('click', function(e) {
    if (whatsappButton.classList.contains('hidden')) {
      e.preventDefault();
      e.stopPropagation();
      showBothIcons();
    }
  });

 
  telegramButton.addEventListener('click', function(e) {
    if (telegramButton.classList.contains('hidden')) {
      e.preventDefault();
      e.stopPropagation();
      showBothIcons();
    }
  });
});