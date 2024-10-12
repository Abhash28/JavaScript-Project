/*query selector */
/* var a=document.querySelector('#hero button')
 */
/* /*html changer */
/*a.innerHTML='no' */

/*css changer */
/* a.style.color='red'
a.style.backgroundColor='white' */

/*event listener */ 

/*open nav bar */
var barmenubtn=document.querySelector("#bar")
var navbarmenu=document.querySelector('#navbar')
barmenubtn.addEventListener("click",function(){
    navbarmenu.style.right=0
    navbarmenu.style.transition='0.6s ease'
})

/*close nav bar */
var closenav=document.querySelector("#close")
closenav.addEventListener("click",function(){
    navbarmenu.style.right='-300px'
})