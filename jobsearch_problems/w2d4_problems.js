class Person {
  constructor(name) {
    this.name = name
  }

  logName() {
    console.log(this.name);
  }
}

let p = new Person('Brandon')
p.logName()
