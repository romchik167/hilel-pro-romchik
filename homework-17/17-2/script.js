class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    displayInfo() {
        console.log(
            `Coach: ${this.name}, rating: ${this.rating}", specialization: ${this.specialization}`
        )
    }
}
const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"
