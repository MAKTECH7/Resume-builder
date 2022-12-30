function addNewWEField(){
    // console.log("Adding new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let weOb = document.getElementById("we");
    let weAddbuttonOb = document.getElementById("weAddbutton");

    weOb.insertBefore(newNode, weAddbuttonOb);
}
function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let aqOb = document.getElementById("aq");
    let aqAddbuttonOb = document.getElementById("aqAddbutton");

    aqOb.insertBefore(newNode, aqAddbuttonOb);


}
// let person =  {
//     firstname : 'md ayan',
//     lastname : 'khan',
//     hobbies: ['cric','codings'],
//     aim:{
//         field : 'computer science',
//         sports:'cric',
//         technicalfield : ['codings','pcb','enterprenuer'],
//     },

// };
// console.log(person,person.firstname,person.lastname);
// console.log(person.hobbies);

// person.age =  '20';
// console.log(person.age);
// console.log(person.aim.field);
// console.log(person.aim.technicalfield[2]);

// let persons = [
//     {
//         name: 'mak',
//         age: 20
//     },
//     {
//         name: 'AYAN',
//         age: 20
//     },
//     {
//         name: 'KHAN',
//         age: 20
//     },
    
// ];
// console.log(persons[2]);
// persons[0].name = 'PATHAN SAHAB'
// console.log(persons[0]); 
// let age = 19;
// if (age<18){
    // console.log('you can\'t drive')
// }
//   else{
    // console.log('you can get licence');
//   }
// let age=11;

// if(age===10){
//     console.log('age is 10');
// }else {
//     console.log('age is not 10');
// }






