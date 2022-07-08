
function examGrade(grade) {
    if (grade >= 80) {
        return "A +";
    } if (grade >= 70 && grade < 80) {
        return "A ";
    }
    if (grade >= 60) {
        return "B";
    }
    if (grade >= 50) {
        return "C";
    }
    else {
        return 'pass';
    }
}
var myGrade = examGrade(74);
console.log('result ', myGrade);
