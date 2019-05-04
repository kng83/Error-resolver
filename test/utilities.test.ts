
test('Check for async function used for testing',async ()=>{
    const check = await testingDelayJSONParser(JSON.stringify('some async tester'));
    expect(check).toBe('some async tester');
})

//**Use for delayed response */
export const testingDelayJSONParser = (s:string):Promise<string> => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                 resolve(JSON.parse(s));
            }catch(e){
                reject(e);
            }
            
        },100)
    })
}
