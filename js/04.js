/*
let miDoc=document;

const miPerro ={
    "nombre":"Paco",
    "edad":5,
    "patas":4
};
console.log(miPerro.patas);

const miGato={
    nombre :"katu",
    edad:3,
    patas:4
};
console.log(miGato.nombre);

function Raton () {
    // return "Perez";
    this.nombre="Perez";
    this.edad=8;
}
const miRaton1 =Raton();
console.log(miRaton1);

miGato.cola=1;
console.log(miGato.cola);
console.log(miGato);
/*
class Raton {
    constructor(nombre){
        this.nombre=nombre;
    }
}
const miRaton2 = new Raton("Ratin");
console.log(miRaton2);
*/
class Video {
    constructor(formato,duracion,controles,alto,ancho){
this.formato=formato;
this.duracion=duracion;
this.controles=controles;
this.alto=alto;
this.ancho=ancho;
    }
}
console.log(Video);

class Audio {
    constructor(formato,duracion,controles){
this.formato=formato;
this.duracion=duracion;
this.controles=controles;
    }
}
console.log(Video);

class Boton{
    constructor(texto,color,alto,ancho,borde){
        this.texto=texto;
        this.color=color;
        this.alto=alto;
        this.ancho=ancho;
        this.borde=borde;
    }
}
console.log(Boton);

class Elementos {
    constructor(array,boton,video,audio){
        this.array=array;
        this.boton=boton;
        this.video=video;
        this.audio=audio;

    }
}
console.log(Elementos);





