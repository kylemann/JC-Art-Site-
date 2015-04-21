
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
        
        if(src == 'images/image1.jpg') {
            $("#myimage").attr("src","images/image2.jpg");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/image2.jpg") {
            $("#myimage").attr("src","images/image3.jpg");
            

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/image3.jpg") {
            $("#myimage").attr("src","images/image4.jpg"); 


             //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/image4.jpg") {
            $("#myimage").attr("src","images/left-arrow.svg"); 


                         //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/left-arrow.svg") {
            $("#myimage").attr("src","images/rss.jpg"); 

             //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/rss.jpg") {
            $("#myimage").attr("src","images/stockphoto1.jpg"); 

             //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/stockphoto1.jpg") {
            $("#myimage").attr("src","images/s-f image.jpg"); 

             //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/s-f image.jpg") {
            $("#myimage").attr("src","images/image1.jpg"); 


        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#myimage").attr("src","images/image1.jpg");
        }
    }); 
});


   