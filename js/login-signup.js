$(".toggle-nav").click(function (){
    var id = $(this).attr('id');
    switch(id){
        case "signup-nav":
            $("#signup-wrapper").show();
            $("#login-wrapper").hide();
            $("#signup-nav").removeClass("active")
            $("#login-nav").addClass("active")
            break;

        case "login-nav":
            $("#signup-wrapper").hide();
            $("#login-wrapper").show();
            $("#signup-nav").addClass("active")
            $("#login-nav").removeClass("active")
    }
});