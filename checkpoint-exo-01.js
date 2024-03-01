
function categorize(values) {

  let result = {};

  values.forEach(element => { 
    
    let type = typeof element;

    console.log("mon type est = "+type);

    if (type === "string" || type === "function" || type === "boolean" || type === "number" || type === "bigint") {
      if (!result[type]) {
        result[type] = [];
      }
      result[type].push(element);
    }
  });

  return result;
}



const input = [1, "hello", function sayHi() { console.log("hi"); }, "world", true, 0n, 1000];

const resulta = categorize(input);
console.log(resulta);



