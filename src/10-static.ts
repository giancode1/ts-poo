// console.log(Math.PI);
// console.log(Math.max(1,2,3,4,5));

class MyMath {
   static readonly PI = 3.14;

   static max(...numbers: number[]){
    //return numbers.reduce((max, item) => max > item ? max : item, 0);
    return numbers.reduce((max, item) => max > item ? max : item, numbers[0]);  //corrige con numeros negativos
   }
}

//MyMath.PI = 10;  //error, readonly
console.log(MyMath.PI);              //3.14
console.log(MyMath.max(1,12,3,4,5)); //12
const n = [-10,20,30,60,40,50];
console.log(MyMath.max(...n));        //60
console.log(MyMath.max(-1,-8, -55));  //-1
