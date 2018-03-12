var $ = require('jquery');

module.exports = {

    _buildKey: function(postId) {
        return "post_" + postId;
    },

    like: function(postId){
        var deferred = $.Deferred();
        var key = this._buildKey(postId);

        // someday this code will be async
        setTimeout(function(){
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(key, "true");
                deferred.resolve({"id": postId});
            } else {
                deferred.reject({"browser": "Local Storage not supported"})
            }
        }, 500); // fake a delay on time response

        return deferred;
    },

    dislike: function(postId){
        var deferred = $.Deferred();
        var key = this._buildKey(postId);

        // someday this code will be async
        setTimeout(function(){
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(key, false);
                deferred.resolve({"id": postId});
            } else {
                deferred.reject({"browser": "Local Storage not supported"})
            }
        }, 500); // fake a delay on time response

        return deferred;
    },

    isLiked: function(postId){
        var deferred = $.Deferred();
        var key = this._buildKey(postId);

        // someday this code will be async
        setTimeout(function(){
            if (typeof(Storage) !== "undefined") {
                deferred.resolve(localStorage.getItem(key));
            } else {
                deferred.reject({"browser": "Local Storage not supported"})
            }
        }, 500); // fake a delay on time response

        return deferred;
    }

}