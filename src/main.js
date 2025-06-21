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



document.querySelector('.contacts_btn').addEventListener('click', (e) => {
    e.stopPropagation(); 
    document.querySelector('.drop_contacts').classList.toggle('_active');
});

document.addEventListener('click', (e) => {
    const dropContacts = document.querySelector('.drop_contacts');
    if (!e.target.closest('.contacts_btn') && !e.target.closest('.drop_contacts')) {
    dropContacts.classList.remove('_active');
    }
});