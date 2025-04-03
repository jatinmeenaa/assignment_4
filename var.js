// BMI calc idk
function calculateBMI(w, h) {
    if (w <= 0 || h <= 0) return "invalid"; 
    return w / (h * h); 
}

// temp convert
function cToF(c) {
    return (c * 9 / 5) + 32; 
}


let w = 70;
const h = 1.75;
let b = calculateBMI(w, h);
console.log("BMI:", b);

let tf = cToF(25);
console.log("25C to F:", tf);

if (b < 18.5) {
    console.log("under weight");
} else {
    console.log("good");
}


let ppl = ["Alice", "Bob", "Charlie"];
let list = "<ul>";
for (let i = 0; i < ppl.length; i++) {  
    list += "<li>" + ppl[i] + "</li>";
}
list += "</ul>";

document.getElementById("content").innerHTML += list;
