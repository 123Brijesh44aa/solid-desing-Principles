class BaseUser {
    getRole() {
        console.log("User role");
    }
}




class User extends BaseUser {
    getAccessLevel() {
        console.log("User access level");
    }

    getRole() {
        console.log("User Role ");
    }
}

class Admin extends User {
    getAccessLevel(): void {
        console.log("Admin access level ");
    }
    getRole(): void {
        console.log("Admin role ");
    }
}

class Manager extends User {
    getAccessLevel(): void {
        console.log("Manager access level ");
    }
    getRole(): void {
        console.log("Manager role ");
    }
}

class Customer extends BaseUser {
    getRole(): void {
        console.log("Customer role ");
    }
}


function getUserAccessLevel(user: User) {
    user.getAccessLevel();
}

// getUserAccessLevel(new Customer()); // Error: Customer cannot access level ,// because Customer does not have getAccessLevel method
getUserAccessLevel(new Admin()); // works fine
getUserAccessLevel(new Manager()); // works fine                    