const entradas = [
    {
        id: 1,
        nombre:'Entrada Comun🥲',
        precio: 400,
        btnEntrada: 'BtnComun'

    },
    {
        id: 2,
        nombre:'Entrada SemiVIP👑',
        precio: 700,
        btnEntrada: 'BtnSemiVip'

    },
    {
        id: 3,
        nombre:'Entrada VIP🤴🎉',
        precio: 1000,
        btnEntrada: 'BtnVip'

    }
];


const btnComun = document.getElementById('btnComun');
const btnSemiVip = document.getElementById('btnSemiVip');
const btnVip = document.getElementById('btnVip');
const ComprarEntradas = document.getElementById('ComprarEntradas');
const entradasCompradas = document.getElementById('entradasCompradas');
function crearEntrada() {
    let precioTotal1 = null;
    
    btnComun.addEventListener('click', ()=>{
        ComprarEntradas.innerHTML = document.createElement('div');
        ComprarEntradas.className = 'col-12 col-md-6 col-lg-4 shadow p-3 overflow-hidden cursor-p h-auto pb-5 pb-md-3 pb-lg-5 pb-xxl-0 mt-5 mx-auto';
        ComprarEntradas.innerHTML = '';
        ComprarEntradas.innerHTML = `
            <h2 class="text-center p-3">${entradas[0].nombre}</h2>
            <div class="card-body">
                <span id="precio" class="text-center">$${entradas[0].precio}</span>
                <select name="selector" id="selectorDeEntradas">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </div>
            <button class="btn btn-secondary d-block mx-auto mb-3" id="comprar${entradas[0].btnEntrada}">Comprar</button>
            <div class="precioTotal" id="precioTotal"></div>`;
        precioTotal1 = document.getElementById('precioTotal')
        comprarBtnComun.addEventListener('click', ()=>{
            precioTotal1.innerHTML = document.createElement('div');
            precioTotal1.innerHTML = '';
            precioTotal1.className = 'col-12 col-md-12 col-lg-12 shadow mx-auto';
            precioTotal1.innerHTML = `<p class="h4 p-2">Precio total a pagar: $${(entradas[0].precio)*parseInt(document.getElementById('selectorDeEntradas').value)}</p>`;
            console.log('Pago exitosamente')
        })
        
    })

    btnSemiVip.addEventListener('click', ()=>{
        ComprarEntradas.innerHTML = document.createElement('div');
        ComprarEntradas.className = 'col-12 col-md-6 col-lg-4 shadow p-3 overflow-hidden cursor-p h-auto pb-5 pb-md-3 pb-lg-5 pb-xxl-0 mt-5 mx-auto';
        ComprarEntradas.innerHTML = '';
        ComprarEntradas.innerHTML = `
            <h2 class="text-center p-3">${entradas[1].nombre}</h2>
            <div class="card-body">
                <span id="precio" class="text-center">$${entradas[1].precio}</span>
                <select name="selector" id="selectorDeEntradas">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </div>
            <button class="btn btn-secondary d-block mx-auto mb-3" id="comprar${entradas[1].btnEntrada}">Comprar</button>
            <div class="precioTotal" id="precioTotal"></div>`;
        let precioTotal = document.getElementById('precioTotal')
        comprarBtnSemiVip.addEventListener('click', ()=>{
            precioTotal.innerHTML = document.createElement('div');
            precioTotal.innerHTML = '';
            precioTotal.className = 'col-12 col-md-12 col-lg-12 shadow mx-auto';
            precioTotal.innerHTML = `<p class="h4 p-2">Precio total a pagar: $${(entradas[1].precio)*parseInt(document.getElementById('selectorDeEntradas').value)}</p>`;
            console.log('Pago exitosamente')
        }) 
    })
    

    btnVip.addEventListener('click', ()=>{
        ComprarEntradas.innerHTML = document.createElement('div');
        ComprarEntradas.className = 'col-12 col-md-6 col-lg-4 shadow p-3 overflow-hidden cursor-p h-auto pb-5 pb-md-3 pb-lg-5 pb-xxl-0 mt-5 mx-auto';
        ComprarEntradas.innerHTML = '';
        ComprarEntradas.innerHTML = `
            <h2 class="text-center p-3">${entradas[2].nombre}</h2>
            <div class="card-body">
                <span id="precio" class="text-center">$${entradas[2].precio}</span>
                <select name="selector" id="selectorDeEntradas">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </div>
            <button class="btn btn-secondary d-block mx-auto mb-3" id="comprar${entradas[2].btnEntrada}">Comprar</button>
            <div class="precioTotal" id="precioTotal"></div>`;
        let precioTotal = document.getElementById('precioTotal')
        comprarBtnVip.addEventListener('click', ()=>{
            precioTotal.innerHTML = document.createElement('div');
            precioTotal.innerHTML = '';
            precioTotal.className = 'col-12 col-md-12 col-lg-12 shadow mx-auto';
            precioTotal.innerHTML = `<p class="h4 p-2">Precio total a pagar: $${(entradas[2].precio)*parseInt(document.getElementById('selectorDeEntradas').value)}</p>`;
            console.log('Pago exitosamente')
        }) 
    })
}

crearEntrada()

