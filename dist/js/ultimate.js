$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  $("li.has-sub").on("click", function () {
    $(this).find(".chevron-forward-outline").toggleClass("rotating");
    $(this).find(".sub-links").slideToggle();
  });
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      openFullscreen();
      $(this).find("ion-icon").attr("name", "contract");
    } else {
      closeFullscreen();
      $(this).find("ion-icon").attr("name", "expand");
    }
  });
  $(".toggle-settings").on("click", function () {
    $(this).parent(".settings-box").toggleClass("show-settings");
  });
  var themeClasses = [];
  $(".colors-box li").each(function () {
    themeClasses.push($(this).data("theme"));
  });
  $(".colors-box li:first-of-type").addClass("active");
  $(".colors-box li").on("click", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $("body")
      .removeClass(themeClasses.join(" "))
      .addClass($(this).data("theme"));
  });
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
