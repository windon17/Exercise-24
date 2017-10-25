$(document).ready(function(){
    $("#btnSubmit").click(function(){
        $("form").fadeOut("slow", function(){
            $("#thankyou").fadeIn();
          
        });
    });
});