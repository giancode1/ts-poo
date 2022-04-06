export class MyDate {
  public year: number;
  public month: number;
  private day: number; //no puedes acceder a los atributos privados desde fuera de la clase

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    return value < 10 ? `0${value}` : `${value}`;
  }

  //este no es el algoritmo correcto para sumar fechas, solo sirve de ejemplo de metodos
  add(amount: number, type: 'days' | 'months' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
  getDay(){
    return this.day;
  }
}

const myDate = new MyDate(2022, 2, 10); //yyyy, mm, dd

//myDate.day = 30 //al ser privado, no se puede acceder a este atributo
//console.log('day', myDate.day); //al ser privado, no se puede acceder a este atributo

console.log(myDate.printFormat());
console.log('day:', myDate.getDay());



