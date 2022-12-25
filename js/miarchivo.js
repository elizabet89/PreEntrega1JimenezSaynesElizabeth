let option;

option=parseInt(prompt(`Bienvenido al simulador elige un opcion:
1 Hacer compras
2 Sacar el iva
3 Convertir en Dolares
       
`));


switch (option) {
  case 1:
    compras();
    break;
    case 2:
      sacarIva();
    break;
    case 3:
      convertirDeMoneda()
    break;
    default:
    alert("Porfavor digite un numero correcto")
    break;
}

function compras() {
  let suma=0;
  do{
    let carritoDeCompras=parseInt(prompt(`REALIZAR COMPRAS.Elige el numero que corresponde al producto:
    1.- manzana $50
    2.- Fresa $200
    3.- piña $100`));
  
    if(carritoDeCompras===1){
     suma=suma+50;
    }else if(carritoDeCompras===2){
      suma=suma+200;
    }else if(carritoDeCompras===3){
      suma=suma+100;
    }
  }while(confirm("Desea seguir comprando"))
  alert(`El total de tus compras es $`+ suma + " pesos ");
}
function sacarIva(iva=16) {
  let cantidad=parseInt(prompt("Ingresa una cantidad"));
      let ivaTotal=cantidad*iva/100;

  let cantidadConIva= cantidad+ivaTotal;
  alert("IVA del (16%)es de:$" + ivaTotal  + "Cantidad TOTAL con iva incluido $" + cantidadConIva);
  
}

function convertirDeMoneda() {
  let dolar=19.37;
  let cantidad=parseInt(prompt("Ingrese una cantidad "));
  let convertidor=cantidad/dolar;
  alert("$"+cantidad + " Pesos mexicanos equivale a "+ convertidor.toFixed(2) + " dolares")
  
}



// do{




// }while(confirm("Desea continuar"))


