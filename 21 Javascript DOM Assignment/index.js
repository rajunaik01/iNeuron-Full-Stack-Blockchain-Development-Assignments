
//Q.1 Select an <h2> tag with id of text and change its inner text to “Hello World”.

const h21 = document.getElementById("h21");

h21.innerText = "Hello World";

//Q.2 Apply following style to the same h2 using Javascript DOM
// Method.
// colour: red,
// fontWeight: bold,
// textTransform: uppercase

h21.style.color = "red";
h21.style.fontWeight = "bold";
h21.style.textTransform = "uppercase";

//Q.3. Create a simple calculator that takes the input from
// input1, input 2 and add them together.

const txtFirstNum = document.getElementById('txtFirstNum');
const txtSecondNum = document.getElementById('txtSecondNum');

document.getElementById("btnAdd").addEventListener('click', () => {
    document.getElementById("lblAns").innerText = parseInt(txtFirstNum.value) + parseInt(txtSecondNum.value);
})

//Q.4 What is the error in the following code?

//document.getElementById("text").innerHTML = "Hi Js Dom";

//Ans: id "text" not assign in p tag, we are getting by id insted of by class 


//Q.5 Using JS Dom select a button and set its onclick event to logging hello in the console

document.getElementById("btnLog").addEventListener('click', () => {
    console.log("Hello World!");
})

//Q.6 Using alert, prevent a person from leaving the screen using JS

window.onbeforeunload = function () {
    return "Changes you made may not saved.";
};

//Q.7 Select all the h2 tags on screen and change their colour to purple.

document.querySelectorAll("h2").forEach((e) => e.style.color = "purple");

//Q.8 Create a new <h4> tag on the screen using JS DOM.

const h4 = document.createElement("h4");
h4.innerText = "h4 tag using js dom";
document.body.appendChild(h4);


//Q.9 Remove an element from the screen using js dom.

document.body.removeChild(document.getElementById("dvRemove"));

//Q.10 Get the number of <p> tags on the screen using JS DOM.

let pCount=document.querySelectorAll('p').length;

document.getElementById('dvCount').innerText=`No of P tag is ${pCount}`;

//Q.11 Fetch the value of name from the following form.

function getFormvalue(){
    alert(`Your name is : ${document.getElementById('name').value}`);
}