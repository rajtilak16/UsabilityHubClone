const toggleButton = document.getElementById('nav_toggle');
const navLinks = document.getElementById('nav_links');

toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})