
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

let fruit = [apple, mandarinOrange, grape];

let sum = fruit.reduce(function(sum, element){
  return sum + element;
}, 0);

