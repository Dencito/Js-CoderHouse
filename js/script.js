//ACCESO A UN BOLICHE
const bebidas = [{
    id: 1,
    categoria: 'BEBIDAS',
    nombre: 'FERNET + COCA',
    precio: 1800,
    imagen: '../img/bebidas/fernetConCoca.webp',
    descripcion_corta: 'Fernet 1Lt + Coca 3Lt',
    descripcion: 'El fernando, fernandito, fefi o fernet con coca es una bebida creada en Córdoba que consiste en la mezcla de fernet con Coca-Cola. Aunque surgido en la provincia argentina se ha difundido en el resto de Argentina siendo ya un clásico.'
}, {
    id: 2,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CAMPARI',
    precio: 1200,
    imagen: '../img/bebidas/campari.jpg',
    descripcion_corta: 'Botella de Campari',
    descripcion: 'Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo y sabor amargo. La marca es propiedad del Grupo Campari.'
}, {
    id: 3,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CHAMPAGNE',
    precio: 700,
    imagen: '../img/bebidas/champagne.jpg',
    descripcion_corta: 'Botella de Champagne',
    descripcion: 'El champán es un vino blanco espumoso de color amarillo, que contiene gas carbónico y que se elabora a partir de un método muy estricto que en francés es conocido con la palabra champenoise (una de las claves de este proceso consiste en una segunda fermentación en la botella para producir la espuma característica.'
},
{
    id: 4,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CERVEZA',
    precio: 400,
    imagen: '../img/bebidas/cervezaCorona.webp',
    descripcion_corta: 'Botella de cerveza marca Corona',
    descripcion: 'La cerveza es una bebida alcohólica no destilada elaborada a base de granos de cereales, como la cebada por ejemplo, cuyo componente de almidón será modificado para ser luego fermentado en agua y aromatizado con lúpulo.'

},
{
    id: 5,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE SMIRNOFF + BAGGIO',
    precio: 1500,
    imagen: '../img/bebidas/smirnoff.jpg',
    descripcion_corta: 'Smirnoff + 2 Baggio',
    descripcion: 'El vodka Smirnoff No. 21 es el vodka No. 1 del mundo. Nuestro galardonado vodka tiene un sabor robusto con un acabado seco para una máxima suavidad y claridad.'

},
{
    id: 6,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE VINO',
    precio: 500,
    imagen: '../img/bebidas/vinos.jpg',
    descripcion_corta: 'Botella de Vino',
    descripcion: ''

},
{
    id: 7,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE WHISKY',
    precio: 1200,
    imagen: '../img/bebidas/whiskey.jpg',
    descripcion_corta: 'Botella de Whisky',
    descripcion: 'El whisky (del gaélico escocés: uisge-beatha), whiskey (del irlandés: uisce beatha o fuisce), wiski o güisqui es una bebida alcohólica obtenida por la destilación de la malta fermentada de cereales como cebada, trigo, centeno y maíz, y su posterior añejamiento en barriles de madera, tradicionalmente de roble blanco.'

},
{
    id: 8,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE SIDRA',
    precio: 1000,
    imagen: '../img/bebidas/sidra.webp',
    descripcion_corta: 'Botella de Sidra',
    descripcion: 'La Sidra es una bebida alcohólica fabricada con el jugo fermentado de la manzana o de la pera de baja graduación que varía entre el 2 %, en el caso de la sidra doux francesa, hasta un máximo del 8 % en volumen.'

},
{
    id: 9,
    categoria: 'BEBIDAS',
    nombre: 'COCKTAIL DE WHISKY',
    precio: 900,
    imagen: '../img/bebidas/licorRaroConHumo.webp',
    descripcion_corta: 'Vaso con Cocktail de Whisky con hielo seco',
    descripcion: 'Tradicionalmente, los cócteles más ricos con notas oscuras y profundas como el whisky, brandy o ron dan como resultado maravillosos sabores ahumados. Algunas bebidas simplemente no mejoran con el proceso de ahumado.'

}];

