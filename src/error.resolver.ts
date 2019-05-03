import {IErrorConfig} from './lib/Error.Interface'
import {ErrorModel} from './lib/Error.model';


//**Make Global error handling instance for error state management */
export function startErrorHandling(config:Partial<IErrorConfig>) {
  return ErrorModel.initialize(config);
}

export {IErrorPassingStruct,IErrorData,IErrorConfig} from './lib/Error.Interface';
export {checkAgainstUndefined,tryFnRun,asyncTryFnRun} from './lib/error.functions';