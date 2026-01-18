import { myApply } from './apply.js'
Function.prototype.myApply = myApply;


import { describe, expect, test, it } from 'vitest'

describe('test my apply',()=>{
    it('apply',()=>{
        let _this = null;
        function testFn(a, b) {
            _this = this;
            return a + b;
        }
    
        expect(testFn.myApply(null, [1,2])).toBe(3)
    })
})
