// Write a function that receives a number array & returns the sorted array (Don't use Array.sort()).
function srt(num) {
  let temp = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] > num[i + 1]) {
      temp = num[i];
      num[i] = num[i + 1];
      num[i + 1] = temp;
    }
  }
  return num;
}
console.log(srt([2, 1, 5, 4, 3]));
// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function palindrome(arr) {
  xtra = arr.length - 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == arr[xtra - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(palindrome('racecar'));
// Copy this array to your code
// var arr = [
// {name: 'Asher', age: 22},
// {name: 'Zubair', age: 20},
// {name: 'Kashif', age: 23},
// {name: 'Wasif', age: 17},
// {name: 'Hanzala', age: 28}
// ]
// i) Replace the 3rd index with {name: 'Siddiq', age: 23}
// ii) Push {name: 'Umair', age: '23'} from the end
// iii) Remove the first element
// iv) Add a field createdAt: new Date() with each through loop.
var arr = [
  { name: "Asher", age: 22 },
  { name: "Zubair", age: 20 },
  { name: "Kashif", age: 23 },
  { name: "Wasif", age: 17 },
  { name: "Hanzala", age: 28 },
];
arr[3].name = "Siddiq";
arr[3].age = 23;
arr.push({ name: "Umair", age: 23 });
arr.shift();
arr.forEach((x) => {
  x["createdAt"] = new Date();
  console.log(x);
});
// Using above array
// I want an array consisting only those names whose ages are between 18 to 28 and their names consist of letter 'f'. Then convert the output array to string. For e.g. ['Asher', 'Zubair'] to 'Asher', 'Zubair'.
var arr = [
  { name: "Asher", age: 22 },
  { name: "Zubair", age: 20 },
  { name: "Kashif", age: 23 },
  { name: "Wasif", age: 17 },
  { name: "Hanzala", age: 28 },
  { name: "brief", age: 26 },
];
arr.filter((x) => {
  if (x.age >= 18 && x.age <= 28 && x.name.split("").includes("f")) {
    console.log(`filter: ${x.name}`);
  }
});
// These are two arrays
// var students = [
//     {
//         _id: 'std1'
//     name: 'Bill Gates',
//         age: 30
//     },
//     {
//         _id: 'std2'
//     name: 'Steve Jobs',
//         age: 30
//     },
//     {
//         _id: 'std3'
//     name: 'Suzanne Collins',
//         age: 30
//     }];

// var courses = [
//     {
//         name: 'Maths',
//         std_id: ['std3', 'std1']
//     },
//     {
//         name: 'Computer Science',
//         std_id: ['std3', 'std2']
//     },
//     {
//         name: 'Commerce',
//         std_id: ['std1']
//     },
// ]
// Expected Output: Get an array consisting of student name and student Id with courses(array).
var students = [
  {
    _id: "std1",
    name: "Bill Gates",
    age: 30,
  },
  {
    _id: "std2",
    name: "Steve Jobs",
    age: 30,
  },
  {
    _id: "std3",
    name: "Suzanne Collins",
    age: 30,
  },
];

var courses = [
  {
    name: "Maths",
    std_id: ["std3", "std1"],
  },
  {
    name: "Computer Science",
    std_id: ["std3", "std2"],
  },
  {
    name: "Commerce",
    std_id: ["std1"],
  },
];
courses.forEach((cr) => {
  cr.std_id.forEach((cId) => {
    students.forEach((s) => {
      if (cId == s._id) {
        console.log(`course ${cr.name} study by ${s.name}`);
      }
    });
  });
});
// Create 10 objects for the USER using constructor function and push them in an array, consisting of these fields
// _id: Should be random
// name: Hardcoded
// profileImage: Hardcoded Image Url
// createdAt: Current Date in milliseconds
// friends: Array consisting of some other user Ids
// Loop through each user and show the list of friend's name for each user!
function User(id, name, profileImg, createdAt, friends) {
  this.id = id;
  this.name = name;
  this.profileImg = profileImg;
  this.createdAt = createdAt;
  this.friends = friends;
}
let user1 = new User(1, "asad", "http://google.com", new Date().toISOString, [
  2,
  "dasa",
]);
let user2 = new User(2, "dasa", "http://google.com", new Date().toISOString, [
  1,
  "asad",
]);
let user3 = new User(3, "walter", "http://google.com", new Date().toISOString, [
  4,
  "white",
]);
let user4 = new User(4, "white", "http://google.com", new Date().toISOString, [
  3,
  "Walter",
]);
let user5 = new User(5, "Brian", "http://google.com", new Date().toISOString, [
  6,
  "Lara",
]);
let user6 = new User(6, "Lara", "http://google.com", new Date().toISOString, [
  5,
  "Brian",
]);
let user7 = new User(7, "Lowkey", "http://google.com", new Date().toISOString, [
  8,
  "Gren",
]);
let user8 = new User(8, "Gren", "http://google.com", new Date().toISOString, [
  7,
  "Lowkey",
]);
let user9 = new User(
  9,
  "Maxwell",
  "http://google.com",
  new Date().toISOString,
  [10, "Vivin"]
);
let user10 = new User(
  10,
  "Vivin",
  "http://google.com",
  new Date().toISOString,
  [9, "Maxwell"]
);
let userArr = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
];
userArr.forEach((x) => {
  console.log(`${x.name} is a friend of ${x.friends[1]}`);
});
// want this code to log out "hey amy", but it logs out "hey arnold" - why?

