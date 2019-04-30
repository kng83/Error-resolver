import {startErrorResolving} from '../src/error.resolver';

test('Instance of error is created',()=>{
    const ST  = startErrorResolving({errorLevel:'stack'});
   // const checkStackProp = 
    expect(true).toBe(true);
})
