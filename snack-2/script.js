const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
//andiamo ad usare il metodo map per creare un nuovo array con solo gli elementi che ci servono
const names = people.map((element) =>{
  return element.name
})

console.log(names)