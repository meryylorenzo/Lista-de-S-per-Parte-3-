let listaDeSuper = [];

listaDeSuper [0]="sal"
listaDeSuper [1]="papa"
listaDeSuper [2]="huevos"
listaDeSuper [3]="lechuga"

console.log(listaDeSuper);

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper[listaDeSuper. length - 1];

console.log(ultimoElemento)

listaDeSuper.push("leche", "arroz");

listaDeSuper.unshift("cafe", "azucar");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);

function logItems(arreglo) {
    arreglo.forEach((producto, indice) => {
        console.log(`${indice}: ${producto}`);
    });
}

console.log("Lista de Supermercado:")
logItems(listadeSuper)

let listalácteos = ("leche", "crema", "yogur");

console.log("Lista de lácteos:");
logItems(listalácteos)