import {overrideLeft, mergeLeft, mergeRight} from '../src/lib/utilities';

//**Use for delayed response */
export const testingDelayJSONParser = (s: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(s));
            } catch (e) {
                reject(e);
            }
        }, 100)
    })
}

test('Check for async function used for testing', async () => {
    const check = await testingDelayJSONParser(JSON.stringify('some async tester'));
    expect(check).toBe('some async tester');
})

test('Check overrideLeft to return override object', () => {
    const lessImportantPatternObj = { name: 'Ben', age: 20, city: 'New York' };
    const moderatelyImportantObj = { city: 'Los Angeles' } 
    const mostImportantObj = { city: 'San Francisco', age: 21 };

    /**In this configuration value changeCity will not effect on object
    because changeAgeAndCity has the same property which will override changeCity
    */
    expect(
        overrideLeft(lessImportantPatternObj, moderatelyImportantObj, mostImportantObj)
    ).toEqual({ name: 'Ben', city: 'San Francisco', age: 21 })
})

test('Check mergeRight for object merging', () => {
    const mostImportantObj = { name: 'Ben', age: 20};
    const moderatelyImportantObj = { city: 'Los Angeles', phone:'88833300' } 
    const lessImportantObj = { city: 'San Francisco', age: 21 };

    expect(
        mergeLeft(mostImportantObj, moderatelyImportantObj, lessImportantObj)
    ).toEqual({ name: 'Ben', city: 'Los Angeles', age: 20, phone:'88833300'  })
})

test('Check mergeLeft for object merging', () => {
    const mostImportantObj = { name: 'Ben', age: 20};
    const moderatelyImportantObj = { city: 'Los Angeles', phone:'88833300' } 
    const lessImportantObj = { city: 'San Francisco', age: 21 };

    expect(
        mergeRight(lessImportantObj, moderatelyImportantObj, mostImportantObj)
    ).toEqual({ name: 'Ben', city: 'Los Angeles', age: 20, phone:'88833300'  })
})

