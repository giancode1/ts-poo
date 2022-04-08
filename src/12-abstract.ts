//clases abstractas
//forma de restringir la creacion de objetos de las clases padre
import { Animal, Dog } from './09-protected'

// const animal = new Animal('animal'); //agregado abstract en la clase Animal, nose puede crear objetos de esta clase
// animal.greeting();

const bulldog = new Dog('bulldog', 'gian');
bulldog.greeting();
bulldog.woof(2);





