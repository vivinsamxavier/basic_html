// To create temporary stroage (variable)
//synatx-> var variable_name =value;
//varible_name-> Any reasonable text value ,a-z,A-Z,0-9,$,_


//Number -> Any numerical value frome posative, nagative decimal,fractional
var user_age = 24
console.log(user_age);

//string->Any Value is typed by inside dobule quotes "" or single quotes''
var user_name = "JS Abishek Rosario";
console.log(user_name);

//Boolean -> true or false
var result = false;
console.log(result);

/* object -> Collection of Key - Value pair.
var variable_name = value;
value -> {
  first_name : 'sfdfsd',
  last_name : 'sdsdsd',
  age : 23
}
*/

var student_Information = {
    name : 'karthick',
    name : 'karthick',
    age : 27,
    roll_no : 47589,
    result : true 
  };
  
  console.log(student_Information);
  
  /*Operations in Object (4) 
    1. To read a value from Object
    2. To edit a value from Object
    3. To add new value to Object 
    4. To delete a particular value from Object 
  */
  
  //To read a value from Object -> object_variable_name.key
  console.log(student_Information.name);
  console.log(student_Information.roll_no);
  
  //To edit a value from Object -> object_variable_name.key = value;
  student_Information.name = "Yuvi";
  console.log(student_Information);
  
  //To add new value to Object -> object_variable_name.NewKey = value;
  student_Information.mobile_number = 124563555;
  student_Information.grade = "A+";
  console.log(student_Information);
  
  //To delete a particular value from Object -> delete object_variable_name.key;
  delete student_Information.result;
  console.log(student_Information);


  var my_name = {

    name : 'Abi',
    age  : 22,
    sex : 'Male' ,
    phone_no :922000,
  };
  console.log(my_name);

  console.log(my_name.name);
  console.log(my_name.age);


  my_name.name = "Michael";
  console.log(my_name);

  my_name.salary = "450000";
  my_name.location ="Madurai";
  my_name.desiganation ="software devloper";
  console.log(my_name);


  delete my_name.age;
  console.log(my_name);


  var data_j ={
      name: "hai",
      age: 25,
      id: 144,
      salary:22000,

  };
  console.log(data_j); 

  console.log(data_j.name);
  console.log(data_j.age);

  data_j.name = "JS";
  console.log(data_j);

  data_j.sex = "Male";
  data_j.desiganation ="Tl";
  data_j.dateofjoining ="14/02/2022";
  console.log(data_j);


  delete data_j.age;
  console.log(data_j);

//Array
//Syntax - var array_variable_name = [value1,value2,value3.........valueN];

var list = ["Abisehk","Valan","Rosario","Michael","Hero","Director"];

var money =[
    {
        name: 'abi' ,
        salary:15000
    },
    {
        name:'mic',
        salary:20000
    },
    {
        name:'js',
        salary:50000
    },
    {
        name:'valan',
        salary:45000
    }
];

  console.log(list);
  console.log(money);

  /*operations in Array (4)
  1.To Read a value from Array
  2.To Edit a value from Array
  3.To Add a value  to Array
  4.To Delete a particular value from Array
  */

  // To read a value from Array - array_varaible_name[index];

  console.log(list[3]);
  console.log(money[1]);

  //To Edit a value from Array - array_variable_name[index]= value;
  

   list[3];
   list[3] ="KING";
  
  money[0].name ="rajini";
  console.log(money);

var king = ["kavlan","mersal","kili","thupakki"];
console.log(king);
 king[0] = "bigil";
 console.log(king[0])



 var queen = [
     {
         name:'mangatha',
         salary:1554545
     },
     {
         name:'sura',
         salary:64462603
     },
     {
         name:'kurvi',
         salary:4466564
     },
     {
         name:'pokkrire',
         salary:466464464
     }
 ];

 console.log(queen[0]);
 console.log(queen);
 queen[1] = "Master";
 console.log(queen[1]);
 queen[0].salary = '150000000';
 console.log(queen);

/*To Add A new  value to array ->
1.array_varible_name.push(value); -> insert last in array
2.array_varible_name.unshift(value); -> insert first in array

 */

money.push({ name: 'abi' ,salary:15000});
money.unshift({ name: 'hai' ,salary:15000});

/* delete array
1.array_varibel_name.splice(index,delete)
*/

money.splice(2,1);


/*Function - Block of code

Syntax:(function Definition)

function function_name() { //argument

    //code Block
    
};

function_name --> proper text value --> a-z,A-Z,0-9,$, _


To Run/Execute a Function :
Syntax : (Function Call/Funtion Invocation)//parameter

function_name();

*/

function my_Dev () {

    var number_1  = 25;
    var number_2  = 35;
    var result = number_1 + number_2;
    console.log(result);

};

function my_Mic() {

    var name = "JS Abishek";
    console.log("The User Name is" , name);
    
};



