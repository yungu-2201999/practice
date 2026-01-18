export function mybind(thisArg = globalThis,...rest){
    if(thisArg === null || thisArg === undefined){
        thisArg = globalThis
    }
    const obj = Object.create(thisArg)
    const symbolName = Symbol(this.name);
    obj[symbolName] = this;
    return obj[symbolName]
}
