const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constructor arguments", () => {
            const github = 'MalikHenry1'
            const engineer = new Engineer("Alice", 1, "test@test.com", github);
            expect(engineer.github).toBe(github);
        });
    });

    describe("Getter methods", () => {
        it("should get github via getGitHub()", () => {
            const github = "malikhenry";
            const engineer = new Engineer("Alice", 1, "test@test.com", github);
            const engineerGitHub = engineer.getGitHub();

            expect(engineerGitHub).toBe(github);

        });
        it("should get name via getRole()", () => {
            const role = "Engineer";
            const engineer = new Engineer('name', 10, "test@test.com");
            const engineerRole = engineer.getRole();
            expect(engineerRole).toBe(role);

        });
    });
});