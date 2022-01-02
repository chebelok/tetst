let a = {fruit: 'apple', meat: 'beef'};

let b = { vegetable: 'carrot', sweet: 'cake'};

function createObj(obj1, obj2){
    let food = {};
    for (let i in obj1) {
      food[i] = obj1[i];
    }
    for (let j in obj2) {
      food[j] = obj2[j];
    }
    return food;
};

let res = createObj(a, b);

console.log(res);