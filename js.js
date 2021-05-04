alert("hola mundo");

//calcular el precio total de compra de un telefono
const efectivoBank = 1200;
const pricesPhone = 300;
const accesory = 10;
const impuesto = 0.1;

function calc() {
  while (efectivoBank > 400) {
    const priceTotal = pricesPhone + pricesPhone * impuesto + accesory;
    const efectivoActual = efectivoBank - priceTotal;
    console.log(
      `tienes: ${efectivoActual} luego de comprar un celular de ${priceTotal}`
    );
    return efectivoActual;
  }
}

calc();
