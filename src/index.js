import React from 'react';
import ReactDOM from 'react-dom';
import {App} from  "./App"


// ReactDOM.render(<App/>, document.getElementById('root'));
const DOSOME = (num) => {

    return num + 1
}


const myMap = (num , work) => {
    const ary = []
    for(let i=0;i<num.length;i++){
        
        ary[i] = work(num[i])
        
    }

  return ary
}

const taninoary = [1,2,3,4,5,6,7,8,9,10];
const ary64z = [2,4,6,8,10]
const ohyama64z = [1,3,5,7,9]

console.log("taninoary",myMap(taninoary, DOSOME))
console.log("taninoary",taninoary.map(DOSOME))
console.log("ary64z", myMap(ary64z, DOSOME))
console.log("ary64z", ary64z.map(DOSOME))
console.log("ohyama64z",myMap(ohyama64z, DOSOME))
console.log("ohyama64z",ohyama64z.map(DOSOME))




