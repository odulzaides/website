(function () {
    $('#show-menu').mouseenter(function () {
        // alert("Clicked");
        // Show Menu
        // $('#menu').filter(".show-menu")
        //     .removeClass('show-menu');
        $('#menu').addClass("show-menu");
    });
   $('#menu').mouseleave(function () { 
        $('#menu').removeClass('show-menu');
    });
    
})();