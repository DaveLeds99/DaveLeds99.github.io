//COLORCHANGING FUNCTIONS
function cChangeByRGB () {
    let r = document.querySelector("#R").value;
    let g = document.querySelector("#G").value;
    let b = document.querySelector("#B").value;
    baseplate.style.backgroundColor = `rgb(${r}, ${g}, ${b} )`;
}
function colorChangeByMain () {
    let centerChanger = document.querySelector("#centerChanger");
    baseplate.style.backgroundColor = centerChanger.value;
}
function cChangeByHex () {
    let Hex = document.querySelector("#HexChanger");
    Hex.textContent = "#";
    baseplate.style.backgroundColor = Hex.value;
}
