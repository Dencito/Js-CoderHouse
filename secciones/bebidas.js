const contenedorProductos = document.querySelector('.contenedorProductos');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const btnVaciarCarrito = document.getElementById('vaciarCarrito');
const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');
const contenidoCarrito = document.getElementById('contenidoCarrito')

//BOTONES PARA VACIAR CARRITO Y BORRAR CARRITO DEL STORAGE
const BorrarCarrito = document.getElementById('BorrarCarrito');

//obtine los valores del storage automaticamente al cargar la pagina
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito()
    }
})


BorrarCarrito.onclick = ()=>{
    Swal.fire({
        title: 'Borrar Carrito',
        text: '¿Estas seguro que desea borrar el carrito guardado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result)=>{
        if(result.isConfirmed){
            carrito.length = 0;
            localStorage.clear();
            sessionStorage.clear();
            console.log('Local Storage borrado');
            actualizarCarrito();
            contenidoCarrito.style.display = "none";
            document.location.reload();
            Swal.fire('Carrito borrado del Storage exitosamente','','success')
        }
    })
}



const bebidas = [{
    id: 1,
    categoria: 'BEBIDAS',
    nombre: 'FERNET + COCA',
    precio: 1800,
    cantidad: 1,
    imagen: '../img/bebidas/fernetConCoca.webp',
    descripcion_corta: 'Fernet 1Lt + Coca 3Lt',
    descripcion: 'El fernando, fernandito, fefi o fernet con coca es una bebida creada en Córdoba que consiste en la mezcla de fernet con Coca-Cola. Aunque surgido en la provincia argentina se ha difundido en el resto de Argentina siendo ya un clásico.'
}, {
    id: 2,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CAMPARI',
    precio: 1200,
    cantidad: 1,
    imagen: '../img/bebidas/campari.jpg',
    descripcion_corta: 'Botella de Campari',
    descripcion: 'Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo y sabor amargo. La marca es propiedad del Grupo Campari.'
}, {
    id: 3,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CHAMPAGNE',
    precio: 700,
    cantidad: 1,
    imagen: '../img/bebidas/champagne.jpg',
    descripcion_corta: 'Botella de Champagne',
    descripcion: 'El champán es un vino blanco espumoso de color amarillo, que contiene gas carbónico y que se elabora a partir de un método muy estricto que en francés es conocido con la palabra champenoise (una de las claves de este proceso consiste en una segunda fermentación en la botella para producir la espuma característica.'
},
{
    id: 4,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE CERVEZA',
    precio: 400,
    cantidad: 1,
    imagen: '../img/bebidas/cervezaCorona.webp',
    descripcion_corta: 'Botella de cerveza marca Corona',
    descripcion: 'La cerveza es una bebida alcohólica no destilada elaborada a base de granos de cereales, como la cebada por ejemplo, cuyo componente de almidón será modificado para ser luego fermentado en agua y aromatizado con lúpulo.'

},
{
    id: 5,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE SMIRNOFF + BAGGIO',
    precio: 1500,
    cantidad: 1,
    imagen: '../img/bebidas/smirnoff.jpg',
    descripcion_corta: 'Smirnoff + 2 Baggio',
    descripcion: 'El vodka Smirnoff No. 21 es el vodka No. 1 del mundo. Nuestro galardonado vodka tiene un sabor robusto con un acabado seco para una máxima suavidad y claridad.'

},
{
    id: 6,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE VINO',
    precio: 500,
    cantidad: 1,
    imagen: '../img/bebidas/vinos.jpg',
    descripcion_corta: 'Botella de Vino',
    descripcion: 'El vino (del latín vinum) es una bebida hecha de uva (especie Vitis vinifera), mediante la fermentación alcohólica de su mosto o zumo.'

},
{
    id: 7,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE WHISKY',
    precio: 1200,
    cantidad: 1,
    imagen: '../img/bebidas/whiskey.jpg',
    descripcion_corta: 'Botella de Whisky',
    descripcion: 'El whisky (del gaélico escocés: uisge-beatha), whiskey (del irlandés: uisce beatha o fuisce), wiski o güisqui es una bebida alcohólica obtenida por la destilación de la malta fermentada de cereales como cebada, trigo, centeno y maíz, y su posterior añejamiento en barriles de madera, tradicionalmente de roble blanco.'

},
{
    id: 8,
    categoria: 'BEBIDAS',
    nombre: 'BOTELLA DE SIDRA',
    precio: 1000,
    cantidad: 1,
    imagen: '../img/bebidas/sidra.webp',
    descripcion_corta: 'Botella de Sidra',
    descripcion: 'La Sidra es una bebida alcohólica fabricada con el jugo fermentado de la manzana o de la pera de baja graduación que varía entre el 2 %, en el caso de la sidra doux francesa, hasta un máximo del 8 % en volumen.'

},
{
    id: 9,
    categoria: 'BEBIDAS',
    nombre: 'COCKTAIL DE WHISKY',
    precio: 900,
    cantidad: 1,
    imagen: '../img/bebidas/licorRaroConHumo.webp',
    descripcion_corta: 'Vaso con Cocktail de Whisky con hielo seco',
    descripcion: 'Tradicionalmente, los cócteles más ricos con notas oscuras y profundas como el whisky, brandy o ron dan como resultado maravillosos sabores ahumados. Algunas bebidas simplemente no mejoran con el proceso de ahumado.'

}];

