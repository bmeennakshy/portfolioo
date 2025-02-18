// Get the modals
const aboutMeModal = document.getElementById('aboutMeModal');
const contactMeModal = document.getElementById('contactMeModal');
const myWorksModal = document.getElementById('myWorksModal');

// Get the links that open the modals
const aboutMeLink = document.getElementById('aboutMeLink');
const contactMeLink = document.getElementById('contactMeLink');
const myWorksLink = document.getElementById('myWorksLink');

// Get the <span> elements that close the modals
const closeButtons = document.querySelectorAll('.close');

// Open the About Me modal
aboutMeLink.onclick = function() {
    aboutMeModal.style.display = 'block';
    document.body.classList.add('modal-open');
}

// Open the Contact Me modal
contactMeLink.onclick = function() {
    contactMeModal.style.display = 'block';
    document.body.classList.add('modal-open');
}

// Open the My Works modal
myWorksLink.onclick = function() {
    myWorksModal.style.display = 'block';
    document.body.classList.add('modal-open');
}

// Close modals when clicking on <span> (x)
closeButtons.forEach(btn => {
    btn.onclick = function() {
        closeAllModals();
    };
});

// Close modals when clicking outside the modal
window.onclick = function(event) {
    if (event.target == aboutMeModal || event.target == contactMeModal || event.target == myWorksModal) {
        closeAllModals();
    }
}

// Function to close all modals and remove blur
function closeAllModals() {
    aboutMeModal.style.display = 'none';
    contactMeModal.style.display = 'none';
    myWorksModal.style.display = 'none';
    document.body.classList.remove('modal-open');
}
