function submitForm(){
    var email = $("#email").val();
 
    $.ajax({
        type: "POST",
        url: "process.php",
        data: "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
