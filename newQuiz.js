const container = document.getElementById("container");
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
let questionNumber = 1;
let score = 0;
let wrong = 0;

const questionsAndAnswers = [{
    '1': 'In what year was the internet opened to the public?',
    options: [
        {"1991" : false},
        {"1992" : false},
        {"1993" : true},
        {"1994" : false}
    ]},
    {
    '2': 'What is the meaning of "fn" on your computer keyboard?',
    options: [
        {"Find" : false},
        {"Fonts" : false},
        {"Function" : true},
        {"Flunk" : false}
    ]},{
    '3': 'Who was the first computer programmer?',
    options: [
        {"Find" : false},
        {"Fonts" : false},
        {"Function" : true},
        {"Flunk" : false}
    ]},
    '4': ['Amazon (company) was founded in which US state', 'Washington'],
    '5': ['Which country has the largest population in the world?','India'],
    '6': ['What city has the longest name in the world?', 'Bangkok'],
    '7': ['Which country owns greenland?', 'Denmark'],
    '8': ['What continent is the biggest?', 'Asia'],
    '9': ['What is the best-selling video game ever of all time?', 'Tetris'],
];

b.addEventListener('click', wrongAns);
c.addEventListener('click', wrongAns);
d.addEventListener('click', wrongAns);

a.addEventListener('click', checkCorrectAns);

function checkCorrectAns(event){
    const correctBtn = event.target;
    correctBtn.classList.remove('wrong');
    correctBtn.classList.add('correct');
    score++;
    console.log("score: "+ score);
    removeWrongListeners();
    next();
    correctBtn.removeEventListener('click', checkCorrectAns);
}

function wrongAns(event){
    const wrongBtn = event.target;
    wrongBtn.classList.add('wrong');
    wrong++;
    if(wrong === 1){ // only count the first wrong answer
        score--;
    }
    wrong = 0;
    wrongBtn.removeEventListener('click', wrongAns);
}

function removeWrongListeners() {
    // Remove event listeners for wrong answers
    buttons.forEach(button => {
        button.removeEventListener('click', wrongAns);
    });
}

function next(){
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next ->";  
    container.appendChild(nextBtn); 
    
    nextBtn.onclick = function () {
        showQuestion(questionNumber++);
        container.removeChild(nextBtn);
    };
}
function checkWrong(...arg){
    arg.forEach((element) => {
        element.addEventListener('click', wrongAns);
    });
    console.log("wrong: "+ wrong);
}

function remove(arg){
    //remove each of the answer color before moving on to the new question
    arg.forEach((element) => {
        document.getElementById(element).classList.remove('correct');
        document.getElementById(element).classList.remove('wrong');
    });
}


function showQuestion(questionNum){
    remove(['a', 'b', 'c', 'd']);
    if(questionNum > Object.keys(questionsAndAnswers).length - 1){
        title.innerText = `Your score is: ${score}`;
        container.removeChild(nextBtn);
    }
    title.innerText = questionsAndAnswers[questionNum][0];
    switch(questionNum){
    case 1:
        a.innerText = '1991';
        b.innerText = '1994';
        c.innerText = '1993';
        d.innerText = '1992';

        checkWrong(a,b,d);

        c.addEventListener('click', checkCorrectAns);
        break;
        
    case 2:
        a.innerText = 'Find';
        b.innerText = 'Function';
        c.innerText = 'Font';
        d.innerText = 'Flunk';

        checkWrong(a,c,d);

        b.addEventListener('click', checkCorrectAns);
        break;

    case 3:
        a.innerText = 'Tim Berners-Lee';
        b.innerText = 'Katherine Johnson';
        c.innerText = 'Margaret Hamilton';
        d.innerText = 'Ada Lovelace';

        checkWrong(a,b,c);

        d.addEventListener('click', checkCorrectAns);
        break;

    case 4:
        a.innerText = 'Washington';
        b.innerText = 'New York';
        c.innerText = 'Texas';
        d.innerText = 'California';

        checkWrong(b,c,d);

        a.addEventListener('click', checkCorrectAns);
        break;

    case 5:
        a.innerText = 'China';
        b.innerText = 'India';
        c.innerText = 'United States';
        d.innerText = 'Indonesia';

        checkWrong(a,c,d);

        b.addEventListener('click', checkCorrectAns);
        break;

    case 6:
        a.innerText = 'Andorra La Vella';
        b.innerText = 'Llanfairpwll';
        c.innerText = 'Bangkok';
        d.innerText = 'Taumata';

        checkWrong(a,b,d);

        c.addEventListener('click', checkCorrectAns);
        break;

    case 7:
        a.innerText = 'Denmark';
        b.innerText = 'Finland';
        c.innerText = 'Sweden';
        d.innerText = 'Netherlands';

        checkWrong(b,c,d);

        a.addEventListener('click', checkCorrectAns);
        break;
    case 8:
        a.innerText = 'South America';
        b.innerText = 'Africa';
        c.innerText = 'North America';
        d.innerText = 'Asia';

        checkWrong(a,b,c);

        d.addEventListener('click', checkCorrectAns);
        break;
    case 9:
        a.innerText = 'Wii Sports';
        b.innerText = 'Tetris';
        c.innerText = 'Grand Theft Auto V';
        d.innerText = 'Minecraft';

        checkWrong(a,c,d);

        b.addEventListener('click', checkCorrectAns);
        break;
    }
}