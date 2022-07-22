let opcion = parseInt(prompt('Seleccione una opcion \n 1.-Calcular promedio \n 2.-Ver Tabla de multiplicacion \n 3.-Realizar cuenta aritmetica \n 0.-Salir'));
while(opcion != 0){
    opcion = parseInt(prompt('Seleccione una opcion \n 1.-Calcular promedio \n 2.-Ver Tabla de multiplicacion \n 3.-Realizar cuenta aritmetica \n 0.-Salir'));
    switch(opcion){
        case 1:
            alert('Selecciono calcular promedio');
            let nota1 = parseInt(prompt('Ingrese la primer la nota'));
            while(nota1 < 1){
                nota1= parseInt(prompt('Porfavor ingrese un numero positivo'));
            }
            let nota2 = parseInt(prompt('Ingrese la segunda la nota'));
            while(nota2 < 1){
                nota2= parseInt(prompt('Porfavor ingrese un numero positivo'));
            }
            let nota3 = parseInt(prompt('Ingrese la tercera nota'));
            while(nota3 < 1){
                nota3= parseInt(prompt('Porfavor ingrese un numero positivo'));
            }
            let notas = (nota1 + nota2 + nota3)/3;
            alert('su promedio es de: '+ (notas));
            if(notas > 5){
                alert('Usted a aprobado la materia');
            }else if(notas < 6){
                alert('Usted desaprobo la materia');
            }
            break;
    
        case 2:
            alert('Selecciono ver tabla');
            let selTabla = parseInt(prompt('Seleccione la tabla que quiere ver. del 1 al 12'));
            while(selTabla < 1 || selTabla >12){
                selTabla= parseInt(prompt('Porfavor ingrese una tabla positiva y menor a 12'));
            }
    
            for (let i = 1; i <=10; i++) {
                alert(selTabla+' * '+ i + ' = '+ (selTabla*i))
            }
            break;

        case 3:
            alert('Selecciono Realizar cuenta aritmetica')
            let opcionAritmetica = parseInt(prompt('Ingrese que operacion que desea realizar. \n 1.-Suma \n 2.-Resta \n 3.-Multiplicacion \n 4.-Division \n 5.-Potencia \n 6.-Raiz \n 0.-Salir'));
            switch(opcionAritmetica){
                case 1:{
                    alert('Selecciono Realizar una Suma');
                    let ValorA = parseInt(prompt('Ingrese el primer valor'));
                    let ValorB = parseInt(prompt('Ingrese el segundo valor'));
                    let resultado = ValorA + ValorB;
                    alert('El resultado de la suma es: '+resultado);
                    }
                break;
    
                case 2:{
                    alert('Selecciono Realizar una Resta');
                    let ValorA = parseInt(prompt('Ingrese el primer valor'));
                    let ValorB = parseInt(prompt('Ingrese el segundo valor'));
                    let resultado = ValorA - ValorB;
                    alert('El resultado de la Resta es: '+resultado);
                    }
                break;
    
                case 3:{
                    alert('Selecciono Realizar una Multiplicaion');
                    let ValorA = parseInt(prompt('Ingrese el primer valor'));
                    let ValorB = parseInt(prompt('Ingrese el segundo valor'));
                    let resultado = ValorA * ValorB;
                    alert('El resultado de la Multiplicaion es: '+resultado);
                    }
                break;
    
                case 4:{
                    alert('Selecciono Realizar una Division');
                    let ValorA = parseInt(prompt('Ingrese el primer valor'));
                    let ValorB = parseInt(prompt('Ingrese el segundo valor'));
                    let resultado = ValorA / ValorB;
                    alert('El resultado de la Division es: '+resultado);
                    }
                break;
    
                case 5:{
                    alert('Selecciono Realizar una Potencia');
                    let base = parseInt(prompt('Ingrese la base'));
                    let expo = parseInt(prompt('Ingrese el exponente'));
                    let acu= 1;
                    
                    for (let i = 0; i < expo; i++) {
                        acu= acu * base;
                    }
                    alert('El resultado de la potencia es: '+ acu);
    
                    }
                break;
    
                case 6:{
                    let opcionRaiz= parseInt(prompt('Selecciono Realizar una Raiz \n Porfavor Elija \n 1.-Raiz Cuadrada \n 2.-Raiz Cubica \n 0.-Salir'));
                    switch(opcionRaiz){
                        case 1:{
                            let num = parseInt(prompt('Ingrese la base de la raiz cuadratica'));
                            while(num < 1){
                                num= parseInt(prompt('Porfavor ingrese una base positiva'));
                            }
                            let raizCuadrada = Math.sqrt(num);
                            alert('El resultado de su raiz cuadrada es: '+ raizCuadrada);
                            }
                            break;
                        
                        case 2:{
                            
                            let num = parseInt(prompt('Ingrese la base de la raiz cubica'));
                            while(num < 1){
                                num= parseInt(prompt('Porfavor ingrese una base positiva'));
                            }
                            let raizCubica = Math.pow(num, 1 / 3);
                            alert('El resultado de su raiz cubica es: '+ raizCubica);
                            }
                            }
                    }
            }  
            break;
        case 0:
            
            break;
        
        default:
            alert('El numero no esta en el menu ingrese otro');
            break;
            //shodan
    
    
    } 
}alert('Selecciono Salir, Saliendo...');

