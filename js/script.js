$(document).ready(function(){
    
    //nojs
    $("body").removeClass("no-js");
    
    //------------------------------------------------------------------------//
    
    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});
    
    //------------------------------------------------------------------------//
    
    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();
    
    //------------------------------------------------------------------------//
        
});//document ready
