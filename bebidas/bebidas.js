
            //Ejemplo aplicado para filtrar de manera dinámica mientras el usuario escribe
let contenedorProductos = document.querySelector('.contenedorProductos');

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

function crearProductos(array, contenedor) {
    contenedor.innerHTML = '';
    for (const item of array) {
        let producto = document.createElement('div');
        producto.className = 'col-12 col-md-6 col-lg-4 shadow p-3 overflow-hidden cursor-p h-auto pb-5 pb-md-3 pb-lg-5 pb-xxl-0';
        producto.id = `${item.id}`;
        producto.innerHTML = `
        <h4 class="card-header">${item.nombre}</h4>
        <img src="${item.imagen}" class="w-100 h-img-entradas rounded pb-5 px-2" alt="${item.descripcion_corta}">
        <div class="card-body">
            <p class="card-text">${item.descripcion}</p>
            <span id="precio">$ ${item.precio}</span>
        </div>
        <div class="card-footer mx-auto"><a href="#" class="btn btn-secondary text-white mx-auto">Comprar</a></div>`;
        contenedor.append(producto)
    }

}

function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}

crearProductos(bebidas, contenedorProductos);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toUpperCase();
        console.log(cadena);
        crearProductos(buscar(bebidas, input.id, cadena), contenedorProductos);
    })
});