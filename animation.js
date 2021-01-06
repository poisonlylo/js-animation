
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navbar");
hamburger.addEventListener("click" , () => {
    navlinks.classList.toggle("open");
})
/*------------------- table-de-modules------------------*/
//const mo = array.from(document.querySelectorAll(".table"))
const table = document.querySelector(".table");
const fstsemestre = document.querySelector(".fst-semestre ");

/* fstsemestre.addEventListener("click" ,(e)=>{
    table.classList.add("fade-in");
})
*/

const anim = document.querySelector(".anim");
window.addEventListener("click" , () => {
    table.classList.add("fade");
})

