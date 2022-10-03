// window.addEventListener('load',()=>{
//     //Selecting Elements
//     //Web Section
//     let webDiv=document.getElementById('web');
//     let overlayweb=document.getElementById('overlay-web');
//     let closeweb=document.getElementById('close-web');

//     //Social Section
//     let socialDiv=document.getElementById('social');
//     let overlaysocial=document.getElementById('overlay-social');
//     let closesocial=document.getElementById('close-social');

//     //content Creation Section
//     let createDiv=document.getElementById('create');
//     let overlaycreate=document.getElementById('overlay-create');
//     let closecreate=document.getElementById('close-create');

//     //Motion Section
//     let motionDiv=document.getElementById('motion');
//     let overlaymotion=document.getElementById('overlay-motion');
//     let closemotion=document.getElementById('close-motion');

//     //Design Section
//     let designDiv=document.getElementById('design');
//     let overlaydesign=document.getElementById('overlay-design');
//     let closedesign=document.getElementById('close-design');

//     //Events Fire
//     //Web
//     webDiv.addEventListener('click',()=>{myFun(overlayweb,closeweb)})
//     //social
//     socialDiv.addEventListener('click',()=>{myFun(overlaysocial,closesocial)})
//     //create
//     createDiv.addEventListener('click',()=>{myFun(overlaycreate,closecreate)})
//     //motion
//     motionDiv.addEventListener('click',()=>{myFun(overlaymotion,closemotion)})
//     //design
//     designDiv.addEventListener('click',()=>{myFun(overlaydesign,closedesign)})

        
//     //public function
//     function myFun(overlay,close){
//         overlay.classList.add('showoverlay');
//         overlay.classList.remove('hideoverlay');
//         close.addEventListener('click',()=>{
//               overlay.classList.add('hideoverlay');
//         })
//     }
//     $(document).ready(function(){
//         $('.owl-carousel').owlCarousel({
//             loop:true,
//             margin:15,
//             nav: true,
//             autoplay: true,
//             // dots: true,
//             // responsiveClass:true,
//             responsive:{
//                 0:{
//                     items:1,
//                     nav:false
//                 },
//                 600:{
//                     items:2,
//                     nav:false
//                 },
//                 1000:{
//                     items:3,
//                     nav:true
//                     // loop:false
//                 }
//             }
//         })
//       });

swal("Your Welcome!", "You clicked the button!", "success");



// })

window.addEventListener("load",()=>{let e=document.getElementById("web"),t=document.getElementById("overlay-web"),l=document.getElementById("close-web"),n=document.getElementById("social"),d=document.getElementById("overlay-social"),a=document.getElementById("close-social"),o=document.getElementById("create"),s=document.getElementById("overlay-create"),i=document.getElementById("close-create"),c=document.getElementById("motion"),y=document.getElementById("overlay-motion"),r=document.getElementById("close-motion"),m=document.getElementById("design"),E=document.getElementById("overlay-design"),v=document.getElementById("close-design");function g(e,t){e.classList.add("showoverlay"),e.classList.remove("hideoverlay"),t.addEventListener("click",()=>{e.classList.add("hideoverlay")})}e.addEventListener("click",()=>{g(t,l)}),n.addEventListener("click",()=>{g(d,a)}),o.addEventListener("click",()=>{g(s,i)}),c.addEventListener("click",()=>{g(y,r)}),m.addEventListener("click",()=>{g(E,v)}),$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,autoplay:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1e3:{items:3,nav:!0}}})})});