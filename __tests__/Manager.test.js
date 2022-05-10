const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set the office number of the manager via constructor arguments", () => {
            // Arrange
            const officeNumber = 100;
            const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
            // Act
            // Assert
            expect(manager.officeNumber).toBe(officeNumber);
        });

    });

    describe("Getter methods", () => {
        it("should get name via getOffice()", () => {
            const officeNumber = 100;
            const manager = new Manager("Billy", 100, "test@test.com", officeNumber);
            const managerOffice = manager.getOffice();

            expect(managerOffice).toBe(officeNumber);

        });
        it("should get role via getRole()", () => {
            const role = "Manager";
            const manager = new Manager('name', 100, "test@test.com", 100);
            const managerRole = manager.getRole();

            expect(managerRole).toBe(role);

        });
    });
});