window.alert("Se recomienda hacerle zoom a la pagina para apreciar mejor el cuadriculado");

let canva = document.getElementById("myCanvas")
let ctx = canva.getContext("2d")
let figura = document.getElementById("figuras")
/*-------------------tipo de color-----------------------*/
function tipocolor(){
  let c1 = document.getElementById("c1").value
  let c2 = document.getElementById("c2").value
  let tipoCol = document.getElementById("tipoColor").value
   let col2 =document.getElementById("c2")
    
    /*--------------degradado lineal--------------*/
    if(tipoCol==1){
        col2.style.display="block"
        let degradado = ctx.createLinearGradient(100, 50, 80, 90)
        degradado.addColorStop(0, c1)
        degradado.addColorStop(1, c2)
        ctx.fillStyle=degradado
        ctx.fill()
    }
    /*-----------------degradado radial------------*/
    else if(tipoCol==2){
        col2.style.display="block"
        let degradado = ctx.createRadialGradient(120, 120, 5, 120, 120, 120)
        degradado.addColorStop(0, c1)
        degradado.addColorStop(1, c2)
        ctx.fillStyle=degradado
        ctx.fill()         
    }
    /*-------------------------solido-----------------*/
    else if(tipoCol==3){
        ctx.fillStyle=c1
        ctx.fill()
        col2.style.display="none"
    }
}
/*------------------------colores--------------------------- */
function colores(){
    let colTipo=document.getElementById("tipoColor")
    let c1 = document.getElementById("c1")
    let col2=document.getElementById("c2")
   
    colTipo.addEventListener("change", ()=>{
        tipocolor();  
    })
    c1.addEventListener("change", ()=>{
        tipocolor();  
    })
    c2.addEventListener("change", ()=>{
        tipocolor();  
    })
}

/*----------------------opciones de figura----------------------*/
figura.addEventListener("change", ()=>{
    let fig= document.getElementById("figuras").value
    /*------------------Estrella----------------------*/
    if(fig==1){
     ctx.clearRect(0, 0, 320, 230)
     ctx.beginPath();
       ctx.moveTo(170, 20);
       ctx.lineTo(190, 80);
       ctx.lineTo(250, 80);
       ctx.lineTo(200, 120);
       ctx.lineTo(220, 180);
       ctx.lineTo(170, 140);
       ctx.lineTo(120, 180);
       ctx.lineTo(140, 120);
       ctx.lineTo(90,  80);
       ctx.lineTo(150, 80);
       ctx.lineTo(170, 20);
       colores()
       ctx.fill();
     ctx.closePath()
    }
    /*-------------------Mickey-------------------------*/
    else if(fig==2){
     ctx.clearRect(0, 0, 320, 230)
     ctx.beginPath();
       ctx.arc(160,140,50, 0, Math.PI*2);
       ctx.arc(120,85,30, Math.PI*0.4, Math.PI*0.3);
       ctx.arc(204,85,30, Math.PI*0.7, Math.PI*0.6);
       colores()
       ctx.fill();
     ctx.closePath()
    }
    /*----------------Avion------------------------*/
    else if(fig==3){
      ctx.clearRect(0, 0, 320, 220)
      ctx.beginPath();
        ctx.moveTo(40, 50);
        ctx.lineTo(80,90 );
        ctx.lineTo(130, 90);
        ctx.lineTo(130, 20);
        ctx.lineTo(190, 90);
        ctx.lineTo(250, 90);
        ctx.lineTo(280, 140);
        ctx.lineTo(190, 140);
        ctx.lineTo(130, 210);
        ctx.lineTo(130, 140);
        ctx.lineTo(80,  140);
        ctx.lineTo(40,  100);
        ctx.lineTo(40, 50);
        colores()
        ctx.fill();
      ctx.closePath()
    }
})
