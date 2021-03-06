import { tryFnRun, startErrorResolving } from '../src/error.resolver';

//**Create instance of Error */
beforeEach(() => {
    const ST = startErrorResolving({ errorLevel: 'stack' });
    expect(ST.errorModelForResolverIsCreated).toBe(true);
});

test('Check if error occurs when using tryFnRun', () => {
    const [maybeValue, maybeError] = tryFnRun(JSON.parse, 'some text:xxx');
    expect(maybeError.hasError).toBe(true);
})

test('Check what function has called error', () => {
    const [maybeValue, maybeError] = tryFnRun(JSON.parse, 'JSON.parse is calling a error');
    const parsed = JSON.parse(maybeError.errorData.stack);
    const [shouldBeParseCallingAError, restOfErrorKeys] = Object.keys(parsed);
    expect(/parse/.test(shouldBeParseCallingAError)).toBe(true);
})

test('Check if good value is returned', () => {
    const [maybeValue, maybeError] = tryFnRun(JSON.parse, JSON.stringify('some dummy text'));
    expect(maybeValue === 'some dummy text' && !maybeError.hasError).toBe(true);
})

