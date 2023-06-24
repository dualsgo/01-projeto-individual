$(document).ready(function () {
  // Handler para os links do menu
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").animate(
      {
        scrollTop: offset,
      },
      500
    );
  });
});
