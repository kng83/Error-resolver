import {checkAgainstUndefined,IErrorPassingStruct,IErrorData} from '../src/error.resolver';



test('Check if undefined value is returning stack',()=>{
    expect(checkAgainstUndefined(undefined)).toBe({hasError:true})
})