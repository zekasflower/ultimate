$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  $("li.has-sub").on("click", function () {
    $(this).find(".chevron-forward-outline").toggleClass("rotating");
    $(this).find(".sub-links").slideToggle();
  });
});
