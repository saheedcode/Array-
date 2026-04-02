// Array and Method 

// const numArray = [1,2,3,4,5,6]

// an array containing different data types

//let mixedArray = [1, "Osb", false, true]

//console.log(mixedArray, numArray)


//2. Arrays can also be created with the 'array' class by using the word 'new'
//and passing the Element as comma-seperated arguements;

// i List of strings
//const schoolSubjects = new Array ("Math", "Science", "History", "Law", "Government");


//console.log(schoolSubjects);

// ii. A list of numbers 
//const quizScores =  new Array (1, 2, 3, 4, 5)
//console.log(quizScores);

//An array can also be created empty and have its value added later through the help of the .push()
//function

//const myHobbies = [];
//myHobbies.push("basketball")
//console.log(myHobbies);








const cart = [];
//grap the text user typed
function addToCart(){

    let newItem = document.getElementById("itemInput").value;

//make sure that the user is typing something
if(newItem != ""){
    // we push the new item into the back of our cart.push()

    cart.push(newItem);

    document.getElementById("itemCount").innerText = cart.length;

    //we use .join() to easily run our whole array into one readerable sentence

    document.getElementById("cartDisplay").innerText = cart.join(" ");

    //clear the input box so that they can type the new item
    document.getElementById("itemInput").value = "";

console.log("current Array", cart);
}
else{
    alert("please type an items")
}
}


//asses array using the index 

const myMusicCareer = ["Upcoming", "Uprising", "Ololade", "OSB", "Tailor"]
myMusicCareer[5] = "Don jazzy"

console.log(myMusicCareer[5])

//Nested Arrays

//any object can be an element of an array,including other arrays. arrays with one or 
//more arrays as elements are reffered to as 'nested arrays'

const musicGenres = [
    ["Rock", "Pop", "Country"],
    ["Soul", "Hip Hop", "Raggae"],
    ["Folk", "Classical", "Electrical"],
]


console.log(musicGenres[2][2])



//mutatting: push(), pop(),shift(), unshift(),splice()
// .push
//the push array methods adds a new element to an array(at the end) 

const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.push("kiwi");
console.log(fruits);


const energxiCohorts = ["Osb", "Music Manage:Hyceage",
"Beer Ambassador: Mr. Faroo", "Bro Ay: i just drive by",
"Futa Alumni: Temidayo"];

let length = energxiCohorts.push("Neigbor: Paul Olumide", "OSB");
console.log(length);


//.pop() is an array method is use to remove the last element in an array
const hobbies = ["football", "eating", "Bearing", "passanga"]
hobbies.pop();
console.log(hobbies);
let name = "saheed"
console.log(`i love drinking ${hobbies[2]} morning in courtesy every  ${name}`)

const schedule = ["wake up", "eat", "work", "play", "sleep"];
const lastThingToDo = schedule.pop()

console.log(lastThingToDo);
console.log(schedule);

// shift is an array method that remove and return the first of the array. all subsequent element 
//shift down to one place

const daysofTheWeek = [
"Monday",
"Tuesday",
"wednesday",
"thursday",
"friday"

];

const removed = daysofTheWeek.shift();
//unshift
daysofTheWeek.unshift("Monday")
console.log("Removed day", removed)
console.log("Rest of the week", daysofTheWeek)

//splice can be use to add new items to an array. it modify an array by inserting
//deleting and replacing array element

const workTools = ["Computer", "Mouse", "Table", "mechanical keyboard", "chair"]
 //let remaining = workTools.splice(3,3)
workTools.splice(3,3)
workTools.splice(2,1, "monitor")
 //console.log("splice method", remaining)

 console.log(workTools)



















 //another work project by Md
 //mutating array method

 const line = ["sirfaroo", "osb", "bro ay", "saheed", "temmy"];

function updateScreen() {
    document.getElementById("lineDisplay").innerText = line.join(" ➡️ ");

    document.getElementById("guestName").value = "";
}

// 1. push (add to back)
function usePush() {
    let name = document.getElementById("guestName").value;

    if (name !== "") {
        line.push(name);
        updateScreen();
    } else {
        alert("Please type a name first!");
    }
}

