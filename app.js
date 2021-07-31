// 1st Question

var itemsArray = [
    {
        name: 'juice', 
        price: 50,
        quantity: 3

    },
    {
        name: 'cookie',
        price: 30,
        quantity: 9

    },
    {
        name: 'shirt',
        price: 880,
        quantity: 1

    },
    {
        name: 'pen',
        price: 100,
        quantity: 2

    }
];

var first = itemsArray[0].price * itemsArray[0].quantity ;
var second = itemsArray[1].price * itemsArray[1].quantity ;
var third = itemsArray[2].price * itemsArray[2].quantity ;
var fourth = itemsArray[3].price * itemsArray[3].quantity ;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

var Total = first+second+third+fourth;

console.log(Total);


// 2nd Question


var secondQuestion = {
    firstName: " Talha",
    lastName: " Naveed", 
    email: "muhammadfateh1965@gmail.com",
    password: "00000",
    age: 25,
    gender: " Male",
    country: "Pakistan"
}

if (secondQuestion.age && secondQuestion.country) {
    console.log( secondQuestion.firstName,  secondQuestion.lastName, secondQuestion.country);


}
else {
    console.log("not exists");
}

if ( secondQuestion.firstName && secondQuestion.lastName ) {
    console.log( secondQuestion.firstName  + secondQuestion.lastName );
}
else {
    console.log("plz define");
}


// 3rd Question


function user (Name , Age , Gender , Origin , Country) {
    this.name = Name,
    this.Age = Age,
    this.Gender = Gender,
    this.Origin = Origin,
    this.Country = Country
}

var user1 = new user ("Talha ", 25, "Male", "Sindh", "pakistan");


console.log(user1);


// 4th Question 

function User(Name, Gender, Address, Education, Profession){
    this.Name=Name,
    this.Address=Address,   
    this.Gender=Gender,     
    this.Education=Education
    this.Profession=Profession
}
var arr = [  ]
function person () {
var userName = document.getElementById("Name");
var userGender="";
var male = document.getElementById("Male");
var female = document.getElementById("female");
if(male.checked == true){
    userGender = male.value
}else if(female.checked == true){
    userGender = female.value
}
var userAddress= document.getElementById("Address");
var userEducation= document.getElementById("Education");
var userProfession=document.getElementById("Profession");
var myuser = new User (userName.value, userGender , userAddress.value,userEducation.value,userProfession.value);
arr.push(myuser);
console.log(myuser);
console.log(arr);
}
