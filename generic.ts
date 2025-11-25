function fruit<t>(name:t):t {
    return name;
}

let fruitOnly = fruit("apple");
console.log(fruitOnly);

let fruitNum = fruit(10);
console.log(fruitNum);

let fruitBoolean = fruit(true);
console.log(fruitBoolean);

function array<t>(data:t):t {
    return data
}

let arrayData = array(["String","javascript","Tailwind CSS"]);
console.log(arrayData);
