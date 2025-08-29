/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 99;
//write your code here

if (money>=25000) {
    console.log("Laptop");
}
else if (money>=10000) {
    console.log("Cycle");
}
else {
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 10;
//write your code here

for (let i = 1; i <=lastDay ; i++) {
    if (i%3===0) {
        console.log(i + " - medicine" );
    }
    else{
        console.log(i + " - rest ")
    }
    
}

/** Problem 04 - (Delete / Store) */
var fileName= "#hello";
//write your code here 

if (fileName[0]==="#") {
    console.log("Store");
}
else if (fileName.endsWith (".pdf")) {
    console.log("Store");
} else if(fileName.endsWith(".docx")){
    console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= {
     name: "jhankar" , 
     roll: 1014 ,
     dot: "." ,
     department:"cse",
     ext:"@ph.ac.bd"
};
//write your code here
var email=student.name + student.roll +  student.dot + student.department + student.ext;
console.log(email);



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(let i=1; i<=experience; i++){
startingSalary += startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));
 