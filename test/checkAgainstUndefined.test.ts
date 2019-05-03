import {checkAgainstUndefined,startErrorHandling} from '../src/error.resolver';

beforeEach(() => {
    const ST  = startErrorHandling({errorLevel:'stack'}); 
    expect(ST.errorModelForResolverIsCreated).toBe(true);
  });


test('Check if undefined value is returning stack',()=>{
    expect(checkAgainstUndefined(undefined).hasError).toBe(true)
})

