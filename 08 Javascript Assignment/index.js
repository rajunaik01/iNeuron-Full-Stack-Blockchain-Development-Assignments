//Q.1 Can we put duplicate values in the set object ?

//Ans:- Sets can hold data of any type, but may not contain duplicate items. 
//In the case of adding duplicate and equal items, only the first instance will be saved to the set

//Q.2 Write the syntax for
// a) Creating new set object
const s = new Set(['a', 'b', 'c']);

// b) Adding new element to set object
s.add('x');

console.log(s);

// c) Deleting element from set object
s.delete('b');

console.log(s);

//Q.3 Create a set object with four random numbers from 0 to 10. Check if this
//newly created set object has 8 in it. Use set object methods.

const numSet = new Set([]);
while (numSet.size < 4) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (!numSet.has(r)) numSet.add(r);
}
console.log(numSet);
if (numSet.has(8))
    console.log('Set contains 8 digit')
else
    console.log('Set does not contains 8 digit')
