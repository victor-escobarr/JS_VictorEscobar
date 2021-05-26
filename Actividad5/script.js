let bjugar = document.getElementById('jugar');
let verifica = document.getElementById('verificar');

bjugar.addEventListener('click', () => {

  //definiciones
  let numeros = [];
  let usuario =[];
  let crojo = document.getElementById('rojo');
  let cverde = document.getElementById('verde');
  let camarillo = document.getElementById('amarillo');
  let cazul = document.getElementById('azul');
  
  //nos da los numeros random que vamos a ocupar
  function rand (){
    return Math.floor((Math.random()*(4-1+1))+1);
  }

  //nos sirve para regresar el color a su original
  function regresa_rojo(){
    rojo.style.backgroundColor = 'red';
  }
  function regresa_verde(){
    verde.style.backgroundColor = 'green';
  }
  function regresa_amarillo(){
    amarillo.style.backgroundColor = 'yellow';
  }
  function regresa_azul(){
    azul.style.backgroundColor = 'blue';
  }

  function perder(){
      plano.style.display="none";
      document.body.innerHTML = "<h1>Game Over</h1>";
  }

    
    crojo.addEventListener('click', ()=>{
      usuario.push(1);
      console.log(usuario);
      })

    cverde.addEventListener('click', ()=>{
      usuario.push(2);
      console.log(usuario);
      })

    camarillo.addEventListener('click', ()=>{
      usuario.push(3);
      console.log(usuario);
      })

    cazul.addEventListener('click', ()=>{
      usuario.push(4);
      console.log(usuario);
      })

  function numero(num, callback1){
    let n = rand();
  
    console.log(n);
    numeros.push(n);
    console.log(numeros);
    setTimeout(()=>{
      callback1(n+num)
    },1000)
    

    if(n==1){
      console.log('salió uno');
      rojo.style.backgroundColor = '#610B0B';
      setTimeout(regresa_rojo,1000);
    }
    if(n==2){
      console.log('salió dos');
      verde.style.backgroundColor = '#0B610B';
      setTimeout(regresa_verde,1000);
  }
    if(n==3){
      console.log('salió tres');
      amarillo.style.backgroundColor = '#5E610B';
      setTimeout(regresa_amarillo,1000);
    }
    if(n==4){
      console.log('salió cuatro');
      azul.style.backgroundColor = '#0B0B61';
      setTimeout(regresa_azul,1000);
    }

  }
  
  numero(0, (x)=>{
    numero(x, (y)=>{
      numero(y, (z)=>{
        numero(z, (a)=>{
          numero(a, (b)=>{
            setTimeout(()=>{    
            }, 1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000);

  verifica.addEventListener('click', () => {
    console.log(numeros);
    console.log(usuario);
  if(JSON.stringify(usuario)==JSON.stringify(numeros) ){
    console.log('ganas');
    document.body.innerHTML = '<h1>Ganaste</h1> <img src="felicidades.jpg" height="50%" width="50%">'
  }
  else{
    console.log('no ganaste victor');
    document.body.innerHTML = '<h1>Perdiste</h1> <img src="clau.jpg" height="50%" width="50%">'
  }
});
});