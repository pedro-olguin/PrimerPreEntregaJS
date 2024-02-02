alert("¡Bienvenido/a!");
let usuario = prompt("¿Cual es tu nombre?");

alert(`Es un placer atenderte ${usuario}`);

let categorias = prompt(`¿${usuario} que te gustaria comer? \n
Elije el numero de la categoria\n
1- Lomos\n
2- Hamburguesas\n
3- Pizzas\n
`);

switch (categorias) {
  case "1":
    alert(`Elejiste la opcion de Lomos, nuestra variedad es la siguiente`);
    break;
  case "2":
    alert(
      `Elejiste la opcion de Hamburguesas, nuestra variedad es la siguiente`
    );
    break;
  case "3":
    alert(`Elejiste la opcion de Pizzas, nuestra variedad es la siguiente`);
    break;

  default:
    alert("Opcion incorrecta");
    break;
}
let lomos;
let hamburguesas;
let pizzas;

function suma(product, cant) {
  let total = product * cant;
  alert(`El total del pedido es ${total}`);
}

if (categorias === "1") {
  lomos = prompt(`indica la opcion correcta con su numero \n
    1- lomo clasico valor $5000\n
    2- lomo completo valor $6500 \n
    3- lomo especial valor $8000`);
  switch (lomos) {
    case "1":
      lomos = 5000;
      break;
    case "2":
      lomos = 6500;
      break;
    case "3":
      lomos = 8000;
      break;
  }

  let cantLomos = parseInt(prompt("¿Cuantos queres?"));
  suma(lomos, cantLomos);

  alert(
    "si quieres agregar algo mas, espera a la proxima PreEntrega. Gracias por tu compra"
  );
} else if (categorias === "2") {
  hamburguesas = prompt(`indica la opcion correcta con su numero \n
    1- hamburguesa clasica valor $3500\n
    2- hamburguesa completa valor $5000 \n
    3- hamburguesa especial valor $6500`);
  switch (hamburguesas) {
    case "1":
      hamburguesas = 3500;
      break;
    case "2":
      hamburguesas = 5000;
      break;
    case "3":
      hamburguesas = 6500;
      break;
  }

  let cantHamb = parseInt(prompt("¿Cuantas queres?"));
  suma(hamburguesas, cantHamb);

  alert(
    "si quieres agregar algo mas, espera a la proxima PreEntrega. Gracias por tu compra"
  );
} else if (categorias === "3") {
  pizzas = prompt(`indica la opcion correcta con su numero \n
    1- Mozzarella valor $5000\n
    2- Especial valor $7000 `);
  switch (pizzas) {
    case "1":
      pizzas = 5000;
      break;
    case "2":
      pizzas = 7000;
      break;
  }

  let cantPizzas = parseInt(prompt("¿Cuantas queres?"));
  suma(pizzas, cantPizzas);

  alert(
    "si quieres agregar algo mas, espera a la proxima PreEntrega. Gracias por tu compra"
  );
}
