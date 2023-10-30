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
//console.log(ageOver)

const empiezaPorJ = gente.filter(function(persona) {
  return persona.nombre.charAt(0) === 'J';
})
//console.log(empiezaPorJ)




//Función Map
//Mayores de 25 años
let mayoresDe25 = gente.map(function(person) {
  if (person.edad > 25) {
    return person;
  }
});
mayoresDe25 = mayoresDe25.filter(function(person) {
  return person !== null;
});
//console.log(mayoresDe25);

//Array con gente que empieza por J
let porJ = gente.map(function(person) {
  if (person.nombre.charAt(0) === 'J') {
    return person;
  }
});
porJ = porJ.filter(function(person) {
  return person !== null;
});
//console.log(porJ);

//Números al cuadrado
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const arrayAlCuadrado = numbers.map((value) => value * value)
//console.log(arrayAlCuadrado)

//Filter
//Números impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares = numbers2.filter(function(numero) {
  return numero % 2 !== 0;
});
console.log(numerosImpares);

//Platos veganos
const foodList = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];

const isVegan = foodList.filter (food => food.isVeggie).map(veganFood => `Que rico ${veganFood.name} me voy a comer!`,
)
//console.log(isVegan)

//Reduce
const numbers3 = [39, 2, 4, 25, 62];
const sum = numbers3.reduce((a,b) => a * b, 1)
console.log(sum)

//Extras
//Map
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffAficiones = staff.map(member => `${member.name} es ${member.role} y le gusta ${member.hobbies.join(' y ')}`)
//console.log(staffAficiones)

//Extra filter
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
const over300 = inventory.filter((inventory) => inventory.price > 300)
//console.log(over300)


//Extra Reduce

const sentenceElements = [
  'Me',
  'llamo',
  /* Tu nombre aquí! */,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
  ];
 
  const oneSentence = sentenceElements.reduce ((sentence, word) => {
  if (word === `/* Tu nombre aquí! */`) {
    return sentence + 'Adrián';
} else {
    return sentence + ' ' + word;
}
});
console.log(oneSentence.trim("Adrián"));
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


