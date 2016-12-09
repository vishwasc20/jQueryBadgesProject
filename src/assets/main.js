$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/vishwasc20.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each( response.courses.completed, function( key, value ) {
        var element = $("<div class='courses'></div>").text(value);
        $("#badges").append(element);
        var title = $("<h3></h3>").text(response.courses.completed[key].title);
        $(element).append(title);
        var badge = $("<img/>").src(response.courses.completed[key].badge);
        $(element).append(badge);
        var button = $("<a class='btn btn-primary'></a>")
          .href(response.courses.completed[key].url)
          .target("_blank")
          .text("See Course");
        $(element).append(badge);
      });
    }
  });
});