console.log(...bebidas)
const [a,b,c,d,f,g,h,i,j,k,l] = bebidas
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(f)
console.log(g)
console.log(h)
console.log(k)//undefined
console.log(l)//undefined :c

let carrito = [];

const comprarTodo = document.getElementById('ComprarCarrito');
const carritoCheck = document.getElementById('toggleCarrito');

comprarTodo.addEventListener('click', ()=>{
    if(carrito.length >= 1){
        carrito.length=0;
        Swal.fire({
            title: 'Gracias por comprarnos',
            text: '',
            icon: 'success',
            duration: 2000
    
        }).then()
        actualizarCarrito();
    }else{
        Swal.fire({
            title: 'No hay ningun producto',
            text: '',
            icon: 'error',
        }).then()
    }
})



/* document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito()
    }
}) */

const crearProductos = (array, contenedor)=> {
    contenedor.innerHTML = '';
    for (const item of array) {
        let product = document.createElement('div');
        product.className = 'col-12 col-sm-8 col-md-6 col-lg-4 mx-auto shadow p-3 overflow-hidden cursor-p h-auto pb-5 pb-md-3 pb-lg-5 pb-xxl-0';
        product.innerHTML = `
        <h4 class="text-center p-3">${item.nombre}</h4>
        <img src="${item.imagen}" class="w-100 h-img-bebidas rounded pb-5 px-2" alt="${item.descripcion_corta}">
        <div class="card-body">
            <p class="card-text">${item.descripcion}</p>
            <span id="precio">$ ${item.precio}</span>
        </div>
        <div class="card-footer mx-auto"><button class="btn btn-secondary d-block text-white mx-auto" id="agregar${item.id}">Comprar</button></div>`;
        contenedor.append(product);


        const botonAgregar = document.getElementById(`agregar${item.id}`);
        botonAgregar.addEventListener('click', ()=>{
            agregarAlCarrito(item.id);
        })
    }
}

const buscar = (array, criterio, input)=> {
    return array.filter((item) => item[criterio].includes(input))
}

crearProductos(bebidas, contenedorProductos);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toUpperCase();
        crearProductos(buscar(bebidas, input.id, cadena), contenedorProductos);
    })
});


