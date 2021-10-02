var endpoint = "https://gaeb7d01e376f9b-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto/";

function peticionGet() {

    $.ajax({

            method:"GET",
            url:endpoint,
            success:function(data){
                // console.log(data)
                mostrarProducto(data.items);
            },
            error:function(error){
                console.log("Error al consumir API Oracle CLoud")
            }
    });

}

// Funcion mostrar producto
function mostrarProducto(productos){
    productos.forEach(element => {
        console.log('***********************')
        console.log('Codigo Producto '+element.codproducto)
        console.log('Nombre Producto '+element.nombreproducto)
        console.log('Precio Producto '+element.precio)
        console.log('Inventario '+element.inventario)
    });
}

/**funcion para peticion post */
function peticionPost(){

    /**
     * objeto producto
     */

    const data={
        CODPRODUCTO: "4",
        NOMBREPRODUCTO: "Coca",
        PRECIO: 4000,
        INVENTARIO: 200
    }
    let datasend=JSON.stringify(data)
    
    $.ajax({
         method:'POST',
         url:endpoint,
         data:datasend,
         dataType:'json',
         contentType: 'application/json',
         complete:function(response){
             console.log(response.status)
         },
         error:function(error){

         }
    });
   console.log(data)
}


function peticionPut(){
    /**
     * objeto producto
     */

     const data={
        CODPRODUCTO: "10",
        NOMBREPRODUCTO: "Cocasssssssssssss",
        PRECIO: 4000,
        INVENTARIO: 2001
    }
    let datasend=JSON.stringify(data)
    
    $.ajax({
         method:'PUT',
         url:endpoint,
         data:datasend,
         dataType:'json',
         contentType: 'application/json',
         complete:function(response){
             console.log(response, 'Se actualizo el registro!')
         },
         error:function(error){

         }
    });
   console.log(data)
}


function peticionDelete(){
    /**
     * objeto producto
     */

     const data={
        CODPRODUCTO: "1"
    }
    let datasend=JSON.stringify(data)
    
    $.ajax({
         method:'DELETE',
         url:endpoint,
         data:datasend,
         dataType:'json',
         contentType: 'application/json',
         complete:function(response){
             console.log(response, 'Se elimino el registro!')
         },
         error:function(error){

         }
    });
   console.log(data)
}


// peticionDelete()
// peticionPost()
// peticionPut()
peticionGet()