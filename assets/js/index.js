let price = document.querySelector(".firstPrice");
let quantity = document.querySelector(".quantity")
let sum = document.querySelector(".sum")
let sub = document.querySelector(".sub")
let total = document.querySelector(".totalValue")

sum.addEventListener("click", () =>{
    quantity.innerHTML++;
    total.innerHTML = quantity.innerHTML * price.innerHTML;
});

sub.addEventListener("click", () =>{
    quantity.innerHTML--;
    total.innerHTML = quantity.innerHTML * price.innerHTML;
});






