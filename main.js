let navbar = document.querySelector('nav')
let openNav = document.querySelector('.logo i')
let mainLinks = document.querySelectorAll('.main-link');
let dropdownMenus = document.querySelectorAll('.dropdown-menu');

openNav.onclick = () => {
    navbar.classList.toggle('open')
    dropdownMenus.forEach((drop)=>{
        drop.classList.remove('open-drop')
    })
};

mainLinks.forEach((link) => {
    link.addEventListener('click', (e) => {

        e.preventDefault()

        let dropdownMenu = link.nextElementSibling;
        
        dropdownMenus.forEach((drop)=>{
            if (drop !== dropdownMenu){
                drop.classList.remove('open-drop')
            }
        })

        if(dropdownMenu){
            dropdownMenu.classList.toggle('open-drop')
        }
    })
})