//ACCESO A UN BOLICHE

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
            const combos = ['4 Botellas de cerveza','2 Botellas de Champagne','Fernet 1Lt + Coca 3Lt','Vino 1Lt + Coca 2,25Lt','Smirnoff + 2 Baggio','Ron + Coca 3Lt'];
            const preciosDeCombos = [2000, 1500, 1800, 800, 1400, 2400];
            menuBoliche = parseInt(prompt('Menu del boliche \n 1.- '+combos[0]+' \n 2.- '+combos[1]+' \n 3.- '+combos[2]+' \n 4.- '+combos[3]+' \n 5.- '+combos[4]+' \n 6.- '+combos[5]+' \n 7.- Otros \n 0.- Salir del menu'))
            switch(menuBoliche){
                case 1:{
                    let cantidad = parseInt(prompt('Precio por el combo: $2000\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[0];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[0]+' su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[0]+' su total es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                        
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 2:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1500\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[1];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[1]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[1]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 3:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1800\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[2];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[2]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[2]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 4:{
                    let cantidad = parseInt(prompt('Precio por el combo: $800\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[3];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[3]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[3]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 5:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1400\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[4];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[4]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[4]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 6:{
                    let cantidad = parseInt(prompt('Precio por el combo: $2400\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= preciosDeCombos[5];
                        if(cantidad == 1){
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combo de '+combos[5]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }else{
                            alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de '+combos[5]+' es de: $'+ PRECIOCOMBO*cantidadCombo);
                        }
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 7:{
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