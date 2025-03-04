var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1; 
console.log(n);

// or you can use Math.Ceil and remove + 1 . so that when u get a number that is greater than 5 (e.g: 5.1) then you would be able to get 6.
// or you can use Math.round and also remove + 1 so that when u get 5.4 then = 5 but when u get 5.5 then tou would be able to get 6.