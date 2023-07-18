// 💻 Create three arrays of strings, one called "randomBodyParts", one called "randomAdjectives", and one called "randomWords".
// Put at least 10 strings in each

let randomBodyParts = [
"head",
"hand",
"finger",
"ears",
"foot",
"arm",
"nose",
"eyes",
"eyelids",

];




let randomeAdjectives = [
"pink",
"soft",
"royal",
"polite",
"slow",
];



let randomWords = [

"otter ",
"slimy",
"computer",
"pear",
"oranges",
"dragonfruit",
"peaches",
];
/*
💻 Write the code to generate the insult here
*/
let bodyPartIndex = Math.floor(Math.random()*randomBodyParts.length)
let AdjectiveIdex = Math.floor(Math.random()*randomeAdjectives.length)
let wordIndex = Math.floor(Math.random()*randomWords.length)

let bodypart = randomBodyParts[bodyPartIndex]
let adjective = randomeAdjectives[AdjectiveIdex]
let word = randomWords [wordIndex]

let insult ="your " + bodypart + " is like a "+ adjective + word + "I"



// Change "Unwritten Insult" to your insult variable
document.getElementById("insult-spot").innerText = insult


