setTimeout(()=>{
    
  var fecha = new Date();
  fecha.setTime(fecha.getTime()+1000*60*15);
  console.log(document.cookie);

  function obtenerCookie(x){
      let cookies = document.cookie;
      let arrCookies= cookies.split('; ');
      let arrcookitas= arrCookies;
      if(arrCookies[1]=="cookie2=1" || arrCookies[1]=="cookie2=2"){
          let array2=arrCookies[1].split("=");
          console.log("array2"+array2[0]);
          if(x==3)
          {
              return array2[0];
          }
      }
      
      for(const valor of arrcookitas)
      {
          const cookitas= valor.split('=');
          console.log("VALOR"+valor);
          if(x==0){
              if(cookitas[0]==="cookie1"){
              return "cookie2";
              }
              else{
                  return "cookie1";
              }
          }
          else if(x==1){
              if(cookitas[0]==="cookie1"){
                  return cookitas[1];
              }
          }
          else{
              if(cookitas[0]==="cookie2"){
                  return cookitas[1];
              }    
          }  
      }
  }

  function checar(cookie)
  {
      let res = prompt('Escriba "Derecha" o "Izquierda" según el camino que quiera escoger.');
      if(res==='Derecha'){
          document.cookie=cookie+"=1; expires="+fecha.toGMTString();
      }
      else if(res==='Izquierda'){
          document.cookie=cookie+"=2; expires=" +fecha.toGMTString();
      }
      else{
          window.alert("Introduzca una opción válida");
          location.reload();
      }
      return cookie;
  }
  let hacer=obtenerCookie(3);
  if(hacer!="cookie2")
  {
      let cookie=obtenerCookie(0);
          let mandar=checar(cookie);
          if(mandar != "cookie2")
          {
              cookie=obtenerCookie(0);
              checar(cookie);
          }
          location.reload();
  }
  else
  {
          let val1=obtenerCookie(1);
      let val2=obtenerCookie(2);
      console.log(document.cookie);
      console.log(val1);
      console.log(val2);
      if(val1==1 && val2==1)
              window.location="./CasaBruja.html";
      else if(val1==1 && val2==2)
          window.location="./HongoMalo.html";
      else if(val1==2 && val2==1)
          window.location="./Arbolito.html";
      else if(val1==2 && val2==2)
          window.location="./Casita.html";
  }
  
}, 1000);