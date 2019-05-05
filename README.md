Error handling self loaded instance of error.
It can be used on server side with express.






## Install

```
$ npm install error-resolver
```
Module is designed for use on backend node for wrapping errors.
To use create file error.init.ts. Use this file on top of app.ts.

## Usage
Example app.ts
```ts
import './error.init'
```

Example error.init.ts;
```ts
import {startErrorResolving} from 'error-resolver'
const ST  = startErrorResolving({errorLevel:'stack'});
```

Usage
```ts
import {checkAgainstUndefined} from 'error-resolver';

let testValue: number | undefined
const checkError = checkAgainstUndefined(testValue)
console.log(checkAnswer); // { hasError:true,errorData:{name:...,message:..., stack:...}}

if(checkAnswer.hasError) return checkError // to roll errors

```

```ts
import {asyncTryFnRun} from 'error-resolver';

//Use this code in async function body
const [maybeValue, maybeError] = await asyncTryFnRun(somePromiseFn, 'arg');
console.log(maybeError);// { hasError:true,errorData:{name:...,message:..., stack:...}}

if(maybeError.hasError) return maybeError // to roll errors as  Promise<IErrorPassingStruct>
const retFromPromiseFn = maybeValue; // if no error

```

```ts
import {tryFnRun } from 'error-resolver';

//Use this code in function body
const [maybeValue, maybeError] = tryFnRun(someFn, 'arg');
console.log(maybeError);// { hasError:true,errorData:{name:...,message:..., stack:...}}

if(maybeError.hasError) return maybeError // to roll errors as IErrorPassingStruct
const retFromFn = maybeValue; // if no error

```
