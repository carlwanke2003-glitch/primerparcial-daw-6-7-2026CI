"use strict";

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponibilidad: true,
    categoria: "Monitor",
};

//los objetos por defecto si se modificar a pesar de que sea const

Object.freeze(producto); //con esto el objet ya no puede ser modificado,
//con freeze no se puede agregar ni eliminar propiedades
//con freeze tampoco se puede cambiar valores

console.log(Object.isFrozen(producto));

Object.seal(producto);
producto.precio = 400;
console.log(producto.precio);