console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let count = parseInt(40);

function printOdds(count) {
  if (count <= 0) {
    console.log("negative number. will break out of loop");
  } else {
    for (let i = 0; i <= count; i++) {
      if (i % 2 !== 0 && count > 0) {
        console.log(i + " value is odd ");
      }
    }
  }
}

printOdds(count);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let userName = "Alex";
let age = 20;
function checkAge(userName, age) {
  let aboveSixteen = "Congrats " + userName + ", you can drive!";
  let bellowSixteen =
    "Sorry " + userName + " but you need to wait until you're 16.";

  if (age === undefined || userName !== undefined) {
    console.log("You forgot an imput!");
  }

  if (age < 16 && userName !== undefined) {
    console.log(bellowSixteen);
  } else if (age > 16 && userName !== undefined) {
    console.log(aboveSixteen);
  }
}

checkAge(userName, age);

console.log("EXERCISE 3:\n==========\n");
let x = 1;
let y = -4;

function quadrant(x, y) {
  if (x === 0 && (y > 0 || y < 0)) {
    console.log("(" + x + "," + y + ") is on the y axis");
  } else if ((x > 0 || x < 0) && y === 0) {
    console.log("(" + x + "," + y + ") is on the x axis");
  } else if (x === 0 && y === 0) {
    console.log("(" + x + "," + y + ") is on the origin");
  } else if (x > 0 && y > 0) {
    console.log("(" + x + "," + y + ") is on the first quadrant");
  } else if (x > 0 && y < 0) {
    console.log("(" + x + "," + y + ") is on the fourth quadrant");
  } else if (x < 0 && y > 0) {
    console.log("(" + x + "," + y + ") is on the second quadrant");
  } else if (x < 0 && y < 0) {
    console.log("(" + x + "," + y + ") is on the third quadrant");
  }
}

quadrant(x, y);

console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid triangle";
  } else if (a === b && b === c) {
    return "Equilateral triangle";
  } else if (a === b || a === c || b === c) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  }
}

triangle(2, 1, 1);

console.log("EXERCISE 5:\n==========\n");

let planLimit = 100;
let day = 15;
let usage = 56;

function cellphonePlan(planLimit, day, usage) {
  let averageUsage = (planLimit / 30).toFixed(3);
  let averageSofar = (usage / day).toFixed(2);
  let exceed = averageSofar * 30;
  let bellow = ((planLimit - usage) / (30 - day)).toFixed(2);
  let exceedLimit = (averageSofar * 30 - planLimit).toFixed(2);

  console.log(day + " days " + "used, " + (30 - day) + " remaining");
  console.log("Average daily use: " + averageUsage);
  if (averageSofar > averageUsage) {
    console.log(
      "You are EXCEEDING your average daily use ( " + averageSofar + " GB/day),"
    );
    console.log(
      "Continuing this high usage, you'll exceed your data plan by " +
        exceedLimit +
        " GB"
    );
    console.log(
      "To stay below your data plan, use no more than " + bellow + " GB/day."
    );
  } else {
    console.log("You are on track!");
  }
}

cellphonePlan(planLimit, day, usage);
