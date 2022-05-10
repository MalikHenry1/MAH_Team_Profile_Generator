const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
      it("Should set intern's school via constructor methods.", () => {
        const school = "UGA";
        const intern = new Intern("Billy", 1, "test@test.com", school);
        expect(intern.school).toBe(school);
      });
    });
  
    describe("Getter methods", () => {
      it("Should get the intern's school via getSchool()", () => {
        const school = "UGA";
        const intern = new Intern("Billy", 1, "test@test.com", school);
        const internSchool = intern.getSchool();
        expect(internSchool).toBe(school);
      });
  
      it("should get role via getRole()", () => {
        const role = "Intern";
        const intern = new Intern("Billy", 100, "test@test.com", "georgiatech");
        const internRole = intern.getRole();
        expect(internRole).toBe(role);
      });
    });
  });