import {asyncTryFnRun, startErrorHandling} from '../src/error.resolver';
import {testingDelayJSONParser} from './utilities.test';

//**Create instance of Error */
beforeEach(() => {
    const ST  = startErrorHandling({errorLevel:'stack'}); 
    expect(ST.errorModelForResolverIsCreated).toBe(true);
  });




test('Check if error occurs when using tryFnRun',async ()=>{
    const [maybeValue,maybeError]=await asyncTryFnRun(testingDelayJSONParser,'some text:ssdf');
    expect(maybeError.hasError).toBe(true);
})

test('Check what function has called error',async ()=>{
    const [maybeValue,maybeError]=await asyncTryFnRun(testingDelayJSONParser,'some dummy text');
    const parsed = JSON.parse(maybeError.errorData.stack);
    const [shouldBeParseCallingAError,restOfErrorKeys] = Object.keys(parsed);
    expect(/parse/.test(shouldBeParseCallingAError)).toBe(true);
})

test('Check if good value is returned', async ()=>{
    const [maybeValue,maybeError]=await asyncTryFnRun(testingDelayJSONParser,JSON.stringify('some dummy text'));
    expect(maybeValue === 'some dummy text'  && !maybeError.hasError).toBe(true);
})

