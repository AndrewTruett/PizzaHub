$(document).ready(function() {
   $(".list-group-item").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
   });
});