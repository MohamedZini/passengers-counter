let counter = document.querySelector("#count-el");
let btn = document.querySelector(".inc");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    counter.textContent++; 
})

let bnt1 = document.querySelector(".save");
bnt1.addEventListener("click", (event) => {
    let p = document.querySelector("p");
    if (counter.textContent > 0) {
        p.textContent += counter.textContent+" - ";
        counter.textContent = 0;
    }
});
