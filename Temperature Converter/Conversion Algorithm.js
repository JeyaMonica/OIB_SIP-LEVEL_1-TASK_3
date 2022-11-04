const FahrenheitConversion=() =>{
    var celcius = parseFloat(document.querySelector("#Celcius").value);
    var faren = (1.8 * celcius) + 32;
    var b = faren.toFixed(2);
    document.querySelector("#Celcius").value = celcius;
    document.querySelector("#Fahrenheit").value = b;
}
const CelciusConversion=()=>{
    var fahrenheit=parseFloat(document.querySelector("#Fahrenheit").value);
    var celci=(fahrenheit-32)/1.8;
    var c=celci.toFixed(2);
    document.querySelector("#Celcius").value = c;
    document.querySelector("#Fahrenheit").value = fahrenheit;
}