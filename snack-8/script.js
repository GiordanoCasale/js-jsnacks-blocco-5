const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
//come nell'esercizio precedente andiamo ad usare il metodo find per prendere l'oggetto dell'array con una caratteristica nello specifico
const myStudent = students.find(myStudent => myStudent.name === "Marco Lanci")


console.log(myStudent.class)