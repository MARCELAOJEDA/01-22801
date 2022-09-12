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