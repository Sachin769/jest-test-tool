const mathOperations = require("../calculator");



describe("Calculator test",()=>{

    //here in each test all the expect statement work fine then only this particular test pass otherwise failed.
    test("adding 1+2 should return 3",()=>{
        expect(mathOperations.sum(1,2)).toBe(3);
        expect(mathOperations.sum(1,4)).not.toBe(4);
    })

    test("subtract testing",()=>{
        var result = mathOperations.diff(10,2);
        expect(result).toBe(8);
    })
})