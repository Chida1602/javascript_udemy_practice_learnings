//activating  strict mode
/*
'usestrict';
let hasdriverLiciense= false;
const passTest=true;
if(passTest) hasdriverLiciense=true;
if(hasdriverLiciense) console.log('I can drive:D');
*/

/*
//calling function
function hello(){
    console.log("my name is chidanand");
}
hello();
hello();
hello(); 
hello();
*/


/*

//function declaration

function calage(byear){
    return 2023-byear;
}
const age1=calage(2002);


//function expression
const calage2=function(byear){
    return 2023 -byear
}
const age2 = calage2(2003);
console.log(age1,age2);



//arrow function
const calage3=byear=>2023 -byear;
const age3=calage3(2001);
console.log(age3);

const yearsuntilretirement=(byear,fname)=>{
    const age=2023 -byear;
    const retirement=60-age;
    return `${fname} retires in ${retirement} years`;
}
console.log(yearsuntilretirement(2002,'chida'));


const cutpieces = function(fruit){
    return fruit * 4;
}
function fprocessor(apples,oranges){
    const applepieces=cutpieces(apples);
    const orangepieces=cutpieces(oranges);

    const juice=`juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange.`;
    return juice;
}
console.log(fprocessor(2,3));

*/

//arrays
const frnd1='chidanand'
const frnd2='tarun'
const frnd3='chida '

const frnds=['chida','chidanand','tarun'];
console.log(frnds)