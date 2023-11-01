//Numbers
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");
const n0 = document.querySelector("#n0");
//Operators
const clear = document.querySelector("#clear");
const div = document.querySelector("#div");
const mult = document.querySelector("#mult");
const rest = document.querySelector("#rest");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");
//
const textA = document.querySelector(".textA");


//MATH FUNCTIONS
function calcu(o) {
    if (o=="1" || o=="2" || o=="3" || o=="4" || o=="5" || o=="6" || o=="7" || o=="8" || o=="9" || o=="0" || o=="÷" || o=="*" || o=="-" || o=="+") {
        console.log(o);
        textA.value += o;
    }
    switch (o) {
        case "÷":
            div.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {div.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "*":
            mult.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {mult.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "-":
            rest.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {rest.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "+":
            add.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {add.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "=":
            equal.style.backgroundColor = "red";
            solve();
            setTimeout(() => {equal.style.backgroundColor = "brown";}, 200);
            break;
    }
};
function solve() {
    let x = textA.value;
    let y = math.evaluate (x);
    textA.value = y;
}

function clearing() {
    textA.value = "";
};
