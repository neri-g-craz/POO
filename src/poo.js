/* Paradigmas de operación
Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.

Programacion basada en eventos: Se basa en la gestion y respueseta de eventos

Programación declarativa: Explica lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (métodos).
*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//Objetos
//El constructor es una función especial, cuya finalidad es la de construir o instancear objetos.
//para inicializar un objeto es necesario definir un constructor que tomará los atributos
//clases = molde Objeto = gomita Constructro = chefsito atributos = ingredientes metodos = comportamientos.

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}

comer(){
    console.log("Bon apetit");
} //método comer

bailar (){
    console.log("Dale hasta el suelo");    
} //metodo bailar


mostrarInfo(){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Telefono: ", this.telefono);
}

descansar (){
    console.log("Acuestate, te veo cansado");
}

}

let usuarioUno = new persona ("Rene", "Gomez", 29, "dickinson@hotmail.com", "7767123456")

let usuarioDos = new persona ("Alberto", "Aguilera", 72, "juanga@live.com.mx", "0998865543")

let usuarioTres = new persona ("Carlos", "Beltran", 28, "jcarlitos@liverpool.com.mx", "3462865543")

let usuarioCuatro = new persona ("Shinji", "Tsuneda", 15, "shintsu@world.us", "7649321543")

let usuarioCinco = new persona ("Calamardo", "Tentaculos", 35, "squidward@nick.com", "5465783291")

console.log(usuarioCinco);//Imprimir objeto completo
console.log(usuarioUno.email);//Imprimir un atributo en especifico

usuarioDos.bailar();//Invocar el método

usuarioTres.mostrarInfo();

usuarioCuatro.descansar();

console.log(usuarioCinco.apellido, usuarioUno.edad);


//Pilares de la programación orientada a objetos

/*
Herencia
Polimorfismo
Encapsulamiento
Abstracción
*/

//Herencia nos permite heredar a clases inferiores para poder optimizar el programa

class arrendador extends persona {//subclase
    capacidadSalon = 0;
    direccionSalon = "";
    nombreSalon = "";

    constructor (nombre, apellido, edad, email, telefono, capacidadSalon, nombreSalon, direccionSalon){
        super(nombre, apellido, edad, email, telefono);
        this.capacidadSalon = capacidadSalon;
        this.nombreSalon = nombreSalon;
        this.direccionSalon = direccionSalon;
    }


mostrarInfo(){
    console.log("Capacidad", this.capacidadSalon);
    console.log("Nombre del Salon", this.nombreSalon);
    console.log("La dirección es: ", this.direccionSalon);
}

}
/*
class arrendadorGuadalajara extends arrendador {
    
}
*/

let arrendadorUno = new arrendador("Rocio", "Hernandez", 29, "rocio@gmail.com", "5555543843", 100, "la fuente", "Domicilio conocido, Tlalpan")

console.log(arrendadorUno);
console.log(arrendadorUno.direccionSalon);
arrendadorUno.mostrarInfo();

/*
class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();
  */

/*
  Polimorfismo: Tener objetos de diferentes tios que pueden ser manipulados en comun
  */

class producto {
    marca = "";
    precio = 0;

    constructor (marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }
    mostrarDescripcion(){
        console.log("Marca: ");
    }
}

let productoUno = new producto("cerave", 85);

//Encapsulamiento: ocultar la implementación de un objeto y solo mostrar los datos necesarios

class usuario{
    #contrasenia;

    constructor(userName, correo, contrasenia){
    this.userName = userName;
    this.correo = correo;
    this.#contrasenia = contrasenia;
    }

    verificarContrasenia(contrasenia) {
        return this.#contrasenia === contrasenia;
    }
}


//Abstraccion no es nada más que traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, métodos, constructores y objetos

//Los objetos de tipo json en un fomrato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y le servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principios solid

/*
1 >- Principio de responsabilidad unica (Single Responsibility Principle)
Una clase de tener asignada una tarea o resposabilidad especifica y esta no debería de cambiar
2 >- Principio abierto/cerrado (open/closed principle OCP)
Una clase pueede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma
3 >- Principio de sustitucion de Liskov (Liskov Sustitution Principle LSP)
Una clase hijo puede sustituir objetos de una clase padre
4 >- Principio de segregacion de interfaces (Interface Segregation Principle ISP)
Delimitar los metodos que necesito y dejar fuera los innecesarios
5 >- Principio de inversion de dependencias (Dependency Inversion Principle DIP)
*/

/*
Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no

Atributos
Nombre 
Calificación

métodos
imprimirCalificación
evaluación

lacalificación aprobatoria es de 6
if para evaluar la calificación 
*/


