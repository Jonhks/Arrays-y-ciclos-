// elementos del html
// const root = document.getElementById('root');

// eventos


// funciones

// generando un arreglo con ejemplos de tipos de dato
// const arreglo = ["Jonh", 34, true, undefined, null];


// const nueva = prompt('A quien quieres agregar?')

// const nombres = ["Noe", "Gaby", "Edimar", "Africa", "Agustina", "Danylexy"];

// nombres[0];

// nombres.unshift(nueva);
// nombres.push(nueva);
// root.innerHTML = nombres[2];

// const nombre = 'jonh'
// console.log(nombres);

// const nombres = ["Noe", "Gaby", "Edimar", "Africa", "Agustina", "Danylexy"];
// const user = prompt('login usuario')
// const root = document.getElementById('root').innerHTML = `Hola ${user}`


// While
// Estos bucles se utilizan cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, siempre que se cumpla una condición. Se más sencillo de comprender que el bucle FOR, pues no incorpora en la misma línea la inicialización de las variables su condición para seguir ejecutándose y su actualización. Sólo se indica, como veremos a continuación, la condición que se tiene que cumplir para que se realice una iteración.

// inicializacion

// while (condición){ 
  //sentencias a ejecutar 
// }

// While se tiene la condicion para ejecutar el código
// let index = 20; // index = 2

// while(index < 10){
//   index ++ 
//   console.log(index);
// }

// =>


// El bucle do...while es la última de las estructuras para implementar repeticiones de las que dispone en Javascript y es una variación del bucle while visto anteriormente. Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, igual que el bucle WHILE, con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.

// inicializacion

// do { 
//   sentencias del bucle 
// } while (condición)

// let index = 0; //  index = 5

// do{
//   index++
//   console.log(index);
// }while(index < 5); // true

// let pass = ''; // 123456

// do{
//   pass = prompt('Ingresa el password');
// }while(pass !== '123456'); // false


// alert('Bienvenida al sitio!!');

// For
// for(inicializaion; condicion; incremento){
  // ejecucion del código
// }
              // index =  
// for(let index = 0; index < 10; index++){ // 0 - 9
//   console.log(index); // 
// }


// const bidimen = [
//   ["enero", "febrero", "marzo", "abril"], // 0
//     // 0       // 1      // 2     3
//   ["uno", "dos", "tres", "cuatro"], // 1
//   // 0      1       2       3
//   [
//     ["huna", "hdos", "htres", "hcuatro"], // 0
//     ["1", "2", "3", "4"] // 1
//   ] // 2
// ] // primer arreglo

// // console.log(bidimen);
// console.log(bidimen[2][1][1]);



// const nombres = ["Noe", "Gaby", "Edimar", "Africa", "Agustina", "Danylexy", "Naty", "Eli", "Agus"];

// nombres[0] // Noe
// nombres[1] // Gaby
// nombres[2] // Edimar

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index])
// }
    //indices    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  10,   11
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 236, 58];
// let contador = 0; // 15

  //inicializador     condicion           incremento
for(let index = 0; index < numeros.length; index += 1){
  // contador = contador + numeros[index];
  console.log("indice=", index, "valor=", numeros[index])
}
// console.log("la suma total es =", contador);


// index++
// index = index +1
// index +=1
