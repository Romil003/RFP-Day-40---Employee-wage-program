class EmployeeData {
// property


// constructor
constructor(...params){
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
}

// getter and setter

get name() { return this._name;}
set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name)){
        this._name = name;
    }
    else throw 'Name is Incorrect !';
}

get id() { return this._id ;}
set id(id) {
    let idRegex = RegExp('^[1-9]{1}[0-9]{1,}$');
    if(idRegex.test(id))
        this._id = id;
    else throw 'id is Incorrect !';    
}

get salary() { return this._salary ;}
set salary(salary) {
    let salaryRegex = RegExp('^[1-9]{1}[0-9]{1,}$');
    if(salaryRegex.test(salary))
        this._salary = salary;
    else throw 'salary is Incorrect !';    
}

get gender() { return this._gender ;}
set gender(gender) {
    let genderRegex = RegExp('^(?!(?:M|F)).*$');
    if(genderRegex.test(gender))
        this._gender = gender;
    else throw 'gender is Incorrect !';    
}




// method 

toString(){
    const options = {year:'numeric' ,month:'long',day:'numeric'}
    const empDate = !this.startDate?"undefined" :this.startDate.toLocaleDateString("en-us",options)
return "id : "+this.id+" ,name : "+this.name+" ,salary : "+this.salary+" ,gender : "+this.gender+" ,startdate : "+empDate
}
}

let employeePayrollData = new EmployeeData(11,"Mohan",30000);
console.log(employeePayrollData.toString());

try{
    employeePayrollData.name = "man";
    console.log(employeePayrollData.toString());
} catch (e){
    console.error(e);
}

let employeePayrollData2 = new EmployeeData(22,"Terisa",50000,"F",new Date());
console.log(employeePayrollData2.toString());

try{
    employeePayrollData2.gender = A;
    console.log(employeePayrollData.toString());
} catch (e){
    console.error(e);
}
