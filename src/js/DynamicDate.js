var $ = require('jquery');
var moment = require('moment');

function updateTimes() {
  $('.article time.date').each(function(){
      $(this).text(
          moment($(this).attr("datetime")).fromNow()
      );

  });
};

$(document).ready(function(){
    updateTimes();
    setInterval(updateTimes, 1000);
});