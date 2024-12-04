const mathOperations = require("../calculator");

describe("Calcuatore hookes test", () => {
    var inp1 = 0;
    var inp2 = 0;

    beforeAll(() => {
        console.log("before all Called");
    });

    afterAll(() => {
        console.log("after all called");
    })

    beforeEach(() => {
        console.log("before each called");
        inp1 = 1;
        inp2 = 2;
    })

    afterEach(()=>{
        console.log("after each called");
    })

    test("add",()=>{
        console.log("add test function");
        var resp = mathOperations.sum(inp1,inp2);
        expect(resp).toBe(3);
    })
    test("diff",()=>{
        console.log("diff test function");
        var resp = mathOperations.diff(inp1,inp2);
        expect(resp).toBe(-1);
    })
})