const agregarAlCarrito =(prodId) => {
    const existe = carrito.some(prod => prod.id === prodId);

    if(existe){
        const prod = carrito.map(prod => {
            prod.id === prodId && prod.cantidad++;//operador AND
            /* if(prod.id === prodId){
                prod.cantidad++;
            } */
        })
    }else {
        const item = bebidas.find((prod) => prod.id === prodId);
        carrito.push(item);
        console.log(carrito);
    }
    actualizarCarrito();
    
}

    const eliminarDelCarrito =  (prodId) => {
    const item = carrito.find((prod)=>prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
    }

const actualizarCarrito = ()=>{

    contenedorCarrito.innerHTML = '';
    carrito.forEach((prod)=>{
        const cajaCarrito = document.createElement('div');
        cajaCarrito.className = 'col-12 col-sm-5 col-md-6 col-lg-5 col-xl-4 col-xxl-3 d-flex flex-wrap m-4';
        cajaCarrito.innerHTML = `
        <img src="${prod.imagen}" alt="" class="h-img-carrito">
        <p class="mx-2">${prod.nombre}</p>
        <p class="mx-2">Precio: $${prod.precio} c/u</p>
        <p class="mx-2">Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn d-block mx-auto"><img src="../img/iconos/borrar.png" alt="" class="w-50 rounded shadow-lg cursor-pointer"></button>`;

        contenedorCarrito.appendChild(cajaCarrito);
        //guardamos el carrito automaticamente
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio*prod.cantidad, 0);
    Toastify({
        text: `Nuevos cambios en el carrito`,
        duration: 1500,
        style: {
            color: 'white',
            width: '200px',
            height: '80px',
        },
        offset: {
            x: -1,
            y: 50
        },
/*         onClick:()=>{
            Toastify({
                text : 'Clickeame y te llevo a wikipedia',
                duration: 1000,
                position: 'left',
                destination: 'https://google.com'
            }).showToast();
        } */
        
    }).showToast()
    
}


btnVaciarCarrito.onclick = ()=>{
    /* Swal.fire(

        {
            title: 'Bienvenida',
            text: 'Te damos la bienvenida a nuestra app',
            icon: 'success',
            iconColor: '#81f40e',
            confirmButtonText: 'Gracias',
            position: 'top-center'
        }   
    ) */

    /* Swal.fire('Hola','Esto es un alert','success') */

    Swal.fire({
        title: 'Vaciar Carrito',
        text: '¿Estas seguro de vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result)=>{
        if(result.isConfirmed){
            carrito.length = 0;
            actualizarCarrito();
            Swal.fire('Carrito Vaciado','','success')
        }
    })
}

/* 
const DateTime = luxon.DateTime;

const ahora = DateTime.now();
console.log(ahora);

const dt = DateTime.local(2022, 12, 8, 12, 15);
console.log(dt);

console.log(ahora.toString());
console.log(ahora.toLocalString());
console.log(ahora.toLocalString(DateTime.DATE_FULL));
console.log(ahora.toLocalString(DateTime.DATE_HUGE));
console.log(ahora.toLocalString(DateTime.TIME_SIMPLE));


window.onload=()=>{
    let dates = document.querySelectorAll('input[type="date"]');
    let inicio = DateTime.now().toFormat('yyyy-mm-dd');
    let fin = DateTime.now().plus({months: 4}).toFormat('yyyy-mm-dd');
    
    
    dates.forEach(element=>{
        element.setAttribute('min', inicio);
        element.setAttribute('max', fin);
    })
}

function calcularEstadia (checkIn, checkOut){
    let total = checkOut.diff(checkIn);
    return total.as('days');
}

function calcularPrecioTotal(estadia, precio){
    return estadia*precio;
}
const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', ()=>{
    let checkIn = DateTime.fromISO(document.getElementById('checkIn').value);
    let checkOut = DateTime.fromISO(document.getElementById('checkOut').value);
    let estadia = calcularEstadia(checkIn, checkOut);
    let precioTotal = calcularPrecioTotal(estadia, 2000);

    Swal.fire({
        title: 'Resultado',
        text: `Tu estadia de ${estadia} dias tiene un precio total de $${precioTotal}`,
        icon: 'info',
        iconColor: '#f90000',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center',
        backdrop : '#44556635'
    })
})
 */


/* 
setTimeout(() => {
    console.log('Hola')
}, 2500);
 */
/* let btnMostrar = document.querySelector('#btnMostrar');
let imgTest = document.querySelector('#imgTest');


imgTest.className ='w-25 d-none';

btnMostrar.addEventListener('click', ()=>{
    setTimeout(() => {
        imgTest.className ='w-25 d-block';
    }, 2500);

}) */

/* 
new Promise((resolve,reject)=>{
    //cuerpo de la promesa
})
 */
/* 
const eventoFuturo = (respuesta)=>{
    return new Promise((resolve, reject)=>{ */
/*  if(respuesta == true){
            resolve('promesa aprobada');
        }else{
            reject('promesa rechazada');
        } */
/*         setTimeout(()=>{
        respuesta === true ? resolve('yupiii') : reject('D\'oh')
        },2000)
    })
} */
/* 
console.log(eventoFuturo(true));
console.log(eventoFuturo(false)); */
/* 
eventoFuturo(true).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Fin de la ejecucion');
})
 */
/* 

const bebidas2 = bebidas;

const pedirProductos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(bebidas2)
        }, 500);
    })
} */