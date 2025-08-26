document.querySelector('.contacts_btn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.drop_contacts').classList.toggle('_active');
});

document.addEventListener('click', (e) => {
    const dropContacts = document.querySelector('.drop_contacts');
    const contactsBtn = document.querySelector('.contacts_btn');
    
    const isClickInsideMenu = dropContacts.contains(e.target);
    const isClickOnButton = contactsBtn.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnButton && dropContacts.classList.contains('_active')) {
        dropContacts.classList.remove('_active');
    }
});


document.addEventListener('touchstart', (e) => {
    const dropContacts = document.querySelector('.drop_contacts');
    const contactsBtn = document.querySelector('.contacts_btn');
    
    const isTouchInsideMenu = dropContacts.contains(e.target);
    const isTouchOnButton = contactsBtn.contains(e.target);
    
    if (!isTouchInsideMenu && !isTouchOnButton && dropContacts.classList.contains('_active')) {
        dropContacts.classList.remove('_active');
    }
});