function hai_Fuck() {

    var chennai = "VANKANAM";
    console.log("Welcome everyone", chennai);
    
};


function jk_King() {
    var hai_1 = 35;
    var hai_2 = 20;
    var result = hai_1 -hai_2;
    console.log(result);
    
};

function abi_My () {

    var list = "Pleasse";
    console.log("Here",list);
    
};

function lion_King() {
    var fund_1 =1000;
    var fund_2 =500;
    var result = fund_1*fund_2;
    console.log(result);
    
};


/* Argument&parameter*/


function my_love(name_1, name_2) {

    var result =  name_1 + name_2;
    console.log(result);
    
};

my_love();

//ues this coding console and the give the parameters,load and got the out put
function avan_ivan(a,b,c,d) {

    var result = a+b+c-d;
    console.log(result);
    
};

avan_ivan();

//prompt function

function hai_A() {

   var name = prompt("please enter user name");
   console.log("This is username", name);
    
};

function mgr_js() {
    var name = prompt("vanakam");
    console.log("vanga vanga",name);
    
};

function on_hai() {
      var name_1  =  prompt("Enter number 1 value");
      var value_1 = parseInt(name_1);
      var name_2  =  prompt("Enter number 2 value");
      var value_2 = parseInt(name_2);
      var result = value_1 + value_2;
      console.log(result);
    
};

function hai_on() {
    
    var name_3 = prompt("hai");
    var value_3 = parseInt(name_3);
    var name_4 = prompt("how");
    var value_4 =parseInt(name_4);
    var result = value_3 - value_4;
    console.log(result);
}

/*
Operators 
 1. Arithmetic Operator --> +, -, *, **, /, %, ++, --
 2. Assignment Operator --> = 
 3. Comprasion Operator --> ==, ===, <, <=, >, >=, !=, !==
 4. Logical Operator --> &&, ||, ! (AND, OR, NOT)
 */


/*syntx:IF~ELSE

  if(condition){

    //code block 1
  }
  else{
   //code block 2
  }
*/
function hai_pa() {

    var value = prompt( "enter the age");
    var age   = parseInt(value);
    
    if(age  >=18){

        console.log("you can vote");
    }
    else{
        console.log("you can't vote");

    }
};



// //syntax - Multiple IF - else

// if(condition){

// }
// else if(condition 1){

// }
// else if(condition 2){

// }
// else if(condition n){

// }
// else{
//     //optional
// };

function name_2() {
    var oi_1 = prompt("enter age");
    var age =(oi_1);

    if( age<18){
        console.log("this age is minor");

    }
    else if(age >= 18 && age<60){
        console.log("this age major");
    }
    else{
        console.log("this age supercitiztion");
    }
};


/*Syntax: FOR LOOP
for(initialization;Condition;increment/decrement){
    //code block
} */


/*program:read a number  and print evnt numbers till that Nth number.
Steps:
1.Readd a value during program return(prompt) 
2.Logic - Number % 2 ->0
3.use for loop for finding the limit of number */

function for_value() {
    var name = prompt("Enter the number");
    var value = parseInt(name);

    for(var limit=1;limit<=value;limit++){
        if(limit % 2 === 0){
            console.log("The even number is",limit)
        }
    }
}

/*For in 
for (var variable_name in object_name){

}

*/
for (var key in student_Information){
    console.log(student_Information[key])

}

/* for of

for (var variable_name of array_variable_name){
}

*/

for( var value of queen){
    console.log(value)
}

for( var value of queen){
    console.log(value.name)
}


/* syntax: while(condtion){
    code block
}*/


var count = 1;
while(count <=10){
    console.log("The count is ", count);
    count++
}

/* 
Syntax:do{
//code block
}while(condition)

*/
var count = 11;
do{
    console.log("The count is ", count);
    count++
}while(count <=10)


//Syntax - switch

switch(expression){
    case value :
        //code block
        break;
        case value :
        //code block
        break;
        case value :
        //code block
        break;
    default:
        //code block
}


switch(2){
    case 1:
        console.log("This is one hai");
        break;
    case 2:
        console.log("This is two hai");
        break;
    default:
}

var stduent_last_name = "Kumar";    /* Global Scope - Access within the File*/
var stduent_reg_no;


function display(){
  var stduent = "Karthick Kumar";    /*Local Scope - Access within the Function*/
  console.log("Hello everyone! ", stduent_last_name, " here!");
  stduent_reg_no = 5784696;    /*Automatic Global - Access within the File*/
  console.log(stduent_reg_no);
};

function print_name(){
  try{
    console.log(stduent_last_name);
    console.log(stduent_reg_no);
    console.log(stduent)
    console.log(name)
    alert("success")
  }
  catch(exception){
      console.log(exception);
      alert("sorry,please try later")
  }
}