/* 

const personaje1 = {
    nombre: 'Homero',
    apellido: 'Simpson',
    calle: 'Av Siempreviva 742',
    edad: 38,
    peso: '50',
    hijos: {
        primero: 'Bart',
        segundo: 'Lisa',
        tercero: 'Maggie',
        cuarto: 'Hugo'
    }
} */
/* personaje1.peso = 150; */
/* console.log(personaje1.apellido) */

/* 
console.log(personaje1.peso);


alert('info de'+ personaje1.nombre+':\nEdad: '+personaje1.edad+' Años\nNombre del primer hijo: '+ personaje1.hijos.primero)

function personaje(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}


const personaje3 = new personaje('Bart', 'Simpson',10);
console.log(personaje3);


let cadena = 'soy una cadena de carACTeres';

console.log(cadena.length)

console.log(cadena.toLowerCase())
console.log(cadena.toUpperCase()) */

function personaje(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hablar = ()=> {
        console.log('Hola soy '+this.nombre);
    }
}

const personaje3 = new personaje('Bart', 'Simpson', 10);

const personaje5 = new personaje('Maggie');

personaje3.hablar();
personaje5.hablar();


console.log('nombre' in personaje3);//true
console.log('madre' in personaje3);//false
personaje3.madre = 'Marge';
console.log('madre' in personaje3);


for (const propiedad in personaje3) {
    console.log(first)
}


class Producto{
    constructor(nombre,precio,categoria){
        this.nombre = nombre.toUpperCase;
        this.precio = parseInt(precio);
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }

    vender(){
        this.vendido = true;
    }
}

let productoIngresado = prompt('ingresa el nombre del producto');
let precioIngresado = prompt('Ingresa el precio por unidad de venta, sin IVA');
let categoriaIngresada = prompt('Ingresa la categoria del producto');



const producto1 = new Producto(productoIngresado,precioIngresado,categoriaIngresada);


console.log(producto1);


producto1.sumarIva();
alert('El precio final del producto '+ producto1.nombre + ' es $' + producto1.precio)

producto1.vender();
console.log(producto1.vendido)













/* function saludar(){
    alert('Buenos dias')
}

function sumarDosNumero(numeroA, numeroB){
    let resultado = numA+Number;
    console.log(resultado);
}



sumarDosNumero(10,50);
sumarDosNumero(40,23);
 */





/* 
function saludarConNombre(nombre){
    alert('Buenos dias, '+ nombre);
}

let nombreParaSaludar=prompt('Ingresa tu nombre');
saludarConNombre(nombreParaSaludar);
 */


function dividir(numeroA, numeroB){
    let resultado = numeroA / numeroB;
    return resultado;
}

console.log(dividir(50, 5));

/* 
dividir((100,2));
dividir((2,100));
dividir((0,2));
dividir((-2,0));
 */
function saludarConNombreYMomento(nombre, momento){
    alert('Buenos/as '+ momento + ', '+nombre);
}


saludarConNombreYMomento('dias', 'Denar')



function calcular (primerNumero, segundoNumero, operacion){
    switch(operacion){
        case '+':
            return primerNumero+segundoNumero;

        case '-':
            return primerNumero-segundoNumero;

        case '*':
                return primerNumero*segundoNumero;

        case '/':
            return primerNumero/segundoNumero;
        
        default:
            return 'Opcion invalida';
    } 
}

