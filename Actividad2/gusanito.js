const alto = Math.floor(Math.random()*10) + 1; //largo random
const ancho =  Math.floor(Math.random()*10) + 1; //ancho random

//imprimimos el alto y ancho 
console.log('alto:'+ alto);
console.log('ancho:' + ancho);

let fibo = [];

//variables fibo
let a=1;  //primer valor
//otros que vamos a ocupar
let b=0; 
let c=0; 
let d=0;

//imprimimos los array
if(alto>1){
    for (let i = 0; i <= alto-1; i++){
        fibo[i] = new Array();
        for (let x=0; x < ancho; x++){ 
            let c=a+b;  //le damos a C el valor de A + B 
            fibo[i].push(c);
            if(d == 1){
                b=a; //le damos a B  el valor de A
                a=c; // ahora A vale C (que es A+B)
            }
            d=1;
        }
        //creamos el efecto de gusanito despues de la primera fila
        if(i%2==1){
            fibo[i].reverse();
        }
    }
}
console.log(fibo);