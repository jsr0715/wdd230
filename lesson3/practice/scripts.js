const button = document.querySelector(".btn");

function show() {
    button.classList.add("newstyle");
};


button.addEventListener("click",show);

//밑에거랑 위에거랑 똑같음 alternative way to use arrow function
//button.addEventListener("click",()
//=> {button.classList.add("newstyle")});

