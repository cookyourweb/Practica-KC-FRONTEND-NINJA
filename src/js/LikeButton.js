var $ = require('jquery');
var LikeService = require('./LikeService');

var LikeButton = {

    isSetAsLiked: function(button) {
        return $(button).hasClass("liked");
    },

    setAsLoading: function(button){
        $(button).removeClass("liked disliked").attr("disabled", true);
    },

    setAsLiked: function(button) {
        $(button).removeClass("disliked").addClass("liked").attr("disabled", false);
    },

    setAsDisliked: function(button) {
        $(button).removeClass("liked").addClass("disliked").attr("disabled", false);
    }
};

// like button
$('.like-button').on("click", function(){
    var self = this;
    var postId = $(self).data('article');
    var isSetAsLiked = LikeButton.isSetAsLiked(self);
    LikeButton.setAsLoading(self);
    if (isSetAsLiked) {
        LikeService.dislike(postId).then(function(){
            LikeButton.setAsDisliked(self);
        }, function(error){
            alert(error);
        });
    } else {
        LikeService.like(postId).then(function(){
            LikeButton.setAsLiked(self);
        }, function(error){
            alert(error);
        });
    }
}).each(function(){
    // checks if the post is liked or not
    var self = this;
    var postId = $(self).data('article');
    LikeService.isLiked(postId).then(function(postIsLiked){
        if (postIsLiked) {
            LikeButton.setAsLiked(self);
        } else {
            LikeButton.setAsDisliked(self);
        }
    }, function(error){
        alert(error);
    });

});