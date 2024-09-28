class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        const date = new Date();
        return date.getFullYear()- this.year;
    }
}

const audi = new Car("100Z", 2022);
console.log(audi);
console.log(audi.age());

const toyato = new Car("Hybrid", 2020);
console.log(toyato);
console.log(toyato.age());