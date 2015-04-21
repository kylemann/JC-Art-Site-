
$(window).load(function(){
$('a').click(function(){
$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top
}, 500);
return false;
});
});
        
        

           
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
$('nav').addClass("sticky");
}
else{
$('nav').removeClass("sticky");
}
});
     

$(document).ready(function() { 
    $("#clickMe").click(function() {

        var src = $('#myimage').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        if(src == 'picture1.png') {
            $("#myimage").attr("src","picture2.png");

        //if the current image is picture2.png, change it to picture3.png 
        } else if(src == "picture2.png") {
            $("#myimage").attr("src","picture2.png"); 

        //if the current image is anything else, change it back to picture1.png
        } else {
            $("#myimage").attr("src","picture2.png");
        }
    }); 
});


   