class BaseBird {
    makeSound() {

    }
}


class Bird extends BaseBird {
    fly() {
        console.log("Bird fly");

    }

    makeSound() {
    }
}

class Sparrow extends Bird {
    fly(): void { // override fly
        console.log("sparrow fly");

    }
    // override makeSound
    makeSound(): void {
        console.log("sparrow sound");
    }
}

class Penguine extends BaseBird {
    makeSound(): void {
        console.log("Penguine sound");

    }
}



function makeBirdFly(bird: Bird) {
    bird.fly();
}

// makeBirdFly(new Penguine()) // error : // Error: Penguine cannot fly
makeBirdFly(new Sparrow()); // works fine



// 3rd Principle: Liskov Substitution Principle (LSP)
// this principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, if class B is a subclass of class A, then we should be able to replace A with B without altering the desirable properties of the program.
// In this example, we have a base class Bird and two subclasses Sparrow and Penguine. The makeBirdFly function expects an instance of Bird, but when we pass an instance of Penguine, it throws an error because Penguine cannot fly. This violates the Liskov Substitution Principle because we cannot substitute Penguine for Bird without affecting the program's correctness.
// To fix this, we can create an BaseBird class that has only makeSound method and then make the Bird, Sparrow and Penguine classes extend this BaseBird class. This way, we can ensure that all subclasses have the same behavior and can be substituted without affecting the program's correctness.
