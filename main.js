//Funciones flecha.

// function saludar() {
//     return "Hola";
//   }
  //Convertir la funcion anterior en flecha

const saludar = () => "Hola"
console.log(saludar())

// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = (a,b) => a / b;
console.log(division(6,2))

// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombre("Adrián"))

// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

const test2 = () => "Función test 2 ejecutada."
console.log(test2());
const test1 = (callback) => {
    callback()
  }
test1(test2)




//Funciones foreach.

//Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];

const ageOver = gente.filter((gente)=> gente.edad > 25)
console.log(ageOver)

