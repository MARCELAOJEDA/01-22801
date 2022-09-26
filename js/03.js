const miDoc=document;
console.log(miDoc)

let miH1=miDoc.getEmentsByTagName("H6");
let miH2=miDoc.getEmentById("seraH2O");
let miH3=miDoc.getElementsByClassName("tocoH3");
let miH4=miDoc.getElementsByName();
let miH5=document.getSelection();

console.log(miH1);
console.log(miH2);
console.log(miH3);

miH3.innerText="modifico el texto";
miH3.innerHTML="<button> Esto es un boton </button>";

miH2.innerText="modifico el texto";
miH2.innerHTML="<button> Esto es un boton </button>";

const miBoton="<button> Esto es un boton </button></br>";
miH2.innerHTML=miBoton;
const cant_botones=5;

for(let i=0; i<cant_botones;i++){
    miH2.innerHTML= miBoton + miBoton;
    miH2.innerHTML += miBoton;
}
let cantidad=0;
const video= "https://www.youtube.com/watch?v=E-qUemyy5TE&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=5";

for(let i=0; i<cantidad;i++){
    miH3.innerHTML= video;
}

{/* <input>Ingrese cantidad</input> */}