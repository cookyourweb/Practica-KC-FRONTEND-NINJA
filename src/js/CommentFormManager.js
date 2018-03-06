const $ = require("jquery");

import UIManager from './UIManager';

export default class CommentFormManager extends UIManager {

    constructor(elementSelector, commentsService, pubSub) {
        super(elementSelector); // llamada al constructor de la clase UIManager
        this.commentsService = commentsService;
        this.pubSub = pubSub;
    }

    init() {
        this.setupSubmitEventHandler();
    }

    setupSubmitEventHandler() {
        this.element.on("submit", () => {
            this.validateAndSendData();
            // en jQuery podemos hacer un preventDefault haciendo un return false en los manejadores de evento
            return false; // == event.preventDefault();
        });
    }

    validateAndSendData() {
        if (this.isValid()) {            
            if(this.noLong()){                
                this.send();
            }                
        }
    }
    noLong(){        
        const freecomment = this.element.find("comment");
        var maxWords=120;        
        var d=document.getElementById("comment");
        
        var num= d.value.split(' ').length;
        console.log(num);
        if ( d.value.split(' ').length > maxWords ) {
            alert("Limite de 150 palabras");
            console.log(num);
            d.focus();            
            return false;
        }  
        return true;  
    }

    isValid() {
        const inputs = this.element.find("input");
        for (let input of inputs) {
            if (input.checkValidity() == false) {
                const errorMessage = input.validationMessage;
                input.focus();
                this.setErrorHtml(errorMessage);
                this.setError();
                return false;
            }
        }
        // Llegamos aquí, si no hay ningún error
        this.setIdeal(); 
        return true;
    }

    send() {        
        this.setLoading();
        const comment = {
            name: this.element.find("#name").val(),
            email: this.element.find("#email").val(),
            comment: this.element.find("#comment").val()
        };
        this.commentsService.save(comment, success => {
            this.pubSub.publish("comment", comment); // publicamos el evento que informa de la creación de una canción 
            this.resetForm();
            this.setIdeal();
        }, error => {
            this.setErrorHtml("Se ha producido un error al guardar la canción en el servidor.");
            this.setError();
        });
    }

    resetForm() {
        this.element[0].reset(); // resetea el formulario
    }

    disableFormControls() {
        this.element.find("input, button").attr("disabled", true);
    }

    enableFormControls() {
        this.element.find("input, button").attr("disabled", false);
    }

    setLoading() {
        super.setLoading();
        this.disableFormControls();
    }

    setError() {
        super.setError();
        this.enableFormControls();
    }

    setIdeal() {
        super.setIdeal();
        this.enableFormControls();
    }

}