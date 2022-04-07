export class Animal {
  constructor(public name: string){}

  move(){
    console.log('Moving along!');
  }
  greeting(){
    return `Hello I'm ${this.name}`;
  }
}

const dorami = new Animal('Dorami');
console.log(dorami.greeting());
dorami.move();

console.log('-----------------------------');

export class Dog extends Animal{

  constructor(
    name: string, //no poner public aca
    public owner: string
    ){
      super(name);
  }

  woof(times: number):void{
    for(let i = 0; i < times; i++){
      console.log('Woof!');
    }
  }
}

const huesos = new Dog('huesos', 'Bart');
console.log(huesos.greeting());
huesos.move();
huesos.woof(3);
console.log(huesos.owner);
