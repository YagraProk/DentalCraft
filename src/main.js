const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu_list');
const menuLinks = document.querySelectorAll(".item-link");





burger.addEventListener('click', function () {
burger.classList.toggle('active');
menu.classList.toggle('open');
})



  
  

	for (let i = 0; i < menuLinks.length; i++) {
		if(window.innerWidth < 768){
		menuLinks[i].addEventListener("click", () => {
		burger.classList.toggle('active');
		menu.classList.toggle('open');
		menu.style.display.toggle = 'none';
		html.classList.toggle('unscroll')}
	
	)
	}
	}

	



	


let html = document.querySelector("html");
document.querySelector('.burger').onclick = function () {
	html.classList.toggle('unscroll');
};



document.addEventListener('DOMContentLoaded', function() {
    const contactsBtn = document.querySelector('.contacts_btn');
    const dropContacts = document.querySelector('.drop_contacts');
    
    if (!contactsBtn || !dropContacts) return;
    
    // Обработчик для кнопки
    contactsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        dropContacts.classList.toggle('_active');
    });
    
    // Закрытие при клике вне области
    function handleOutsideClick(e) {
        if (!e.target.closest('.contacts_btn') && 
            !e.target.closest('.drop_contacts') && 
            dropContacts.classList.contains('_active')) {
            dropContacts.classList.remove('_active');
        }
    }
    
    // Добавляем обработчики для разных типов устройств
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, {passive: true});
});