const button = document.querySelector(".btn");

function show() {
    button.classList.add("newstyle");
};


button.addEventListener("click",show);

//밑에거랑 위에거랑 똑같음 alternative way to use arrow function
//button.addEventListener("click",()
//=> {button.classList.add("newstyle")});

//Hamburger Menu
const hamburgerBtn = document.querySelector(".ham");
const navigation = document.querySelector(".navigation")
hamburgerBtn.addEventListener("click",()=> {navigation.classList.toggle("responsive")},false);


let w_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let m_name =["January","February","March","April","May","June","July","August","September","October","November","December"];


