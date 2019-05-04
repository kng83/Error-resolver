

//**Override copy of patternObj using sources Array. Array is read from left to right. Override copy is returned*/
export function overrideRight<T extends object>(patternObj: T , ...sources: Partial<T>[]): T {
  const overrideObj = { ...patternObj };
  for (let i = 0; i < sources.length; i++) {
    for (let key in sources[i]) {
      if(key in sources[i])
      overrideObj[key] = sources[i][key]  as T[Extract<keyof T, string>];
    }
  }
  return overrideObj;
}

//**Override copy of patternObj using sources Array. Array is read from read to left. Override copy is returned*/
export function overrideLeft<T extends object>(patternObj: T, ...sources: Partial<T>[]): T {
  const overrideObj = { ...patternObj };
  for (let i = sources.length - 1; i >= 0; i--) {
    for (let key in sources[i]) {
      overrideObj[key] = sources[i][key] as T[Extract<keyof T, string>];
    }
  }
  return overrideObj;
}

//**Merge object to the right. Most important is the last right object*/
export function mergeRight<T extends D[], D extends any>(...sources: T) {
  return Object.assign({}, ...sources);

}

//**Merge object from left to right. Most important is the first object */
export function mergeLeft<T extends D[], D extends any>(...sources: T) {
  return Object.assign({}, ...(sources.reverse()));

}

//**Get unique string with added secret */
export function createUniqueString(secret: string): string {
  return Date.now().toString() + secret
}

//**Log passed array for using in filter and mapping */
export function logArr<V>(value:V,index:number,arr:V[]):V{
  if(index==0) console.log(arr);
  return value;
}