//función que se ejecutará al cargar la página
$(document).ready(function(){
    //funcion para borrar corousel
    $("#mostrar").on("click",function(){
        $("#carouselExampleFade").fadeToggle(1000);
        
    });
    
});
        
    

    
    //función que se ejecutará al presionar el botón #color
    $("#color").on("click",function(){
        
        //cambio color del body
        // $( "body" ).css( "background-color", "red" );
        
        //cambiamos texto según lo que corresponde
        var colorActual = $(this).filter($("#color"));
        if(colorActual == true){
            $( "body" ).css( "background-color", "red" );
        } /* else{
            $( "body" ).css("background: linear-gradient(rgba(238, 156, 167,0.3),rgba(255, 179, 187,0.3),rgba(255, 221, 225,0.3))"); 
        }   */            

        
    });


        


       



    

