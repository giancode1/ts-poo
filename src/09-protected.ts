export abstract class Animal {
  constructor(protected name: string){}

  move(){
    console.log('Moving along!');
  }
  greeting(){
    return `Hello I'm ${this.name}`;
  }
  protected doSomething(){
    console.log('Doing something');
  }
}


export class Dog extends Animal{

  constructor(
    name: string, //no poner public aca
    public owner: string
    ){
      super(name); //super, solo lo puedes llamar desde el constructor del hijo
  }

  woof(times: number):void{
    for(let i = 0; i < times; i++){
      this.doSomething();
      console.log("Woof! I'm", this.name);
    }
  }
  move(): void {
    console.log('moving as a dog');
    super.move();
  }
}

const huesos = new Dog('huesos', 'Bart');
//huesos.name = 'huesitos' //protected, no puedes cambiar el nombre
huesos.woof(1);
//huesos.doSomething(); //protected, no puedes acceder desde fuera de la clase

huesos.move();
