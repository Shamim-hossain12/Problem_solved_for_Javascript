/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
// var mainSalary = startingSalary;
for(let i=1; i<=experience; i++){
//    mainSalary += mainSalary*0.05;
startingSalary += startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));