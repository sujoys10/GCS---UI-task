(function(){

    const serviceDropdown = document.querySelector('#serviceDropdown');
    const serviceBox = document.querySelector('#servicesBox');
    
    //methods
    const toggleServiceItems = () => {
        console.log('lol')
        if( serviceBox.style.display === 'block'){
            serviceBox.style.display = 'none';
        }else{
            serviceBox.style.display = 'block';
        }
    }

    //events
    serviceDropdown.addEventListener('click', toggleServiceItems);
})();

(function sideNav(){
    
    const menuIcon = document.querySelector('.nav__menu');
    const sideNav = document.querySelector('.sideNav');
    const closeNavBtn = document.querySelector('#closeNav');

    const showNav = () => {
        sideNav.style.width = "250px";
    }
    console.log(closeNavBtn)

    const closeNav = (e) => {
        console.log(e.target)
        sideNav.style.width = '0';
    }

    menuIcon.addEventListener('click', showNav);
    closeNavBtn.addEventListener('click', closeNav);
})();

