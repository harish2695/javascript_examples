//Good practices in javascript

//01.Operational chaining

const user = {
    name: 'Submit',
    address: {
        city : "Bengaluru"
    }
}

//bad
const res  = user && user.address && user.address.city;

//better
const data = user?.address?.city

//########################

//02.If with Multiple conditions

//long hand syntax
const isValidUser = (type) => {
    if(type === 'Admin'
        || type === 'Employee'
        || type === 'Customer'){
            return true
        }else {
            return false
        }
}
//short hand syntax
const isValidUser1 = (type) => {
    return ['Admin','Employee','Customer'].includes(type)
}
console.log(isValidUser1('Admin'))

//################
//03 Destructuring assignment

const user1 = {
    firstName : 'Harish',
    lastName: 'Gowda'
}
//bad
const fName = user1.firstName;
const lNmae = user1.lastName;

//better
const { firstName,lastName } = user1

//###############

//04.Object property assignment

const firstName1 = "Harish";
const lastName1 = "Gowda";

//bad 
const user2 = {
    firstName:firstName1,
    lastName:lastName1
}

//better
const user3 = {firstName1,lastName1}

//############
//05.Simplify the condition

const age = 10;
let isEligibleForVoting;

//bad
if(age>= 18){
    isEligibleForVoting = true;
}else{
    isEligibleForVoting = false
}

//better
isEligibleForVoting = age>=18 ? true: false;

//best
isEligibleForVoting = age>=18;