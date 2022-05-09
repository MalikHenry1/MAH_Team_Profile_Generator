const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance.", () => {
            // Arrange
            const employee = new Employee()
            // Act

            // Assert
            expect(typeof employee).toBe("object");
        });

        it("should set name via constructor arguments", () => {
            // arrange
            const name = "Alice"

            // act
            const employee = new Employee(name)

            // assert
            expect(employee.name).toBe(name)


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