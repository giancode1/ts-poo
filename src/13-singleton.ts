//constructores privados:
//Singleton uno de los principios de la arquitectura SOLID
//Singleton garantiza que solo exista una instancia de la clase, previniendo bloqueos de memoria y crean muchas instancias, garantiza que solo tenemos un punto de acceso unico

export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string){}

  getName(){
    return this.name;
  }
  static create(name: string){
    if(MyService.instance === null){
      console.log('deberia entrar una vez')
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());  //service 1

const myService2 = MyService.create('service 2');
console.log(myService2.getName());  //service 1

const myService3 = MyService.create('service 3');
console.log(myService3.getName()); //service 1

console.log(myService1 === myService2);  //true

















