let searchicon = document.querySelector(".srch")
let srchicon = document.querySelector("#gglsrch")
let form = document.querySelector("#yt")
let form2 = document.querySelector("#ggl")
searchicon.addEventListener("click", function(){
    form.submit();
});

srchicon.addEventListener("click", function(){
    form2.submit();
})
gsap.from("#txt",{
    opacity:0,
    y:-80,
    ease:"power1.inOut"
})


gsap.from("#landingimg",{
    opacity:0,
    x:400,
    ease:"power1.inOut"
})