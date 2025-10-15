
let indice = 0;
while (indice < 5 ){
    console.log ("vuelta :" , indice );
    indice++;
}

let frutas = ['manzana','banana','babana'];
for (let fruta of frutas){
    console.log('fruta : ', fruta);
}

const persona = {
    nombre: 'laura',
    apellido: 'ramirez',
    direccion: {calle:'calle falsa', numero: 123},
    carrera: {
        titulo: 'programadora',
        enCurso: true,
        cantMateriasAprobadas: 3,
        materiasAprobadas: [
            'programacion inicial',
            'estructura de datos',
            'introduccion a la informatica',
        ]
    }
};

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.direccion)

console.log(persona.direccion.calle)
console.log(persona.direccion.numero)


console.log(persona.nombre)
console.log(persona.apellido)
console.log(
    `direccion: ${persona.direccion.calle} ${persona.direccion.numero}`
);


console.log('carrera: ');
console.log(persona.carrera.titulo);
if (persona.carrera.enCurso===true){
    console.log('estado:  en curso');
}   else {
    console.log('estado: no en curso');
}






