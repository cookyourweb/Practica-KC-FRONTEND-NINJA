module.exports = {

    escapeHTML: function (str) {
        return $('<div>').text(str).html();
    },

    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementBottom <= pageBottom) && (elementTop >= pageTop));
        }
    }

}