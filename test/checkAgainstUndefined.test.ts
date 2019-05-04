import {checkAgainstUndefined,startErrorHandling} from '../src/error.resolver';

beforeEach(() => {
    const ST  = startErrorHandling({errorLevel:'stack'}); 
    expect(ST.errorModelForResolverIsCreated).toBe(true);
  });

test('Check if undefined value is returning error',()=>{
    expect(checkAgainstUndefined(undefined).hasError).toBe(true)
})

test('check property of error Struct when is error', () => {
  const checkAnswer = checkAgainstUndefined(undefined);
  const errorDataObjKeys = Object.keys(checkAnswer.errorData || {});
  
  const checkIfError = checkAnswer.hasError;
  const checkIfMessage = errorDataObjKeys.includes('message');
  const checkIfStack = errorDataObjKeys.includes('stack');
  const checkIfName = errorDataObjKeys.includes('name');
       
  expect(checkAnswer
        && checkIfError
        && checkIfMessage
        && checkIfName
        && checkIfStack
  ).toBe(true)
});

test('Check if correct value is returning no error',()=>{
  expect(checkAgainstUndefined(10).hasError).toBe(false);
})


