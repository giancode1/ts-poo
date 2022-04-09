import { Dog } from './09-protected';
function getValue<T>(value: T) {
    return value;
}

//infiere el tipo
console.log(getValue(10.67).toFixed());
console.log(getValue('10').charAt(0));

//tambn
console.log('---'.repeat(10));
function getValue2<myType>(value: myType) {
    return value;
}

console.log(getValue2<number>(12.67).toFixed());
console.log(getValue2<string>('25').charAt(0));
console.log(getValue2<number[]>([15,24,1,67]).reverse());



//tambn
console.log('+++'.repeat(10));
function getValue3<myType, myType2>(value: myType) {
  //algun codio con myType2
  //const array: myType2[] = value;
  return value;
}

//tambn
// const firulais = new Dog('firulais', 'juan');
// getValue<Dog>(firulais).greeting();











