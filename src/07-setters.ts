export class MyDate {
  constructor(
    public year: number = 2006,
    private _month: number = 7,
    private day: number = 9
  ){}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
  get myDay(){ //siempre debe devolver un valor
    //puedes ejecutar alguna lógica, antes de devolver el valor
    return this.day;
  }
  get month(){
    //puedes ejecutar alguna lógica, antes de devolver el valor
    return this._month;
  }
  get isLeapYear():boolean{
    if(this.year % 400 === 0) return false
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0;
  }

  set month(newValue: number){ //no retorna nada
    if(newValue > 1 && newValue < 12){
      this._month = newValue;
    }else{
      throw new Error('month out of range');
    }
    this._month = newValue;
  }
}

const myDate = new MyDate(2022, 2, 10); //yyyy, mm, dd
console.log(myDate);
console.log('myDay:', myDate.myDay);
console.log('month:', myDate.month);

console.log(myDate.month = 6); //ya no da error por el setter

console.log(myDate.isLeapYear);
