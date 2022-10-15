//Q.1 Carefully observe this example.

//a) Is the InnerFunction() a closure?
// Ans : Yes 

//b) What is output of this program 
//Ans:- 100

function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        //alert(outerVariable);
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();


// 2. What is the difference between a closure and a scope ?

// Ans: If you define any inner function within another function, this inner function is called a closure
//When you declare a variable in a function, you can only access it in the function. These variables are said to be scoped to the function.

// 3. What is a lexical scope and how is it related to closure?
//Ans: The lexical scoping means that inside the inner scope you can access variables of outer scopes.
// A closure is a function that captures variables from its lexical scope.

// 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}

/*Ans : 3
        3
        3 
*/