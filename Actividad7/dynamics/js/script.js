$(document).ready(function() {
    $(".results").load("./dynamics/php/Consultas.php");
  
    $(".submitcarr").on("click", ()=>{
      let nombrecarr=$("input").val();
      let peticion=$.ajax({ 
          url: "./dynamics/php/Consultas.php",
          data: {busq: nombrecarr},
          method: "POST"
      });
      peticion.done((resp) =>{
          $(".results").html(resp);
      });
      peticion.fail((resp) => {
          $(".results").html("<h1>No carga):</h1>");
      })
    });
    $(".submitcarr").on("click", ()=>{
      let modalidad=$("select").val();
      let peticion2=$.ajax({
          url: "./dynamics/php/Consultas.php",
          data: {dato: modalidad},
          method: "POST"
      });
      peticion2.done((resp) =>{
          $(".results").html(resp);
      });
    });
  });