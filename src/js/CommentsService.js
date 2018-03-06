const $ = require("jquery");

export default class CommentsService {

    constructor(url) {
        this.url = url;
    }

    // Obtener listado de comentarios
    list(successCallback, errorCallback) {
        $.ajax({
            url: this.url,
            success: successCallback,
            error: errorCallback
        });
    }
    // Crear o actualizar canción
    save(comment, successCallback, errorCallback) {     
        console.log("Prueba");
        this.create(comment, successCallback, errorCallback);
    }

    // Crear un commentario
    create(comment, successCallback, errorCallback) {
        console.log("Hey");
        $.ajax({
            url: this.url,
            method: "post",
            data: comment,
            success: successCallback,
            error: errorCallback
        })
    }
}