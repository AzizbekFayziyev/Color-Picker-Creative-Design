window.addEventListener("DOMContentLoaded", function () {
    
 let body = document.querySelector("body"),
 color1 = document.querySelector(".color1"),
 color2 = document.querySelector(".color2"),
 box = document.querySelector(".box"),
 code = document.querySelector(".code"),
 info = document.querySelector(".info"),
 btn = document.querySelector("#btn");

 btn.addEventListener("click",function () {
     body.style.background = `linear-gradient(${color1.value},${color2.value})`;
     box.style.background = `linear-gradient(${color1.value},${color2.value})`;
     code.value = `background: linear-gradient(${color1.value},${color2.value});`
     info.style.display = "block";
     navigator.clipboard.writeText( code.value);

     setTimeout(function () {
        info.style.display = "none";
     },2000)
 });

});