/* console.log(calcular(20,2,'/'));
console.log(calcular(150,3,'*'));
console.log(calcular(150,3,'?'));

 */


/* 
let variableGlobal = 'Soy una variable global';
console.log(variableGlobal)


function cambiar(){
    variableGlobal = 'me cambiaron desde una funcion';

    console.log(variableGlobal);
}

cambiar();




if(true){
    variableGlobal='Me cambiaron desde un if';
    console.log(variableGlobal)
}
console.log(variableGlobal);


function cambiarLocal(){
    let variableLocal = 'soy una nueva variable, solo vivo dentro de la funcion';
    console.log(variableLocal)
}

cambiarLocal();

variableLocal = 'me cambiaron desde afuera de mi scope'

 */

/* 

function local(){
    let local = 'soy local';
}

console.log(local());

 */



/* 
let suma = function(a,b){
    return a+b;
}

console.log(suma(45,12));

let resta = (a,b) => {return a-b}

let division = (a,b) => a/b;

let mensaje = x => 'El mensaje es: '+ x;


console.log(mensaje('Las funciones flechas son lo maximo!')); */

const suma = (a,b)=> a+b;
const resta = (a,b)=> a-b;
const IVA = x => x * 0.21;

let precioProducto = 15000;
let descuento = 500;

let nuevoPrecio = resta(suma(precioProducto, IVA(precioProducto)), descuento);

console.log(nuevoPrecio)




//primero calcula el IVA 3150
//segundo suma el iva al precio
//tercero resta el descuento al precio del producto con el IVA incluido











console.log('***********************************************************************************************')












/* let nombre = 'pipi';


const TATUAJE = 'mama me tatue' ;

let peso = 65;
let altura = 1.61;


let fraseFavorita = 'Hola todo bien?';

 */


/* let numeroA = 4,
    numeroB = 9;
const PI = 3.1416;

let suma = numeroA + numeroB;
let resta = numeroA - numeroB;
let producto = numeroA * numeroB;
let division = numeroA / numeroB;
let modulo = numeroA % numeroB;


let palabra1 = 'Hola';
let palabra2 = 'Mundo';
let remate = 'A la grande le puse Cuca';
let numero = 27;
let numeroString = '39';

let concatenar1y2 = palabra1 + palabra2;
let concatenar1y2ConEspacio = palabra1 +' '+ palabra2;
let concat3 = 'mi Nombre es ' + nombre;
 */
/* let nombreIngresado = prompt('Escriba su nombre');


let edad = parseInt(prompt('Ingrese su edad')); */

/* let edadDeMas5 = edad + 5; */

/* console.log(nombre);

console.log('Bienvenido/a' + nombre); */

/* alert('El nombre del gato es: ' + nombre) */

/* let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;

let edadUsuario = parseInt(prompt('Ingrese su edad'));

if (edadUsuario >= edadObligatoria && edadUsuario<=edadLimite) {
    alert('Estas obligado/a a Votar');
} else if(edadUsuario >= edadOptativa || edadUsuario>edadLimite){
    alert ('Podes votar, si queres');
}else {
    alert('No podes votar todavia');
}


alert ('Termino el proceso'); */


//ITERACIONES

/* const comidas = ['manzana', 'pera', 'banana', 'durazno', 'fresa'] */

/* for (const comida of comidas) {
    console.log(comida)
} */



/* 
for (let i = 0; i <= 3; i++) {
    alert('Usted es el jefe de los minisuper?')
}


alert('gracioas vuelva pronto') */

/* 
for (let i = 10; i > 0; i++) {
    alert('Faltan '+i+' segundos para 2023')
}


alert('Feliz año nuevo. el primero bebe del año se llama ...')




for (let i = 1; i <=10; i++) {

    console.log('3 * '+ i + ' = '+ (3*i))
}



let numeroElejido = parseInt(prompt('eligi un numero para mostrarte la tabla'));


for (let i = 1; i <=10; i++) {

    console.log(numeroElejido+ ' * ' + i + ' = ' + (numeroElejido*i));
}
 */


/* 

let savedPass = 'palabra';

for (let i = 0; i < 3; i++) {
    let userPass = prompt('Login exitoso!');
    break;   
}

alert ('fin del proceso'); */


