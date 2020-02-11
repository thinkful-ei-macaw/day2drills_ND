/* eslint-disable strict */
// Drill 1 - do the min/max drill in the loops and array checkpoint but using a while loop instead of a foor loop

function max(numbers) {
  let i = 0;
  let largest = numbers[i];
  while (i < numbers.length) {
    if (numbers[i] > largest) 
      largest = numbers[i];
    i++;
  }
  console.log(largest);
}

max([1, 2, 3, 5, 4]);

function min(numbers) {
  let i = 0;
  let smallest = numbers[i];
  while (i < numbers.length) {
    if (numbers[i] < smallest) 
      smallest = numbers[i];
    i++;
  }
  console.log(smallest);
}
  
min([1, 2, 3, 5, 4]);
  
// drill 2
function average(numbers) {
  let currentSum = 0;
  numbers.forEach(num => currentSum += num);
  console.log(currentSum/numbers.length);
}

average([1,2,2,4,6]);

// iterating through objects drill 1

function makeStudentsReport(data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    results.push(`${item.name}: ${item.grade}`);
  }
  console.log(results);
}

const students = [{name: 'Johnny', grade:'C'}, {name: 'Douglas', grade: 'B'}];

makeStudentsReport(students);

//ito drill 2
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course,
    });
  }
  console.log(results);
}

enrollInSummerSchool(studentData);

// drill 3
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (idNum === items[i].id) {
      console.log(items[i]);
    }
  }
}

findById(scratchData, 22);

// drill 4
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
  
// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const expectedKeys = ['id', 'name', 'age', 'city'];
  
function validateKeys(object, expectedKeys) {
  let result = true;
    if (Object.keys(object).length !== expectedKeys.length) {
    return result = false;
  }
  for (let i = 0; i < expectedKeys.length; i++) {
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return result = false;
    }
  }
  console.log(result);
}

validateKeys(objectB, expectedKeys);

//  object drills - drill 2
const object = {
    foo: 'why',
    bar: 'does',
    fum: 'this',
    quux: 'look',
    spam: 'wrong',
}

for (const key in object) {
    const value = object[key];
    console.log(value, key);
}

// object drills - drill 3

const hungry = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

console.log(hungry.meals[3]);

// object drills - drill 6

