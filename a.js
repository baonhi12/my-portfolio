let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings : ['tester', 'web designer', 'graphic designer', 'web developer'], 
    loop : true,
    typeSpeed : 150
});

VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max : 20
});


var animationEl = document.querySelectorAll('.show-on-scroll')

function toggleAnimationE(element){
    
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    //check xem element co ben trong man hinh hay kh
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        //nam trong
        element.classList.add('start')
    } else {
        //ben ngoai
        element.classList.remove('start')
    }
}

function checkAnimation(){
    
    animationEl.forEach(el=>{
        toggleAnimationE(el)
    })
}

window.onscroll = checkAnimation