
var Stack = function (cap) {
    this._capacity = cap || Infinity; 
    this._storage = " "; 
    this._count = 0;
}

Stack.prototype.push = function (val) { 
    if(this._count < this._capacity) {
        this._storage[this._count++] = val; 
        return this._count;
    }
    return "max cap approached"; 
}

Stack.prototype.pop = function () {

    var value = this._storage[--this._count]; 
    delete this._storage[this._count]; 
    
    if (this._count < 0 ){ 
        this._count = 0; 
    }

    return value;
}

Stack.prototype.peep = function (){ 
    return this._storage[this._count-1]; 
}

Stack.prototype.checkCount = function () {
    return this._count;   
}


var ismumsStack = new Stack(3);  

ismumsStack.push("apple");
ismumsStack.push("banana"); 
ismumsStack.push("cranberry"); 

console.log(ismumsStack.peep()); 



