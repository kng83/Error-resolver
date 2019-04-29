Error handling self loaded instance of error.
It can be used on server side with express.






## Install

```
$ npm install error-resolver
```
To use create file and for example error.init.ts use on te top o app.ts

## Usage
Example app.ts
```ts
import './error.init'
```

Example error.init.ts;
```ts
import {startErrorHandling} from 'error-resolver'
const ST  = startErrorHandling({errorLevel:'stack'});
```


