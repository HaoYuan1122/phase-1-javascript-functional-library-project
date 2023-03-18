


function myEach(collection, callback){
    if(Array.isArray(collection)){
        for(const item of collection){
            callback(item)
        }
    }else{
        for(const item in collection){
            callback(collection[item])
        }
    }
    return collection
}

function myMap(collection, callback){
    let array=[]
    if(Array.isArray(collection)){
        for(const item of collection){
            array.push(callback(item))
        }
    }else{
        for(const item in collection){
            array.push(callback(collection[item]))
        }
    }
    return  array
}

// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16

// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6
// function myReduce(collection, callback, acc=0){
   
//     if(Array.isArray(collection)){
//         for(const item of collection){
//             acc=callback(acc,item,collection)
//         }
//         return acc
//     }else{
//         for(const item in collection){
//             acc=callback(acc,collection[item],collection)
//         }
//         return acc
//     }
// }

console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }))
console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }))


// function myReduce(collection, callback, acc) {
//     let startIdx = 0;
//     if (acc === undefined) {
//       acc = collection[Object.keys(collection)[0]];
//       startIdx = 1;
//       if (typeof acc === 'undefined') {
//         throw new TypeError('Reduce of empty object with no initial value');
//       }
//     }
//     if (Array.isArray(collection)) {
//       for (let i = startIdx; i < collection.length; i++) {
//         acc = callback(acc, collection[i], i, collection);
//       }
//     } else {
//       for (const key in collection) {
//         if (collection.hasOwnProperty(key)) {
//           acc = callback(acc, collection[key], key, collection);
//         }
//       }
//     }
//     return acc;
//   }

function myReduce(collection, callback, acc) {
    let index = 0;
    
    if (typeof acc === 'undefined') {
      acc = collection[0];
      index = 1;
    }
    
    for (let i = index; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    
    return acc;
  }
