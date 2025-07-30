// let button = document.getElementById("btn")
// let input = document.getElementById("inp")

// input.addEventListener("change", function(e) {
//     console.log(e.target.value)
// })

// button.addEventListener("click", function() {
//     console.log(input.value)
// })

// let select = document.getElementById("select")

// select.addEventListener("change", function(){
//     console.log(select.value)
// })

let input = document.querySelector("#inp");
let button = document.querySelector("#btn");
let min = document.querySelector("#minus");
let text = document.querySelector("#raqam");
let plu = document.querySelector("#plus");
let colr = document.querySelector("#in");

button.addEventListener("click", function(a) {
    text.textContent = input.value;
});

plu.addEventListener("click",function(){
    text.textContent = Number(text.textContent) + 1
})

min.addEventListener("click", function(){
    text.textContent = Number(text.textContent) - 1
})

colr.addEventListener("input", function(e){
    text.style.color = e.target.value
})