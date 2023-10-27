$(function () {
  $("#myContent").children().css("display", "none");
  $("#myContent")
    .children()
    .eq($("#myTab a").index($("#myTab a.active")))
    .css("display", "flex");

  $("#myTab a").click(function () {
    $("#myTab a").removeClass("active");
    $(this).addClass("active");
    $("#myContent").children().css("display", "none");
    $("#myContent")
      .children()
      .eq($("#myTab a").index($(this)))
      .css("display", "flex");
  });
});
