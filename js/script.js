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
            menuBoliche = parseInt(prompt('Menu del boliche \n 1.- 4 Botellas de cerveza \n 2.- 2 Botellas de Champagne \n 3.- Fernet 1Lt + Coca 3Lt \n 4.- Vino 1Lt + Coca 2,25Lt \n 5.- Smirnoff + 2 Baggio \n 6.- Ron + Coca 3Lt \n 7.- Otros \n 0.- Salir del menu'))
            switch(menuBoliche){
                case 1:{
                    let cantidad = parseInt(prompt('Precio por el combo: $2000\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 2000;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de 4 cervezas su total es de: $'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 2:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1500\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 1500;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de 2 Botellas de Champagne su total es de: $'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 3:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1800\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 1800;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de Fernet 1Lt + Coca 3Lt su total es de: $'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 4:{
                    let cantidad = parseInt(prompt('Precio por el combo: $800\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 800;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de Vino 1Lt + Coca 2,25Lt su total es de: $'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 5:{
                    let cantidad = parseInt(prompt('Precio por el combo: $1400\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 1400;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de Smirnoff + 2 Baggio su total es de: $'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 6:{
                    let cantidad = parseInt(prompt('Precio por el combo: $2400\n Ingrese cuantos desea comprar'));
                    let precioTotal = (cantidadCombo)=>{
                        const PRECIOCOMBO= 2400;
                        alert('Usted a seleccionado comprar '+ cantidadCombo + ' combos de Ron + Coca 3Lt su total es de: $$'+ PRECIOCOMBO*cantidadCombo)
                    }
                    precioTotal(cantidad);//luego agregare condicionales :D
                    }
                    break;
                case 7:{
                    alert('Luego se agregara mas productos, gracias \n Vuelva pronto...')
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