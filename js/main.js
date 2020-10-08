//función que se ejecutará al cargar la página
$(document).ready(function(){
    //funcion para borrar corousel
    $("#mostrar").on("click",function(){
        $("#carouselExampleFade").fadeToggle(1000);
        
    });
    
});
        
    

var $botones = $('#color');

$botones.click(evento => {
  var $elemento = $(evento.target);
   
  if ($elemento.hasClass('black')) {
    $elemento.removeClass('black');
    $( "body" ).css('background', 'linear-gradient(rgba(238, 156, 167,0.3),rgba(255, 179, 187,0.3),rgba(255, 221, 225,0.3))');
    //$( "body" ).css( "background-color", "black" );
  }
  else {
    $elemento.addClass('black');
    //$( "body" ).css('background', 'linear-gradient(rgba(238, 156, 167,0.3),rgba(255, 179, 187,0.3),rgba(255, 221, 225,0.3))'); 
    $( "body" ).css( "background-color", "black" );
  }
});

















    /*
    //función que se ejecutará al presionar el botón #color
    $("#color").on("click",function(){
        
        //cambio color del body
         $( "body" ).css( "background-color", "black" );
        
        //cambiamos texto según lo que corresponde
        /*var colorActual = $(this).filter($());
        if(colorActual == true){
            $( "body" ).css( "background-color", "red" );
        }  else{
            $( "body" ).css("background: linear-gradient(rgba(238, 156, 167,0.3),rgba(255, 179, 187,0.3),rgba(255, 221, 225,0.3))"); 
        }               

        
    });*/


        


       



    

