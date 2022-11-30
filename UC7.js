// showing daily wage along with days in Map 
const Full_Time_Per_Hr_Rate = 160;
const Part_Time_Per_Hr_Rate = 80;
const Absent = 0;
const Full_Time_Hour = 8;
const Part_Time_Hour = 4;

let workingDays = 0;

function getEmployeeWage(attendance,map1){
    let totalWage = 0;
    let wage = 0;
    switch(attendance){
        case 0 :
            wage = Full_Time_Per_Hr_Rate;
            totalWage += wage;
            workingDays++;
            map1.set(workingDays,wage);
            break;
        case 1 :
            wage = Part_Time_Per_Hr_Rate;
            totalWage += wage;
            workingDays++;
            map1.set(workingDays,wage);
            break;
        case 2 :
            wage = 0;
            totalWage += wage;
            workingDays++;
            map1.set(workingDays,wage);
            break;    
    }
}

let employeeMap = new Map();
for(let i = 1; i<=10;i++){
    let attendance = Math.floor(Math.random()*3);
    getEmployeeWage(attendance,employeeMap);
}

console.log(employeeMap.entries());

// showing Days having full time wage of 160;
let fullTimeWorkingDaysKeys = new Array();
let fullTimeWorkingDaysValues = new Array();
employeeMap.forEach((value,key,map) => {
    if(value == 160)fullTimeWorkingDaysKeys.push(key),fullTimeWorkingDaysValues.push(value);
});

console.log("Full Working Days => ",fullTimeWorkingDaysKeys,fullTimeWorkingDaysValues);

// finding first occurence of full time wage was earned

let firstOccur = fullTimeWorkingDaysKeys[0];
console.log(firstOccur);

// checking every element is full time wage or not 

let checkingFullTimeDaysArray = fullTimeWorkingDaysValues.every(x => x==160);
console.log(checkingFullTimeDaysArray);

// checking any element is part time wage or not 

let checkAnyPartTimeDay = fullTimeWorkingDaysValues.includes(80);
console.log(checkAnyPartTimeDay);

// number od days employee worked 

let totalWorkedDays = 0;
employeeMap.forEach((value,key,map) => {
    if(value == 160)totalWorkedDays++;
    else if(value==80)totalWorkedDays++;
});

console.log("Total working days of employee => ",totalWorkedDays);



