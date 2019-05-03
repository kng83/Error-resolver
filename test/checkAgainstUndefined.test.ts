import {checkAgainstUndefined,startErrorHandling} from '../src/error.resolver';

beforeEach(() => {
    const ST  = startErrorHandling({errorLevel:'stack'}); 
    expect(ST.errorModelForResolverIsCreated).toBe(true);
  });

test('Check if undefined value is returning error',()=>{
    expect(checkAgainstUndefined(undefined).hasError).toBe(true)
})

test('Check if correct value is returning no error',()=>{
  expect(checkAgainstUndefined(10).hasError).toBe(false)
})

