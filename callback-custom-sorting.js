// Lighthouse Lab - W1D4 - Exercise - Callbacks - Custom Sorting //


//Sort numerically and ascending:

var array = [10, 2, 5, 1, 9];
array.sort(function(a,b) {
  return a - b;
});

console.log(array);

// Advance Sorting Exercise:

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var customComparator = students.sort(function(a, b) {
  if (a.name < b.name) { // sort names ascending
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
      students.sort(function(a, b) {
        if (a.age < b.age) { // sort age ascending
          return -1;
        }
        if (a.age > b.age) {  // age default
          return 0;
        }
      })
  }
  return 0 // default return value (no sorting)
})



console.log(customComparator);

