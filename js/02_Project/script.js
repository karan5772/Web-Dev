const num = document.getElementById("n");
let c = 0;
num.addEventListener("click", count);

function count(){
    c=(c+1);
    var a =c.toString().padStart(2,"0");
    n.textContent = `${a}`;
}