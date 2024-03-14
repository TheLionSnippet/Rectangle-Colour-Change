var rect = document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insideValue = details.clientX - rectangleLocation.left

    if(insideValue<rectangleLocation.width/2){
      var redColour = gsap.utils.mapRange(
        0,
        rectangleLocation.width/2,
        255,
        0,
        insideValue
        );
        gsap.to(rect,{
            backgroundColor : `rgb(${redColour},0,0)`,
            ease : Power4,
        });
    }
    else{
        var blueColour = gsap.utils.mapRange(
            rectangleLocation.width/2,
            rectangleLocation.width,
            255,
            0,
            insideValue
            );
            gsap.to(rect,{
                backgroundColor : `rgb(0,0,${blueColour})`,
                ease : Power4,
            });
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})