
const traerBebidas = async () =>{

    
    const respuesta = await fetch(`../js/bebidas.json`);
    const bebidas = await respuesta.json();


    const contenedorProductos = document.querySelector('.contenedorProductos');
    const contenedorCarrito = document.getElementById('contenedorCarrito');

    const btnVaciarCarrito = document.getElementById('vaciarCarrito');
    const contadorCarrito = document.getElementById('contadorCarrito');

    const precioTotal = document.getElementById('precioTotal');
    const contenidoCarrito = document.getElementById('contenidoCarrito')

    //BOTONES PARA VACIAR CARRITO Y BORRAR CARRITO DEL STORAGE
    const BorrarCarrito = document.getElementById('BorrarCarrito');
    const GuardarStorage = document.getElementById('GuardarStorage');
    const comprarTodo = document.getElementById('ComprarCarrito');


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
            })
        }else {
            const item = bebidas.find((prod) => prod.id === prodId);
            carrito.push(item);
            console.log(carrito);
        }
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
            <button class="btn d-block mx-auto btnx"><img src="../img/iconos/borrar.png" alt="" class="w-50 rounded shadow-lg cursor-pointer"></button>`;
            contenedorCarrito.appendChild(cajaCarrito);
        })

        const btns = document.querySelectorAll('.btnx');
        btns.forEach((btn,index) => {
            btn.addEventListener('click', ()=>{
                carrito.splice(index, 1);
                actualizarCarrito();
            })
        });
    
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
            
        }).showToast()
        
    }
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito()
        console.log('hola uwu')
    }
    
    
    btnVaciarCarrito.onclick = ()=>{
    
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

    //obtiene los valores del storage automaticamente al cargar la pagina

    GuardarStorage.addEventListener('click', ()=>{
        if(carrito.length >= 1){
            //guardamos el carrito automaticamente
            localStorage.setItem('carrito', JSON.stringify(carrito))
            actualizarCarrito()
            Swal.fire({
                title: 'Carrito Guardado',
                text: '',
                icon: 'success',
                duration: 2000
        
            }).then()
            actualizarCarrito();
        }else{
            Swal.fire({
                title: 'No hay ningun producto en el carrito',
                text: '',
                icon: 'error',
            }).then()
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

    

}

traerBebidas()


