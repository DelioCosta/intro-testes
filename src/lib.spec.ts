import soma from "./lib"

describe("Testando varias somas", ()=> {
    test("Soma simples", () => {
        expect(soma(1,2)).toBe(3);
    });

    test("Soma 2x", () => {
        expect(soma(soma(1,2),3)).toBe(6);
    });

    test("Soma de somas", () => {
        expect(soma(soma(1,2),soma(3,4))).toBe(10);
    });
});
