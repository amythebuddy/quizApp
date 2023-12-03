const container = document.getElementById("container");
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
let questionNumber = 1;
let score = 0;

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

b.addEventListener('click', wrongAns);
c.addEventListener('click', wrongAns);
d.addEventListener('click', wrongAns);

a.addEventListener('click', checkCorrectAns);

function checkCorrectAns(event){
    const clickedBtn = event.target;
    clickedBtn.classList.remove('wrong');
    clickedBtn.classList.add('correct');
    next();
    clickedBtn.removeEventListener('click', checkCorrectAns);
}

function wrongAns(event){
    const wrongBtn = event.target;
    wrongBtn.classList.add('wrong');
    wrongBtn.removeEventListener('click', wrongAns);
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

function showQuestion(questionNum){
    remove(['a', 'b', 'c', 'd']);
    switch(questionNum){
    case 1:
        a.innerText = '1991';
        b.innerText = '1994';
        c.innerText = '1993';
        d.innerText = '1992';

        a.addEventListener('click', wrongAns);
        b.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        c.addEventListener('click', checkCorrectAns);
        break;
        
    case 2:
        a.innerText = 'Find';
        b.innerText = 'Function';
        c.innerText = 'Font';
        d.innerText = 'Flunk';

        a.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        b.addEventListener('click', checkCorrectAns);
        break;

    case 3:
        a.innerText = 'Tim Berners-Lee';
        b.innerText = 'Katherine Johnson';
        c.innerText = 'Margaret Hamilton';
        d.innerText = 'Ada Lovelace';

        a.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);
        b.addEventListener('click', wrongAns);

        d.addEventListener('click', checkCorrectAns);
        break;

    case 4:
        a.innerText = 'Washington';
        b.innerText = 'New York';
        c.innerText = 'Texas';
        d.innerText = 'California';


        a.addEventListener('click', checkCorrectAns);
        break;

    case 5:
        a.innerText = 'China';
        b.innerText = 'India';
        c.innerText = 'United States';
        d.innerText = 'Indonesia';

        a.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        b.addEventListener('click', checkCorrectAns);
        break;

    case 6:
        a.innerText = 'Andorra La Vella';
        b.innerText = 'Llanfairpwll';
        c.innerText = 'Bangkok';
        d.innerText = 'Taumata';

        a.addEventListener('click', wrongAns);
        b.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        c.addEventListener('click', checkCorrectAns);
        break;

    case 7:
        a.innerText = 'Denmark';
        b.innerText = 'Finland';
        c.innerText = 'Sweden';
        d.innerText = 'Netherlands';

        b.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        a.addEventListener('click', checkCorrectAns);
        break;
    case 8:
        a.innerText = 'South America';
        b.innerText = 'Africa';
        c.innerText = 'North America';
        d.innerText = 'Asia';

        a.addEventListener('click', wrongAns);
        b.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);

        d.addEventListener('click', checkCorrectAns);
        break;
    case 9:
        a.innerText = 'Wii Sports';
        b.innerText = 'Tetris';
        c.innerText = 'Grand Theft Auto V';
        d.innerText = 'Minecraft';

        a.addEventListener('click', wrongAns);
        c.addEventListener('click', wrongAns);
        d.addEventListener('click', wrongAns);

        b.addEventListener('click', checkCorrectAns);
        break;
    }
}

function remove(arg){
    arg.forEach((element) => {
        document.getElementById(element).classList.remove('correct');
        document.getElementById(element).classList.remove('wrong');
    });
}