let obj:{
    name:string
    age?:number
}

obj = {
    name:"123",
    age:123
}

function thisDirection(this:Date){
    console.log(this.getFullYear())
}

function fn(param1:number):void
function fn(param1:string,param2:number):void
function fn(param1:any, param2?:any):void{
    console.log(param1)
}