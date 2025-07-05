


// 5th Principle : Dependency Inversion Principle (DIP)
// This principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
// In other words, we should depend on interfaces or abstract classes rather than concrete implementations. This allows us to change the implementation without affecting the high-level module.
// In this example, we will create a simple dependency injection system using TypeScript.


// example : 


//                  Controller -> Service -> Repository -> Database(MongoDB, MySQL, etc.) 


// this is a common pattern in web applications where the controller depends on the service, the service depends on the repository, and the repository depends on the database. but we can use dependency injection to decouple these dependencies and make the code more testable and maintainable.

// Repository should not depend on Database directly, it should depend on an interface or abstract class that defines the methods that the repository needs to implement. This way, we can change the implementation of the database without affecting the repository.

// Service should not depend on Repository directly, it should depend on an interface or abstract class that defines the methods that the service needs to implement. This way, we can change the implementation of the repository without affecting the service.

// Controller should not depend on Service directly, it should depend on an interface or abstract class that defines the methods that the controller needs to implement. This way, we can change the implementation of the service without affecting the controller.



interface Repository {
    save(): void;
}

interface Service {
    save(): void;
}





class UserController {
    constructor(private service: Service) { }
    save() {
        this.service.save();
    }
}

class UserService {
    constructor(private repository: Repository) { }
    save() {
        this.repository.save();
    }
}

class UserPostgresRepository implements Repository {
    save() {
        console.log("save user in the postgres database");

    }
}

class UserMongoRepository implements Repository {
    save(): void {
        console.log("save user in the mongo databse");

    }
}

// if we are testing ( for testing purposes in production )
class FakeDatabaseRepository implements Repository {
    save(): void {
        console.log("save user in the fake databse ");

    }
}


class ModernUserService implements Service {
    constructor(private repository: Repository) { }
    save(): void {
        this.repository.save();
    }
}


// const userPostgresRepository = new UserPostgresRepository();
// const mongoUserRepository = new UserMongoRepository();
const fakeUserRepository = new FakeDatabaseRepository();
// const userService = new UserService(fakeUserRepository);
const modernService = new ModernUserService(fakeUserRepository);
const userController = new UserController(modernService);


userController.save();


// in above example, we are violating the Dependency Inversion Principle because the UserController depends on the UserService, which depends on the UserRepository, which depends on the concrete implementation of the database. This makes it difficult to change the implementation of the database without affecting the UserController.

// To fix this, we can use dependency injection to decouple the dependencies and make the code more testable and maintainable. We can create interfaces for the UserService and UserRepository and inject the concrete implementations at runtime.
// This way, we can change the implementation of the UserService and UserRepository without affecting the UserController.

// suppose in future we want to change the UserRepository to use a different database, we can create a new implementation of the UserRepository interface and inject it into the UserService without affecting the UserController. This allows us to change the implementation of the UserRepository without affecting the UserController, which is the main goal of the Dependency Inversion Principle.

// This is a simple example of how to use dependency injection to decouple the dependencies and make the code more testable and maintainable. In real-world applications, we can use frameworks like InversifyJS or NestJS to implement dependency injection in a more structured way.
// Dependency Injection is a design pattern that allows us to inject dependencies into a class rather than creating them inside the class. This makes the code more testable and maintainable because we can change the implementation of the dependencies without affecting the class that uses them.

// In TypeScript, we can use interfaces or abstract classes to define the dependencies and inject them into the class using the constructor. This allows us to change the implementation of the dependencies without affecting the class that uses them.


