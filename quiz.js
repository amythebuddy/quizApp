const container = document.getElementById("container");
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const title = document.getElementById('title');

const questionsAndAnswers = {
    '0': ['What is the capital of Vietnam?', 'Ha Noi'],
    '1': ['In what year was the internet opened to the public?', '1993'],
    '2': ['What is the meaning of "fn" on your computer keyboard?', 'function'],
    '3': ['Who was the first computer programmer?', 'Ada Lovelace'],
    '4': ['Amazon (company) was founded in which US state', 'Washington'],
    '5': ['Which country has the largest population in the world?','India'],
    '6': ['What city has the longest name in the world?', 'Bangkok'],
    '7': ['Which country owns greenland?', 'Denmark'],
    '8': ['What continent is the biggest?', 'Asia'],
    '9': ['What is the best-selling video game ever of all time?', 'Tetris'],
};

document.getElementById('option1').onclick = function() {
    document.getElementById("option1").classList.add('correct');
    next();
};
function next(){
    let questionNumber = 0;
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next ->";  
    nextBtn.onclick = function () {
        showQuestion(++questionNumber);
    };
    container.appendChild(nextBtn);
}

function showQuestion(questionNum){
    title.innerText = questionsAndAnswers[questionNum][0];
    switch(questionNum){
    case 1:
        a.innerText = '1991';
        b.innerText = '1994';
        c.innerText = '1993';
        d.innerText = '1992';
        break;
        
    case 2:
        a.innerText = 'Find';
        b.innerText = 'Function';
        c.innerText = 'Font';
        d.innerText = 'Flunk';
        break;

    case 3:
        a.innerText = 'Tim Berners-Lee';
        b.innerText = 'Katherine Johnson';
        c.innerText = 'Margaret Hamilton';
        d.innerText = 'Ada Lovelace';
        break;

    case 4:
        a.innerText = 'Washington';
        b.innerText = 'New York';
        c.innerText = 'Texas';
        d.innerText = 'California';
        break;

    case 5:
        a.innerText = 'China';
        b.innerText = 'India';
        c.innerText = 'United States';
        d.innerText = 'Indonesia';
        break;

    case 6:
        a.innerText = 'Andorra La Vella';
        b.innerText = 'Llanfairpwll';
        c.innerText = 'Bangkok';
        d.innerText = 'Taumata';
        break;

    case 7:
        a.innerText = 'Denmark';
        b.innerText = 'Finland';
        c.innerText = 'Sweden';
        d.innerText = 'Netherlands';
        break;
    case 8:
        a.innerText = 'South America';
        b.innerText = 'Africa';
        c.innerText = 'North America';
        d.innerText = 'Asia';
        break;
    case 9:
        a.innerText = 'Wii Sports';
        b.innerText = 'Tetris';
        c.innerText = 'Grand Theft Auto V';
        d.innerText = 'Minecraft';
        break;
    }

}
function checkAnswer(){
    for(let i = 'a'; i < 'e'; i++)
    if(questionsAndAnswers.hasOwnProperty(i)){
        
    }
}
function finished(){
    
}
