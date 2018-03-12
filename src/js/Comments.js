var $ = require('jquery');
var Utils = require('./Utils');
var CommentsService = require('./CommentsService');

var CommentsList = {

    selector: '.comments-list-wrapper',

    _listSelector: '.comments-list',

    setAsLoaded: function () {
        $(this.selector).removeClass("empty error").addClass("loaded");
        return this;
    },

    setAsEmpty: function () {
        $(this.selector).removeClass("loaded error").addClass("empty");
        return this;
    },

    setAsError: function () {
        $(this.selector).removeClass("loaded empty").addClass("error");
        return this;
    },

    setAsEmpty: function () {
        $(this.selector).removeClass("loaded").addClass("empty");
        return this;
    },

    setAsLoading: function () {
        $(this.selector).removeClass("empty loaded error");
        return this;
    },

    addComment: function (comment) {
        var html = '<div class="comment">';
        html += '<div class="comment-body">';
        html += '<div class="comment-author">';
        html += Utils.escapeHTML(comment.author);
        html += '</div>';
        html += Utils.escapeHTML(comment.text);
        html += '</div>';
        html += '</div>';
        $(this.selector).find(this._listSelector).append(html);
        return this;
    }

};

var CommentsForm = {

    _selector: '.comments-form form',

    isValid: function(){
        var words = $(this._selector).find("textarea").val().split(" ").length;
        return $(this._selector)[0].checkValidity() && words > 0 && words < 120;
    },

    submitButtonEnabled: function(bool) {
        $(this._selector).find("button").attr("disabled", !bool);
    }

};


$(document).ready(function () {

    if ($(CommentsList.selector).length > 0) {  // When comments system is present

        $(document).scroll(function(){
            if (Utils.isElementInView($(CommentsList.selector), true)) {
                CommentsService.list().done(function (comments) {
                    if (comments.length == 0) {
                        CommentsList.setAsEmpty();
                    } else {
                        for (var i in comments) {
                            var comment = comments[i];
                            CommentsList.addComment(comment);
                        }
                        CommentsList.setAsLoaded();
                    }
                }).fail(function (data) {
                    console.error("Error while loading comments list", data);
                    CommentsList.setAsError();
                });
                $(this).unbind("scroll");
            }
        });

        $(".comments-form form").on("submit", function () {

            if (CommentsForm.isValid()) {
                var self = this;
                var comment = {
                    author: $("#fullName").val(),
                    email: $("#email").val(),
                    text: $("#comment").val()
                };
                CommentsList.setAsLoading();
                CommentsService.create(comment).done(function(createdComment){
                    CommentsList.addComment(createdComment).setAsLoaded();
                    $(self).reset();
                }).fail(function(){
                    console.error("Error while loading comments list", data);
                    CommentsList.setAsError();
                });
            }

            return false;
        });

        $(".comments-form input, .comments-form textarea").on("keyup", function(){
            CommentsForm.submitButtonEnabled(CommentsForm.isValid());
        });

    }

});