
let apple = {
    
    color  : 'red',
    size   : 'big',
    weight :  300,
    
};

let mandarinOrange = {
    
    color  : 'brightYellow',
    size   : 'small',
    weight :  100,
    
};

let grape = {
    
    color  : 'violet',
    size   : 'big',
    weight :  500,
    
};

let fruits = [apple,mandarinOrange,grape];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i].weight);
}

