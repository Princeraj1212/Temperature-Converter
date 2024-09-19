const calcius = document.querySelector("#calcius");
const farenheit = document.querySelector("#farenheit");
const kelvin = document.querySelector("#kelvin");
console.log(calcius, farenheit, kelvin);

calcius.addEventListener("input", function(){
    let c = parseFloat(calcius.value);
    let f = (c * 9 / 5) + 32; 
    let k = c + 273.15;
    farenheit.value = f;
    kelvin.value = k;
});

farenheit.addEventListener("input", function(){
    let f = parseFloat(farenheit.value);
    let c = (f - 32) * 5 / 9; 
    let k = (f - 32) * 5 / 9 + 273.15;
    calcius.value = c;
    kelvin.value = k;
});

kelvin.addEventListener("input", function(){
    let k = parseFloat(kelvin.value);
    let c = k - 273.15; 
    let f = (k - 273.15) * 9 / 5 + 32;
    calcius.value = c;
    farenheit.value = f;
});