const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set github via constructor arguments", () => {
            // Arrange
            const github = 'MalikHenry1'
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
        it("should get github via getGitHub()", () => {
            const github = "malikhenry";
            const engineer = new Engineer("Alice", 1, "test@test.com", github);
            const engineerGitHub = engineer.getGitHub();

            expect(engineerGitHub).toBe(github);

        });
        it("should get name via getID()", () => {
            const id = 10;
            const employee = new Employee('name', id, "test@test.com");
            const employeeID = employee.getID();

            expect(employeeID).toBe(id);

        });
    });
});