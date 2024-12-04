test("truthy value",()=>{
    var name =  "sachin";
    var n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();

    expect(name).toBeTruthy();
    expect(n).toBeFalsy();

    var num1 = 10;
    var num2 =-20;
    expect(num1).toBeGreaterThan(num2);
})