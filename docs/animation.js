$(document).ready(function(){
    $(window).scroll(function(){
        if ( $(this).scrolltop()>0){
            $('header').addClass('header2');
         }else{
            $('header').removeClass('header2');
         }
       })
})
 const btnLeft = document.querySelector(".btn-left"),
        btnRight=document.querySelector(".btn-right"),
        slider=document.querySelector("#slider"),
        sliderSeccion=document.querySelectorAll(".slider-seccion");

        btnLeft.addEventListener("click",e=> moveToLeft())
        btnRight.addEventListener("click",e=> moveToRight())

        setInterval(()=>{
moveToRight()
        },3000)
        

        let operacion = 0;
            counter=0,
        withImg = 100/sliderSeccion.length;

       function moveToRight(){
        if (counter>= sliderSeccion.length-1){
            counter = 0;
            operacion = 0;
            slider.style.transform=`translate(-${operacion}%)`;
            slider.style.transition="none"
        } else {
        counter++;
        operacion = operacion + withImg;
         slider.style.transform=`translate(-${operacion}%)`;
         slider.style.transition= "all ease .6s"
        }
        }
       function moveToLeft(){
        counter --;
        if (counter < 0){
            counter=sliderSeccion.length-1;
            operacion = withImg*(sliderSeccion.length)
            slider.style.transform=`translate(-${operacion}%)`;
            slider.style.transition="none"
        }
        operacion = operacion - withImg;
         slider.style.transform=`translate(-${operacion}%)`;
         slider.style.transition= "all ease .6s"
        }

