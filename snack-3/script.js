const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
//andiamo ad usare il metodo map per creare un nuovo array con i numeri incrementati di 1
const Sum = numbers.map((number) => number + 1);

console.log(Sum);