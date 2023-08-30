// all
let users = [
  {
    name: "name1",
    eyeColor: "red",
    gender: "female",
    isActive: false,
    email: "email1",
    age: 39,
  },
  {
    name: "name2",
    eyeColor: "red",
    gender: "male",
    isActive: true,
    email: "email2",
    age: 50,
  },
  {
    name: "name3",
    eyeColor: "eyeColor3",
    gender: "male",
    isActive: false,
    email: "email3",
    age: 16,
  },
];

// #1
console.log(users.map((e) => e.name));

// #2
console.log(users.filter((e) => e.eyeColor === "red"));

// #3
let lookForGender = users.filter((e) => e.gender === "male");
console.log(lookForGender.map((e) => e.name));

// #4
console.log(users.filter((e) => e.isActive === false));

// #5
let lookForEmail = users.filter((e) => {
  if (e.email === "email3") {
    console.log(e);
  }
});

// #6
console.log(users.filter((e) => e.age > 18 && e.age < 40));
