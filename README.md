Error handling self loaded instance of error.
It can be used on server side with express.






## Install

```
$ npm install error-resolver
```
Module is designed for use on backend with node for wrapping errors.
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