/* 
for (let i = 0; i <= 10; i++) {
    if ( i == 4) {
        alert('Sapo muerto');
        continue;
    }

    alert(i)
    
}


alert('Fin del juego')

 */





/* 
let passGuardado = 'messi';
let continuar = true;

while(continuar){
    let passUsuario = prompt('Ingresa tu contraseña');
    if(passGuardado === passUsuario) {
        alert('Bienvenido/a');
        continuar = false;
    }
} */
/* 
let contador = 0;

while (contador <10) {
    alert('soy un bucle while');
    contador++;
}


let palabraClave = 'pepito';
let palabraUsuario = prompt('Ingresa tu palabra');

while(palabraClave != palabraUsuario){
    alert('palabra incorrecta');
    palabraUsuario = prompt('Ingresa tu palabra')
}
 */

/* let passGuardado = 'messi';
let continuar = true;
let passUsuario = prompt('Ingresa tu contraseña');

while(continuar){
    if(passGuardado === passUsuario) {
        alert('Bienvenido/a');
        continuar = false;
        break;
    }
    alert('Contraseña incorrecta');
    passUsuario = prompt('ingresa tu contraseña')
    
}
 */

/* let condicion = false;

do {
    console.log('soy un bucle do... while');
}while(condicion)
 */






const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges",200]
])


for (const fruta of fruits) {
    console.log(fruta[0]) // nos muestra solo las frutas, si fuera [2] nos mostraria el ID
}


//SET

// new Set() para crear
// add(); para agregar
// delete(); para eliminar
// has(): para saber si tiene algo
// forEach(); 
// values(); darle valores


/* 
const letras = new Set(["a","b","c"]);

console.log(letras.values())
 */
/* let text = "";

letras.array.forEach((letra) => {
    text += letra;
}); */

/* const letras = new Set(); //para crearlo pero no darle valores

letras.add("a")
letras.add("b")
letras.add("c") */



//MAPAS --- MAPS

const frutas = new Map(); //para agregar objetos al map


frutas.set("manzanas",500);
frutas.set("bananas", 300);
frutas.set("naranjas", 200);

//para cambiarle el valor de un map
//frutas.set("manzanas", 200)





// el metodo GET nos permite agarrar un valor 
console.log(frutas.get("manzanas"))//asi mostratmos el valor de manzanas

//.sise nos muestra el tamaño de nuestro mapa

console.log(frutas.size)


//.delete() nos permite borrar algun valor
frutas.delete("bananas")
console.log(frutas)

//.has() para saber si tenemos algo o no


// los objetos solo pueden ser cadenas de textos o numericos y simbolos
// los mapas pueden llevar cualquier tipo de dato

//TYPE OFF


//string
//number
//boolean
//objeto
//function

//objetos --- object --- date --- array --- string ---number --- boolean
//valores null --- undefined 

let xs = 5.6 

console.log(typeof(xs)) // typeof sirve para saber que objeto es










// convercion de tipos de datos 

const blogPost = {titulo: 'titulo', contenido: 'contenido', id: '2'}

//cambiar string a number

id = Number(blogPost.id)  // sino tambien parseFloat | parseInt

console.log(typeof(id))






//manejar errores 

try {
    let x = 4;
    x = 'hola';
} catch (error) {

}


//funcion flecha

const miFuncion= (a,b) => a * b;

console.log(miFuncion(4,5))





//clases
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    saludar(){
        return `Holaaa ${this.name}`;
    } 
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1, myCar2)




//js JSON formato se utiliza para la comunicacion con un servidor

// para enviar y recibir informacion


//sintaxis
/* {
    "post1": [
        {
            "title": "Tienda DP",
            "description": "Tienda online con variedad de indumentarias a tu disposición"
        }
    ]
} */







//debbug

let xinfo = 123123123123;
console.log('ESTO ES LA INFORMACION ', xinfo);


//objetos y valores primitivos,

//los objetos son todos los valores no primitivos
//los valores primitivos son:  string -- number -- boolean -- null -- undefined

//para declarar un string como objeto utilizamos el = new String('string');
//ejemplo let x = new String('Hola Mundo');


const compras = {leche: 500, harina: 1000, trigo: 750}

compras.huevo = 400;//para agregarlo
console.log(compras)


delete compras.leche; //para eliminarlo
console.log(compras["harina"])


// 2hr:45min



/* 
dias = Date()
console.log(dias)
 */
