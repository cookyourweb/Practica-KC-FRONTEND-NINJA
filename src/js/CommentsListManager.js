import UIManager from './UIManager';

export default class CommentsListManager extends UIManager {

    constructor(elementSelector, commentsService, pubSub) {
        super(elementSelector); // llamada al constructor de la clase UIManager
        this.commentsService = commentsService;
        this.pubSub = pubSub;
    }

    init() {
        this.loadComments();
        let self = this;        
        this.pubSub.subscribe("comment", (topic, comment) => {
            this.loadComments();
        });
    }

    loadComments() {
        this.commentsService.list(comments => {
            // Comprobamos si hay canciones
            if (comments.length == 0) {
                // Mostramos el estado vacío
                this.setEmpty();
            } else {
                // Componemos el HTML con todas las canciones
                this.renderComments(comments);
                // Quitamos el mensaje de cargando y mostramos la lista de canciones
                this.setIdeal();
            }
        }, error => {
            // Mostrar el estado de error
            this.setError();
            // Hacemos log del error en la consola
            console.error("Error al cargar las canciones", error);
        });
    }

    renderComments(comments) {
        let html = "";
        for (let comment of comments) {
            html += this.renderComment(comment);
        }
        // Metemos el HTML en el div que contiene las canciones
        this.setIdealHtml(html);
    }

    renderComment(comment) {
        let cover_url = comment.cover_url;
        let srcset = "";
        return `<div class="card card-comment">
                    <div class="name-comment">
                        <p>${comment.name}</p>
                    </div>
                    <div class="text-comment">
                        <p>${comment.comment}</p>
                    </div>        
                </div>`;
    }
}