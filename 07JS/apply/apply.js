export function myApply(thisArg = globalThis, rest = []){
    if(thisArg === null || thisArg === undefined) thisArg = globalThis;
    const obj = Object.create(thisArg);

    const symbolName = Symbol(this.name);
    obj[symbolName] = this;
    const res = obj[symbolName](...rest);
    delete obj[symbolName]
    return res;
}