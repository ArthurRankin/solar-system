"use strict";
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(item){
    $('#planets').append(`<h1>${item}</h1>`);
});

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
$('#planets').append(`<h1>${planets.map(x => x.charAt(0).toUpperCase() + x.slice(1))}<h1>`)
//HHAHAHAHHAHA THIS TOOK ME FOREVER, AND IT IS WEIRD. I TARGETED THE FIRST LETTER TO UPPER CASE IT THEN CUT OUT THE FIRST LETTER FROM THE REST OF THE STRING AND ADDED HE REST TO THE NEWLY UPPER CASED LETTER

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
$('#planets').append(`<h1>${planets.filter(planet => planet.includes("e"))}</h1>`)




// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]


let makeSentence = (sentence, word) => {
    return sentence + " " + word;
}
$('#planets').append(`${words.reduce(makeSentence)}`);