// 2. pop (remove from back)
function usePop() {
    let removePerson = line.pop();

    if (removePerson) {
        alert(`${removePerson} got tired and left the back of the line`);
        updateScreen();
    }
}

// 3. unshift (add to front)
function useUnshift() {
    let name = document.getElementById("guestName").value;

    if (name !== "") {
        line.unshift(name);
        updateScreen();
    } else {
        alert("Please type a name first");
    }
}

// 4. shift (remove from front)
function useShift() {
    let allowedPerson = line.shift();

    if (allowedPerson) {
        alert(`The bouncer let ${allowedPerson} into the club`);
        updateScreen();
    }
}

// 5. splice (add in middle)
function useSplice() {
    let name = document.getElementById("guestName").value;

    if (name !== "") {
        line.splice(1, 0, name);
        updateScreen();
    } else {
        alert("Please type a name first");
    }
}




//if a pick a number its will delete to the end
let juice = ["apple", "banana", "orange", "mango"];

juice.splice(1,1);
//juice.unshift("mango")

console.log("what are the",juice);



// pop is remove from end
let smoke = ["apple", "banana", "orange"];

let remove = smoke.pop();

console.log("be good",smoke);   
console.log(removed)



//mutating Array method
//1 push method - add new items

let student = ['Ade', 'ojo', 'kola', 'osb']
//student.push('OSB')
console.log(student, "After")

//2 pop method --last item remove
student.pop()
console.log(student, "lasts")

//shift - remove front
student.shift()
console.log(student)
    
// 4 unshift - remove back
 student.unshift("osb")
  console.log(student)

// 5 slice
student.slice(1)
console.log(student, "the slice1")

//another example
const worker = ['Ade1', 'Ade2', 'Ade3', 'Ade4']
console.log(worker, "The slice worker")
worker.slice(1)
console.log(['Ade1', 'Ade2', 'Ade3', 'Ade4'].slice(3), "the worker slice3")



//ai
//let fruits = ["apple", "banana", "orange", "mango"];

//let result = fruits.slice(1, 3);

//console.log(result);  // ["banana", "orange"]
//console.log(fruits);  // ["apple", "banana", "orange", "mango"]

//let fruits = ["apple", "mango"];

//fruits.splice(1, 0, "banana", "orange");

//console.log(fruits);  
// ["apple", "banana", "orange", "mango"]



// 6 splice

worker.splice(3)
console.log(worker, "the after in 33")



//2 non mutating array method
//*concat
const girls = ['linda', 'itunu', 'linda']
const boys = ['Osb', 'segun', 'ay']

const allstudents = girls.concat(boys)
console.log(allstudents, "The non mutating")


//iteration array method

//1 FOREACH
//keyword function
allstudents.forEach(function(theStudent, i){
console.log(`My name is ${theStudent}, i am index ${i}`)
})

//arrow function
allstudents.forEach((theStudentName, i) => {
    console.log(` "be good",  my name is ${theStudentName}, i am index ${i}`)
}
)

//2 Map
const theNumber = [10,20,3,6,8,90]

const newNumber = theNumber.map((theNumber, i) =>{
     const newNumber = theNumber * 10
    console.log(`Old  Number = ${theNumber}, The new Number = ${newNumber}`)
    return newNumber
})

console.log(newNumber,  "the nee")

//3 filter 
const studentAges = [80, 20, 50, 40, 30, 40]
studentAges.push(70)
const aboveforty = studentAges.filter((age, i) => {
    return age >= 40
})

console.log(aboveforty, "the Above 40s")

//4 reduce
const sumAll = studentAges.reduce((calculate, item, i) => {
console.log(calculate, i, "i dey here")
    return calculate + item
})

console.log(sumAll, "the sum all")

//4 Searching array method
//1. find

   const findedAge = studentAges.find((age, i) => {
return age < 100
   })
console.log(findedAge, "yeyeye")



//find index 
const theIndex = studentAges.findIndex((theAge, i) => {
    return theAge === 30
})
console.log(theIndex, "The Index")

//includes
let student2 = ['Ade', "Ojo", 'tunde',"bolass"];

const searchOsb = student2.includes('Osb')
console.log(searchOsb, "the search")


//Index of

const theIndexNow = student2.indexOf('Ade')
console.log(theIndexNow)




