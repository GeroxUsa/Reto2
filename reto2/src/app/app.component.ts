import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reto2';
  id: any;

  endpoint = "https://gaeb7d01e376f9b-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto/";

peticionGet() {

  jQuery.ajax({

        method: "GET",
        url: this.endpoint,
        success: function (data) {
            console.log(data)
            // this.mostrarProducto(data.items);
            console.log(data.items);
        },
        // error: function (error) {
        //     console.log("Error al consumir API Oracle CLoud" + error)
        // }
    });

}

// Funcion mostrar producto
mostrarProducto(productos: any) {
    productos.forEach((x: any = []) => {
        console.log('***********************')
        console.log('Codigo Producto ' + x.codproducto)
        console.log('Nombre Producto ' + x.nombreproducto)
        console.log('Precio Producto ' + x.precio)
        console.log('Inventario ' + x.inventario)
    });
}

/**funcion para peticion post */
peticionPost() {

    const data = {
        CODPRODUCTO: "6",
        NOMBREPRODUCTO: "Coca",
        PRECIO: 4000,
        INVENTARIO: 200
    }
    let datasend = JSON.stringify(data)

    jQuery.ajax({
        method: 'POST',
        url: this.endpoint,
        data: datasend,
        dataType: 'json',
        contentType: 'application/json',
        // complete: function (response) {
        //     console.log(response.status)
        // },
        // error: function (error) {
        //   console.log('Error' + error);
        // }
    });
    console.log(data)
}


peticionPut() {
    /**
     * objeto producto
     */

    const data = {
        CODPRODUCTO: "10",
        NOMBREPRODUCTO: "Cocasssssssssssss",
        PRECIO: 4000,
        INVENTARIO: 2001
    }
    let datasend = JSON.stringify(data)

    jQuery.ajax({
        method: 'PUT',
        url: this.endpoint,
        data: datasend,
        dataType: 'json',
        contentType: 'application/json',
        // complete: function (response) {
        //     console.log(response, 'Se actualizo el registro!')
        // },
        // error: function (error) {
        //   console.log('Error' + error);
        // }
    });
    console.log(data)
}


peticionDelete() {
    /**
     * objeto producto
     */
    let numId = this.confirmId()

    const data = {
        CODPRODUCTO: numId
    }
    let datasend = JSON.stringify(data)

    jQuery.ajax({
        method: 'DELETE',
        url: this.endpoint,
        data: datasend,
        dataType: 'json',
        contentType: 'application/json',
        // complete: function (response) {
        //     console.log(response, 'Se elimino el registro!')
        // },
        // error: function (error) {
        //   console.log('Error' + error);
        // }
    });
    console.log(data)
}

confirmId() {
    const result = window.prompt('¿Qué ID desea eliminar?', '1');
    if (result === '') {
        this.id = 'No se elimino ningun registro'
    } else {
      this.id = result;
    }
    // var resultDiv = document.getElementById('result');
    // resultDiv.innerHTML = this.id;
    // return this.id;
}


// peticionDelete()
// peticionPost()
// peticionPut()
// peticionGet()
}
