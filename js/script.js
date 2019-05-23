$(document).ready(function()
{
$("#botonparrafo").click(function(){
        $.get("parrafos.html", function(htmlexterno){
   $("#cargaexterna").html(htmlexterno);
    	});
});

$("#botonprecios").click(function(){
        $.get("precios.html", function(htmlexterno){
   $("#cargaexterna").html(htmlexterno);
    	});
});
});