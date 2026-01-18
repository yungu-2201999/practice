import { myCall } from './call.js'
Function.prototype.myCall = myCall;


import { describe, expect, it } from 'vitest'


describe('test my call', ()=>{
    it('call',()=>{
        let _this = null;
        function testFn(a, b) {
            _this = this;
            return a + b;
        }
    
        expect(testFn.myCall(null, 1,2)).toBe(3)
    })
})
