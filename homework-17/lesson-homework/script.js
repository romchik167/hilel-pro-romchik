class House {
    apartments = new Map();

    addApart(obj) {
        this
            .apartments
            .set(obj.number, obj)
    };
}
class Apartment {
    constructor(number, roomsAmount, people) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        this.people = people;
    }
}
class Person{
    constructor(name){
        this.name = name
    }
}

const people1 = [
    new Person('Roma'),
    new Person('Ivan'),
    new Person('Roma'),
]

const people2 = [
    new Person('qqq'),
    new Person('sss'),
]

const people3 = [
    new Person('xxx'),
]


const apartments = [
    new Apartment(101, 1, people1),
    new Apartment(102, 2, people2),
    new Apartment(103, 3, people3),
]

const bigHouse = new House();

apartments.forEach(app => bigHouse.addApart(app))


console.log(bigHouse)

