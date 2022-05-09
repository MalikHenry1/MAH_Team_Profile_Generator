const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set the office number of the manager via constructor arguments", () => {
            // Arrange
            const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
            // Act

            // Assert
            expect(manager.officeNumber).toBe(officeNumber);
        });

        it("should set name via constructor arguments", () => {
            // arrange
            const name = "Alice"

            // act
            const manager = new Manager(name)

            // assert
            expect(manager.name).toBe(name)


        });

        it("should set id via constructor arguments", () => {
            const id = 100;

            const employee = new Employee("Alice", id);

            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {
            const email = "test@test.com";

            const employee = new Employee("Alice", 100, email);

            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            const name = "Alice";
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName();

            expect(employeeName).toBe(name);

        });
        it("should get name via getID()", () => {
            const id = 10;
            const employee = new Employee('name', id, "test@test.com");
            const employeeID = employee.getID();

            expect(employeeID).toBe(id);

        });
    });
});