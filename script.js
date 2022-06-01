console.groupCollapsed("variables var, ya no se usan");
var variable_1;
variable_1 = "hola";
console.log(variable_1);
var variable_2;
variable_2 = "hello";
console.log(variable_2);
console.groupEnd();

console.groupCollapsed("reasignacion y redeclaracion var");
var variable_1 = "HOLA pero en mayuscula";
console.log(variable_1);
var variable_2 = "HELLO pero en mayuscula";
console.log(variable_2);
console.groupEnd();

console.groupCollapsed("variables let, estas chi");
let otraVariable_1 = true;
console.log(otraVariable_1);
let otraVariable_2 = true;
console.log(otraVariable_2);
console.groupEnd();

console.groupCollapsed("reasignacion let");
otraVariable_1 = false;
console.log(otraVariable_1);
otraVariable_2 = false;
console.log(otraVariable_2);
console.groupEnd();

console.groupCollapsed("variables const, nada de re");
const nombre = "Ariel";
const apellido = "Zane";
console.log(nombre, apellido);
console.groupEnd();
                                
console.groupCollapsed("objeto");
let unObjeto = {
    texto: "textito", 
    numero: 123,
    booleano: false  
};
console.log(unObjeto.texto,unObjeto.numero);
console.log(unObjeto.booleano)
console.groupEnd();


                                
