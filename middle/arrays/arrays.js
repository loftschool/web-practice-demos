//forEach
//map
//filter
//every
//some
//find
//reduce

const array = [1, 2, 3, 4, 5, 6];

const reduceResult = array.reduce((acc, item) => {
  return acc + item
}, 0);

function reduceFn(array, fn, initialValue) {
  let result = initialValue;

  for (let i = 0; i < array.length; i++) {
    const curVal = array[i];
    result = fn(result, curVal);
  }

  return result;
}

const resultReduceFn = reduceFn(array, (acc, item) => acc + item, 0);

console.log(resultReduceFn);


// const everyResult = array.every(item => {
//   return Number.isInteger(item);
// });

// const someResult = array.some(item => {
//   return item === 10;
// })


// const filterResult = array.filter(item => {
//   return item > 3;
// });


// function filterFn (array, fn) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const curVal = array[i];

//     if (fn(curVal)) {
//       newArray.push(curVal);
//     }
//   }

//   return newArray;
// }

// const resutlFilterFn = filterFn(array, item => item === 3);

// const findResult = array.find(item => {
//   return item === 3
// })






// const mapResult = array.map((item) => {
//   return item * 2
// });

// function mapFn(array, fn) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const currentVal = array[i];
//     const newVal = fn(currentVal);
//     newArray.push(newVal);
//   }

//   return newArray;
// }

// const mapFnResult = mapFn(array, (item) => item * 2);




// array.forEach((item, i, arr) => {
//   console.log(item);
// });

// function forEachFn(array, fn) {
//   for (let i = 0; i < array.length; i++) {
//     const currentValue = array[i];
//     fn(currentValue)
//   }
// }

// forEachFn(array, (item) => console.log(item));