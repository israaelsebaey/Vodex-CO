
window.addEventListener('load',()=>{
    //Selecting Elements
    //Web Section
    let webDiv=document.getElementById('web');
    let overlayweb=document.getElementById('overlay-web');
    let closeweb=document.getElementById('close-web');

    //Social Section
    let socialDiv=document.getElementById('social');
    let overlaysocial=document.getElementById('overlay-social');
    let closesocial=document.getElementById('close-social');

    //content Creation Section
    let createDiv=document.getElementById('create');
    let overlaycreate=document.getElementById('overlay-create');
    let closecreate=document.getElementById('close-create');

    //Motion Section
    let motionDiv=document.getElementById('motion');
    let overlaymotion=document.getElementById('overlay-motion');
    let closemotion=document.getElementById('close-motion');

    //Design Section
    let designDiv=document.getElementById('design');
    let overlaydesign=document.getElementById('overlay-design');
    let closedesign=document.getElementById('close-design');

    //Events Fire
    //Web
    webDiv.addEventListener('click',()=>{myFun(overlayweb,closeweb)})
    //social
    socialDiv.addEventListener('click',()=>{myFun(overlaysocial,closesocial)})
    //create
    createDiv.addEventListener('click',()=>{myFun(overlaycreate,closecreate)})
    //motion
    motionDiv.addEventListener('click',()=>{myFun(overlaymotion,closemotion)})
    //design
    designDiv.addEventListener('click',()=>{myFun(overlaydesign,closedesign)})

        
    //public function
    function myFun(overlay,close){
        overlay.classList.add('showoverlay');
        overlay.classList.remove('hideoverlay');
        close.addEventListener('click',()=>{
              overlay.classList.add('hideoverlay');
        })
    }
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:15,
            nav: true,
            autoplay: true,
            // dots: true,
            // responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true
                    // loop:false
                }
            }
        })
      });
    //whats App Icon
    // var whatsIcon=document.getElementById('whatsIcon');
    // function showIcon(){
    //     whatsIcon.style.display="block";
    //     whatsIcon.style.transition = "all 2s"
       
    // }
    // setTimeout(showIcon,3000);

swal("Your Welcome!", "You clicked the button!", "success");
})

