import { IErrorData, IErrorPassingStruct} from './Error.Interface';
import { mergeRight } from './utilities';
import {ErrorModel} from './Error.model';


//**Check undefined value */
export function checkAgainstUndefined(value:any) {
    if (value) return formNoErrorObj();
    else {
        const e = throwUserError('value is undefined')
        return formIsErrorObj(e)
    }
}

//**Run function in safe environment and return error object if occurs*/
export function tryFnRun<D extends any[], R extends any>(fn: { (...args: D): R }, ...args: D): [R, IErrorPassingStruct] {
    let ans: R, passErrObj = formNoErrorObj();
    try {
        ans = fn(...args);
    } catch (e) {
        passErrObj = formIsErrorObj(e, errorResolver);
        ans = undefined as any as R;  //hack because this value is not important if try fail
    }   
    return [ans, passErrObj];
}

//**Function to write async task in safety environment fn should by async */
export async function asyncTryFnRun<D extends any[], R>(fn: { (...args: D): R }, ...args: D): Promise<[R, IErrorPassingStruct]> {
    let ans, passErrObj = formNoErrorObj();
    try {
        ans = await fn(...args);
    } catch (e) {
        passErrObj = formIsErrorObj(e, errorResolver);
        ans = undefined as any as R;
    }
    return [await ans, await passErrObj];
}

//** This is wrapper for Error when occurs */
function formIsErrorObj(errorData: IErrorData, callback?: (arg: IErrorData) => IErrorData): IErrorPassingStruct {
    return {
        hasError: true,
        errorData: !!callback ? callback(errorData) : errorData
    }
}

//** This is used when good error object is needed*/
function formNoErrorObj(errorData = ErrorModel.noErrorDataModel, callback?: (arg: IErrorData) => IErrorData): IErrorPassingStruct {
    return {
        hasError: false,
        errorData: !!callback ? callback(errorData) : errorData
    }
}

//**Throw User error with possibility of stack extracting */
function throwUserError(message: string) {
    let err = ErrorModel.isErrorDataModel;
    
    if (ErrorModel.errorConfig.errorLevel === 'stack') try {
        throw Error(message)
    } catch (e) {
        err = errorResolver(e);
    } else {
        err = mergeRight(err, { message })
    }
    return err;
}

//**Resolve error and put to ErrorData object */
function errorResolver({ name, message, stack }: IErrorData): IErrorData {
    return { name, message, stack: convertErrStack(stack) }
}

//**Convert error stack for better view */
// function convertErrStack(errStack:string) {
//     const sArr:string[] = [];
//     errStack.match(/(?<=\n\s+at\s+).*?(?=\s+at)/g).forEach(el => {
//          sArr.push(el);
//     })
//     return errStack//sArr.toString();
// }

function convertErrStack([errStack]:string) {
    if(!errStack){
        return errStack.match(/(?<=\n\s+at\s+).*?(?=\s+at)/g).toString();
    }
    else return errStack;
}

//TODO this is here but it shouldn't be
//***Switch between logging options */
function logError({ name, message, stack }: IErrorData) {
    switch (ErrorModel.errorConfig.errorLevel) {
        case 'none': break;
        case 'low': console.log(message); break;
        case 'caller': console.log(name, stack); break;
        case 'stack': console.log(name, message, stack); break;
        default: ;
    }
}