function greet(person) {
  if (person == { name: "amy" }) {
    //person.name == 'amy'
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
console.log(greet({ name: "amy" }));
// In above code the else block is run due to pass by value or pass by reference in if block the object is compairing with object due to pass by reference

// I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect (this is a bug you run into once in a while, and some people love to ask about it in interviews).
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
// I want this code to log out "doggo", but it logs out undefined!
let dog = {
  name: "doggo",
  sayName() {
    console.log(this.name);
  },
};
// let sayName = dog.sayName
dog.sayName();
// Due to let variable the above code is not running when i call it through object name it will call because let is block scope.

// Why does this code return the results that it does?
function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false;
  }
  return true;
}
console.log(isBig(1)); // false
console.log(isBig([2])); // false
console.log(isBig([3])); // true
// The above code accepts both parameters either it object or primitive data type it due to pass by value or pass by reference.
// How to preserve the immutability on my heroes list?
const heroes = [
  { name: "Wolverine", family: "Marvel", isEvil: false },
  { name: "Deadpool", family: "Marvel", isEvil: false },
  { name: "Magneto", family: "Marvel", isEvil: true },
  { name: "Charles Xavier", family: "Marvel", isEvil: false },
  { name: "Batman", family: "DC Comics", isEvil: false },
  { name: "Harley Quinn", family: "DC Comics", isEvil: true },
  { name: "Legolas", family: "Tolkien", isEvil: false },
  { name: "Gandalf", family: "Tolkien", isEvil: false },
  { name: "Saruman", family: "Tolkien", isEvil: true },
];
const deepFreeze = (obj) => {
  Object.keys(obj).forEach((x) => {
    if (typeof obj[x] === "object" && !Object.isFrozen(obj[x])) {
      deepFreeze(obj[x]);
    }
  });
  return Object.freeze(obj);
};
deepFreeze(heroes);

const newHeroes = heroes.map((h) => {
  h.name = h.name.toUpperCase();
  console.log(h);
});

// Why & How
var nums = 5;
// var sum = ++nums + nums-- + --nums + --nums + nums;
console.log(`sum of number is: ${++nums + nums-- + --nums + --nums + nums}`);
// console.log(nums);
++nums + nums-- + --nums + --nums + nums == 22;
// The answer is 22 bcz the prefix value return inncremented/decremented value while postfix returns the same value.
// And nums value is changing by each prefix increment and decrement.
