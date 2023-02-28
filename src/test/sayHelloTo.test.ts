import { SayHelloTo } from "../main";

test('Test SayHelloTo', () => {
    expect(SayHelloTo('Carl')).toBe('Hello Carl');
});