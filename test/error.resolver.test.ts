import {startErrorResolving} from '../src/error.resolver';

test('Instance of error is created',()=>{
    const ST  = startErrorResolving({errorLevel:'stack'}); 
    expect(ST.errorModelIsCreated).toBe(true);
})