let ingresarEdad = '';
do{
    ingresarEdad = parseInt(prompt('Porfavor ingrese su edad'));
    if(ingresarEdad < 18 && ingresarEdad > 0){
        alert('Usted es menor de edad, no esta permitido menores de edad')
    }else if(ingresarEdad >= 18 && ingresarEdad > 0){
        alert('Edad permitida, siguiente paso')
        let ingresarDNI = parseInt(prompt('Ingrese su DNI'));
        while(ingresarDNI.toString().length != 8){
            ingresarDNI = '';
            if(ingresarDNI.toString().length < 9) {
                ingresarDNI = parseInt(prompt('Ingrese nuevamente su DNI'));
            }
        }
        alert('Puede acceder al boliche DP');
        let menuBoliche = '';
        do{
            menuBoliche = parseInt(prompt('Menu del boliche \n 1.- '+bebidas[0].nombre+' \n 2.- '+bebidas[1].nombre+' \n 3.- '+bebidas[2].nombre+' \n 4.- '+bebidas[3].nombre+' \n 5.- '+bebidas[4].nombre+' \n 6.- '+bebidas[5].nombre+' \n 7.- '+bebidas[6].nombre+' \n 8.- '+bebidas[7].nombre+' \n 9.- '+bebidas[8].nombre+' \n 10.- Otros \n 0.- Salir del menu'));
            switch(menuBoliche){
                case 1:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[0].precio+' de '+bebidas[0].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[0].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[0].nombre+' $'+bebidas[0].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                        
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 2:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[1].precio+' de '+bebidas[1].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[1].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[1].nombre+' $'+bebidas[1].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 3:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[2].precio+' de '+bebidas[2].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[2].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[2].nombre+' $'+bebidas[2].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 4:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[3].precio+' de '+bebidas[3].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[3].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[3].nombre+' $'+bebidas[3].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 5:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[4].precio+' de '+bebidas[4].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[4].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[4].nombre+' $'+bebidas[4].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 6:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[5].precio+' de '+bebidas[5].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[5].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[5].nombre+' $'+bebidas[5].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 7:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[6].precio+' de '+bebidas[6].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[6].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[6].nombre+' $'+bebidas[6].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 8:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[7].precio+' de '+bebidas[7].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[7].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[7].nombre+' $'+bebidas[7].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 9:{
                    let cantidad = parseInt(prompt('Precio: $'+bebidas[8].precio+' de '+bebidas[8].nombre+'\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= bebidas[8].precio;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' '+bebidas[8].nombre+' $'+bebidas[8].precio+' c/u, su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 10:{
                    alert('Luego se agregara mas productos, gracias \n Vuelva pronto...')
                    let ingresarPropuesta = '';
                    let ingresarPropuestaPrecio = '';
                    do{
                        ingresarPropuesta = prompt('Ingrese el combo de bebidas que le gustaria que este en el menu');
                        ingresarPropuestaPrecio = parseInt(prompt('Ingrese que precio que le pondria al combo'));
                    }while(ingresarPropuesta.length < 1 && ingresarPropuestaPrecio.length < 1)

                    combos.push(ingresarPropuesta);
                    preciosDeCombos.push(ingresarPropuestaPrecio);
                    console.log('todos los productos \n'+combos.join('\n'));
                    console.log('todos los precios de los productos \n'+preciosDeCombos.join('\n'));
                    alert('Propuesta enviada exitosamente')
                    }
                    break;
                case 0:{
                    alert('Selecciono salir')
                    }
                    break;
                default:{
                    alert('Opcion invalida');
                    break;
                    }
            }
        }while(menuBoliche!=0)
        alert('Gracias por comprar en Boliche DP');

    }else {
        alert('Porfavor ingrese un numero mayor a 0')
    }
    
}while(ingresarEdad < 1)
