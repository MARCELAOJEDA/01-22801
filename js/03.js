const miDoc=document;
console.log(miDoc);

let miH1=miDoc.getElementsByTagName("H6");
console.log(miH1);

let miH2=miDoc.getElementById("seraH2O");
console.log(miH2);

let miH3=miDoc.getElementsByClassName("tocoH3");
console.log(miH3);

let miH4=miDoc.getElementsByName();
let miH5=document.getSelection();

miH1.innerHTML="<button> Esto es un boton </button>";
miH2.innerText="Modifico el texto pero no pasa nada";

const miBoton="<button> Esto es un boton </button>";
miH3.innerHTML=miBoton;

const cant_botones=5;

for(let i=0; i<cant_botones;i++){
    miH3.innerHTML= miH3.innerHTML  + miBoton;
    // miH3.innerHTML += miBoton;
}

let cant_video= parseInt(prompt("Ingrese la cantidad de video q necesita ver"));

for(let i=0; i<cant_video;i++){
    miH3.innerHTML= miH3.innerHTML + miBoton;
    // miH3.innerHTML += miBoton; 
}

/*const video=[https://www.youtube.com/watch?v=B0UqCeL2QTU&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=1,
    https://www.youtube.com/watch?v=-u5pKNlM9OQ&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=2,
    https://www.youtube.com/watch?v=B005zHFUQtY&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=3,
    https://www.youtube.com/watch?v=E-qUemyy5TE&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=4,
    https://www.youtube.com/watch?v=E-qUemyy5TE&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=5,
    https://www.youtube.com/watch?v=eBkKPtPEGSI&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=6,
    https://www.youtube.com/watch?v=TaEqI6V3Zjw&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=7,
    https://www.youtube.com/watch?v=BkwoFWiWKaw&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=8,
    https://www.youtube.com/watch?v=eiMHCRDhncs&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=9,
    https://www.youtube.com/watch?v=YMxPpluIiCE&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=10,
    https://www.youtube.com/watch?v=iuy6MmtxlAQ&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=11,
    https://www.youtube.com/watch?v=5F13D9aY76k&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=12,
    https://www.youtube.com/watch?v=O44EK5Xegz8&list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6&index=13];

for(let i=0; i<array.length;i++){
    console.log(video[i])
        
}*/

{/*let cantidadV=<input>Ingrese cantidad</input> */}
