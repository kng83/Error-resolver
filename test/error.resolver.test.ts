import {startErrorHandling} from '../src/error.resolver';

test('Instance of error is created',()=>{
    const ST  = startErrorHandling({errorLevel:'stack'}); 
    console.log(ST);
    expect(ST.errorModelForResolverIsCreated).toBe(true);
})
