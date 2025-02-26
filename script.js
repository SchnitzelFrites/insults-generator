

function getRandomInsult () {


    const subjects = [
        "Your mother ",
        "Your father ",
        "Your grandma ",
        "Your grandpa ",
        "Your face ",
        "Your upper lip ",
        "Your brain ",
        "Your school picture ",
        "Your personality ",
    ]
    
    const verbs = [
        "is like ",
        "looks like ",
        "smells like ",
        "sounds like ",
        "reminds me of ",
        "feels like ",
        "shouldn't be like ",
    ]
    
    const objects = [
        "a fat raccoon.",
        "a squeaky fart.",
        "Tina, the llama from the cinematic masterpeice, Napolean Dynamite.",
        "a squashed donut.",
        "a sad bouquet of ugly.",
        "Jeff Goldbloom from The Fly, after he becomes the fly.",
        "a soggy bus seat.",
        "a used tissue.",
        "a wad of carefully harvested bellybutton lint.",
        "a hug that goes on a bit too long.",
        "that crusty stuff on your eyelashes in the morning that is actually mite poop.",
    ]


var randSub = Math.floor(Math.random() * subjects.length);

var randVer = Math.floor(Math.random() * verbs.length);

var randObj = Math.floor(Math.random() * objects.length);

var insult = subjects[randSub] + verbs[randVer] + objects[randObj];
console.log(insult);
return insult;
}


function clickButton(){
 document.getElementById('insultHere').innerHTML = getRandomInsult();
}











// From one YT vid:

// let clickMe = document.querySelector("button");
// let result = document.querySelector("insultHere");

// clickMe.addEventListener("click");

// // From codepen

// function getRandomItem (list) {
//     const randomIndex = Math.floor(Math.random() * list.length)
//     return list[randomIndex]
// }

// function getRandomPhrase() {
//     return getRandomItem(subjects), getRandomItem(verbs), getRandomItem(objects)};
    


// function loadInsult() {
//     const h3 = document.querySelector("insultHere")
//     h3.innerText = getRandomPhrase()
// }

