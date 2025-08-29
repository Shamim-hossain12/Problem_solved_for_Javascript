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