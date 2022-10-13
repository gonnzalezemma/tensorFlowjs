let min= 1; let max=5;
let filas0= Math.floor(Math.random() * (max - min)) + min;

let columnas0= Math.floor(Math.random() * (max - min)) + min;

console.log('columnas '+columnas0)
console.log('filas '+filas0)

var matrixArray = [];    
 for(var i=0; i<filas0; i++) { 
     
    matrixArray[i] = new Array(columnas0);

    
    
    for(var j=0; j<columnas0; j++) { 
            let max=100,min=1;
           matrixArray[i][j] = Math.floor(Math.random() * (max - min)) + min;

        }
    }



    let filas1= Math.floor(Math.random() * (max - min)) + min;
    
    let columnas1= Math.floor(Math.random() * (max - min)) + min;
    
    console.log('columnas '+columnas1)
    console.log('filas '+filas1)
    
    var matrixArray1 = [];    
     for(var i=0; i<filas1; i++) { 
         
        matrixArray1[i] = new Array(columnas1);
    
        
        
        for(var j=0; j<columnas1; j++) { 
                let max=100,min=1;
               matrixArray1[i][j] = Math.floor(Math.random() * (max - min)) + min;
    
            }
        }

        let fmatriz1=matrixArray.length;

        let cmatriz1=matrixArray[0].length;
        
        console.log('matriz 1 cant filas: ',fmatriz1)
        
        console.log('matriz 1 cant columnas: ',cmatriz1)
    
    
    
    
        console.log(matrixArray);


        
        
        let fmatriz2=matrixArray1.length;
        let cmatriz2=matrixArray1[0].length;

        console.log('matriz 2 cant filas: ', fmatriz2)
        console.log('matriz 2 cant columnas: ',cmatriz2)
       
        console.log(matrixArray1);
        
      
      let NoEsIgual= cmatriz1==fmatriz2;
      

      if(!NoEsIgual==false){
     
           
      multiplicacion = new Array(fmatriz1);
      console.log('multiiii ---------')
console.log(multiplicacion)
      for (x=0; x<multiplicacion.length;x++)
       multiplicacion[x] = new Array(cmatriz2).fill(0);



     for (x=0; x < multiplicacion.length; x++) {

      for (y=0; y < multiplicacion[x].length; y++) {                                
          for (z=0; z<cmatriz1; z++) {
              multiplicacion[x][y] = multiplicacion[x][y] + matrixArray[x][z]*matrixArray1[z][y]; 
           
            }
      }
}

  console.log(multiplicacion);
} 
   else{
      console.log('no son iguales')
   }



