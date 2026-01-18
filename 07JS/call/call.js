
/**
 * 
 * call(thisArg)
 * call(thisArg, arg1)
 * call(thisArg, arg1, arg2)
 * call(thisArg, arg1, arg2, ... argN)
 * 
 */
export function myCall(thisArg,...rest){
    if(thisArg === null || thisArg === undefined) {
        thisArg = globalThis;
    } 
    const obj = Object.create(thisArg)
    const symbolName = Symbol(this.name);
    obj[symbolName] = this;
    const res = obj[symbolName](...rest);
    delete obj[symbolName];
    return res
}
