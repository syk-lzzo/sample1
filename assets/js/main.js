$(() => {
  // モバイルメニュー表示
  $(".openBtn").on("click", function () {
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
    console.log("test");
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
