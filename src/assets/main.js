$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/vishwasc20.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each( response.courses.completed, function( key, value ) {
        console.log("response.courses.completed :",value);
        var element = $("<div></div>").text(value).addClass("course");
        $("#badges").append(element);
        var title = $("<h3></h3>").text(response.courses.completed[key].title);
        $(element).append(title);
        var badge = $("<img/>").attr("src", response.courses.completed[key].badge);
        $(element).append(badge);
        var button = $("<a></a>")
          .addClass("btn btn-primary")
          .attr("href", response.courses.completed[key].url)
          .attr("target", "_blank")
          .text("See Course");
        $(element).append(button);
      });
    }
  });
});
