// Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
// out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
// that type). They cannot select which specific animal they would like. Create the data structures to
// maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
// and dequeueCat. You may use the built-in Linkedlist data structure.

class AnimalShelter {
    constructor () {
        this.animals = []
        this.dogs = []
        this.cats = []
    }

    enqueue (animal) {
        this.animals.push(animal)

        if (animal instanceof Dog)
            this.dogs.push(animal)
        else
            this.cats.push(animal)

        return this
    }

    dequeueAny () {
        const animal = this.animals.shift()

        if (animal instanceof Dog)
            this.dogs.shift()
        else
            this.cats.shift()

        return animal
    }

    dequeueDog () {
        const dog = this.dogs.shift()

        const index = this.animals.indexOf(dog)

        const removed = this.animals.splice(index, 1)[0]

        // Assert
        if (dog.name !== removed.name) {
            throw new Error('Removed incorrect animal')
        }

        return dog
    }

    dequeueCat () {
        const cat = this.cats.shift()

        const index = this.animals.indexOf(cat)

        const removed = this.animals.splice(index, 1)[0]
        // Assert
        if (cat.name !== removed.name) {
            throw new Error('Removed incorrect animal')
        }

        return cat
    }

    isEmpty () {
        return this.animals.length === 0
    }
}

class Animal {
    constructor (name) {
        this.name = name
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name)
    }
}

class Cat extends Animal {
    constructor (name) {
        super(name)
    }
}

const animalShelter =
    new AnimalShelter()
        .enqueue(new Cat('Super Pawson'))
        .enqueue(new Cat('Whiskeys'))
        .enqueue(new Cat('Devil'))
        .enqueue(new Dog('John'))
        .enqueue(new Dog('Bob'))
        .enqueue(new Dog('General Fluffy'))

console.log(animalShelter.animals)

console.log(animalShelter.dequeueAny())
console.log(animalShelter.dequeueDog())

console.log(animalShelter.animals)
