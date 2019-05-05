

/**Override copy of patternObj using sources Array. Array is read from left to right including patternObj.
 *  Override copy is returned.
 * */
export function overrideLeft<T extends object>(patternObj: T , ...sources: Partial<T>[]): T {
  const overrideObj = { ...patternObj };
  for (let i = 0; i < sources.length; i++) {
    for (let key in sources[i]) {
      if(key in sources[i])
      overrideObj[key] = sources[i][key]  as T[Extract<keyof T, string>];
    }
  }
  return overrideObj;
}

//**Merge object from left to right. Most important is the last right object*/
export function mergeRight<T extends D[], D extends any>(...sources: T) {
  return Object.assign({}, ...sources);

}

//**Merge object from right to left. Most important is the first left object */
export function mergeLeft<T extends D[], D extends any>(...sources: T) {
  return Object.assign({}, ...(sources.reverse()));

}

//**Pass console.log as middleware in map function */
export function logArr<V>(value:V,index:number,arr:V[]):V{
  if(index==0) console.log(arr);
  return value;
}