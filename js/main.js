//función que se ejecutará al cargar la página
$(document).ready(function(){
    //funcion para borrar corousel
    $("#mostrar").on("click",function(){
        $("#carouselExampleFade").fadeToggle(1000);
        
    });
    
});
        
    

var colorBody = $('#color');

colorBody.click(evento => {
    var $elemento = $(evento.target);
    
    if ($elemento.hasClass('black')) {
        $elemento.removeClass('black');
        $( "body" ).css('background', 'linear-gradient(rgba(238, 156, 167,0.3),rgba(255, 179, 187,0.3),rgba(255, 221, 225,0.3))');
        
    }
    else {
        $elemento.addClass('black');
         $( "body").css( "background-color", "black" );
  }
});


var agregarHtml = $('#agregar');
var clone = $('div #central').clone();
agregarHtml.click(evento => {
  var $elemento = $(evento.target);
   
  if ($elemento.hasClass('central')) {
      $elemento.removeClass('central');
      $( "div #central" ).append('clone');
   
  }
  else {
    $elemento.addClass('central');
    $( "div #central" ).remove('#central');
  }
});

















  

        


       



    

