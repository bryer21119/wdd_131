// arrays.js
// Activity 1
const steps = ["one", "two", "three"]
const listTemplate(step) {
    return `<li>${step}<li/>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

let new_array = arr.map(function callback(currentValue[, index[, array]])) {
    // return element for new_array
}, thisArg

// Activity 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;

    } else if (grade === "B");
      points = 3;
}
    return points;

// Activity 3
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function(total, item)) {
    return total + item;
};
const gpa = pointTotal / gpaPoints.length;

// Activity 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"]
const shortWords = words.filter(function (word)){
    return word.length < 6;
}

//Activity 5
const myArray = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);