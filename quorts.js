
let btn = document.querySelector("#quortBtu");
let quote = document.querySelector(".quorst");
let persone = document.querySelector(".person");
const quotes =[{
    quote : "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference." ,
    persone : "Robert Frost "
},
{  
    quote : "What we've got here is failure to communicate. Some men you just can't reach.What we've got here is failure to communicate. Some men you just can't reach.",
    persone : "Captain"
},
{  
    quote : "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    persone : "Abraham Lincoln"
},
{  
    quote : "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    persone : "Martin Luther King"
},
{  
    quote : "Life is like a box of chocolates. You never know what you’re gonna get.",
    persone : "Forrest Gump"
},
{  
    quote : "All the world’s a stage, and all the men and women merely players.",
    persone : "William Shakespeare"
},
{  
    quote : "Ask not what your country can do for you; ask what you can do for your country.",
    persone : "John Kennedy"
},
{  
    quote : "You must be the change you wish to see in the world.",
    persone : "Mahatma Gandhi"
},
];

function  change() {
    let redome = Math.floor(Math.random()*quotes.length );
    quote.innerText=quotes[redome].quote;
    persone.innerText=quotes[redome].persone;
}
