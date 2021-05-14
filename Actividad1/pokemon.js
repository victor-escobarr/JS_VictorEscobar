//console.log("Hola mundo");
class Pokemon {
    constructor (nombre,naturaleza,tipo,vida,ataque,defensa,velocidad,nivel) {
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    //presentacion
    presentarse(){
         console.log('Hola, me llamo '+this.nombre+' soy tipo '+this.tipo+' y estoy al nivel '+this.nivel+' ');
    }
    //suma
    suma(){
        let suma = this.vida+this.ataque+this.defensa+this.velocidad;
        console.log('La suma de tus estadisticas es '+suma+'');
    }
    //estadisticas
    estadisticas(){
        let suma = this.vida+this.ataque+this.defensa+this.velocidad;
        let div = suma/4
        console.log ('El promedio de tus estadisticas es '+div+'');
    }
    //subir nivel
    SubirNvel() {
     if (this.nivel<=99)
     {
        console.log('Su pokémon ha subido de nivel');
        console.log('Su pokémon era nivel '+this.nivel+'');
        this.nivel++;
        console.log('Su pokémon ahora es nivel '+this.nivel+'');

        // Sube alguno de sus stats dependiendo de la naturaleza del pokemon

        switch (this.naturaleza) {
            case 'Audaz':
                console.log('Su nivel de ataque era '+this.ataque+'');
                this.ataque++;
                this.ataque++;
                this.ataque++;
                this.ataque++;
                console.log('Su nivel de ataque ahora es '+this.ataque+'');
                break;
            case 'Osada':
                console.log('Su nivel de defensa era '+this.defensa+'');
                this.defensa++;
                this.defensa++;
                this.defensa++;
                this.defensa++;
                console.log('Su nivel de defensa ahora es '+this.defensa+'');
                break;
            case 'Cauta':
                console.log('Su nivel de vida era '+this.vida+'');
                this.vida++;
                this.vida++;
                this.vida++;
                this.vida++;
                console.log('Su nivel de vida ahora es '+this.vida+'');
                break;
            case 'Alegre':
                console.log('Su nivel de velocidad era '+this.velocidad+'');
                this.velocidad++;
                this.velocidad++;
                this.velocidad++;
                this.velocidad++;
                console.log('Su nivel de velocidad ahora es '+this.velocidad+'');
                break;
        }
     }
     else{
         console.log('Ya no puedoes subir de nivel, estas al maximo')
     }
    }
    
}

//Bulbasaur
const Bulbasaur = new Pokemon(nombre = "Bulbasaur" , naturaleza = 'Osada', tipo ='grass & poison', vida = 45, ataque = 49, defensa = 49, velocidad =45, nivel =1);
//Charmander
const Charmander = new Pokemon(nombre = "Charmander" , naturaleza = 'Cauta', tipo ='fire', vida = 39, ataque = 52, defensa = 43, velocidad =65, nivel =3);
//Squirtle
const Squirtle = new Pokemon(nombre = "Squirtle" , naturaleza = 'Osada', tipo ='grass & poison', vida = 44, ataque = 48, defensa = 65, velocidad =43, nivel =2);
//Calyrex
const Calyrex = new Pokemon(nombre = "Calyrex" , naturaleza = 'Audaz', tipo ='Psychic & Grass', vida = 100, ataque = 80, defensa = 88, velocidad =80, nivel =20);
//Corviknight
const  Corviknight = new Pokemon(nombre = "Corviknight" , naturaleza = 'Alegre', tipo ='flying & steel', vida = 98, ataque = 87, defensa = 105, velocidad =67, nivel =20);







