import {type} from "./handTyping.js";




$(document).ready(function () {
    //  Gestion de réalisation pour les grands écrans
    if(window.innerWidth>1180)  {
        const realisHeight = window.innerHeight- document.querySelector("header").scrollHeight  - 0.04*window.innerHeight -30 -50;
    document.querySelector(".realis").style.height = realisHeight +"px";
     
    // déplacement des cartes réalisations par rapport à la fenêtre
    
      let posX = (0.65*document.querySelector("body").clientWidth)/2 - 200;
   
      $(".realis .card").css("transform", `translateX(${posX}px)`);
      $(".realis>img:first-child").click(function(){
          
          if (
              posX >
              ((0.65 * document.querySelector("body").clientWidth) / 2 -
                  200) -
                  3 * (0.65 * document.querySelector("body").clientWidth + 400)
          ) {
              posX -= (400 + 0.65 * document.querySelector("body").clientWidth);
          }
          
              $(".realis .card").css("transform", `translateX(${posX}px)`);
      })
      $(".realis>img:last-child").click(function(){
          
          if (
              posX <
              (0.65 * document.querySelector("body").clientWidth) / 2 - 250
          ) {
              posX += 400 + 0.65 * document.querySelector("body").clientWidth;
          }
          
          $(".realis .card").css("transform", `translateX(${posX}px)`);
      })
    }

    $(".realis").hide();
    $(".techno").hide();
    $(".contact").hide();
    $(".presentText").animate({ opacity: 1 }, 1500);
    
    setTimeout(() => $("#animText1").addClass("element"), 2000);
    setTimeout(type, 3500);
    
    
    
    $("nav").on("mousemove", (e) => {
        let centerUl =
        e.currentTarget.offsetParent.offsetLeft +
        e.currentTarget.offsetWidth / 2;
        
        $("nav").css({
            transform: "rotateY(" + -(e.clientX - centerUl) / 35 + "deg)",
        });
    });
    
            
            
            // gestion des liens de la nav et de la navMobile
            $("nav a[id='lien1']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".presentText").show().animate({ opacity: 1 }, 800);
                });
            }  
            );
            $(".navMob a[id='lien1']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".presentText").show().animate({ opacity: 1 }, 800);
                });
                $(".bar1").toggleClass("active");
                $(".bar2").toggleClass("active");
                $(".bar3").toggleClass("active");
                $(".navMob").toggleClass("active");
            }  
            );
            $("nav a[id='lien2']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".realis").show().animate({ opacity: 1 }, 800);
                });
            }  
            );
            $(".navMob a[id='lien2']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".realis").show().animate({ opacity: 1 }, 800);
                });
                $(".bar1").toggleClass("active");
                $(".bar2").toggleClass("active");
                $(".bar3").toggleClass("active");
                $(".navMob").toggleClass("active");
            }  
            );
            $("nav a[id='lien3']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".techno").show().animate({ opacity: 1 }, 800);
                });
            }  
    );
            $(".navMob a[id='lien3']").click(function() {
                $("main>*").animate({ opacity: 0 }, 300, () => {
                    $("main>*").hide();
                    $(".techno").show().animate({ opacity: 1 }, 800);
                });
                $(".bar1").toggleClass("active");
                $(".bar2").toggleClass("active");
                $(".bar3").toggleClass("active");
                $(".navMob").toggleClass("active");
            }  
    );
  


    // Gestion de la nav en mobile
    $(".burger").click(()=>{
        $(".bar1").toggleClass("active");
        $(".bar2").toggleClass("active");
        $(".bar3").toggleClass("active");
        $(".navMob").toggleClass("active");
    })
    
});
