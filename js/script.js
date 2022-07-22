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
