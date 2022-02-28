$(() => {
  // モバイルメニュー表示
  $(".openBtn").on("click", function () {
    $("nav").toggleClass("open");
  });
});

$(() => {
  // モバイルメニュー非表示
  $(".closeBtn").on("click", function () {
    $("nav").removeClass("open");
  });
});

$(() => {
  // モバイルメニュー非表示
  $("nav a").on("click", function () {
    $("nav").removeClass("open");
  });
});
