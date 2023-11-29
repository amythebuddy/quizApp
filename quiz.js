const container = document.getElementById("container");
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
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
        option1.innerText = '1991';
        option2.innerText = '1994';
        option3.innerText = '1993';
        option4.innerText = '1992';
        break;
        
    case 2:
        option1.innerText = 'Find';
        option2.innerText = 'Function';
        option3.innerText = 'Font';
        option4.innerText = 'Flunk';
        break;

    case 3:
        option1.innerText = 'Tim Berners-Lee';
        option2.innerText = 'Katherine Johnson';
        option3.innerText = 'Margaret Hamilton';
        option4.innerText = 'Ada Lovelace';
        break;

    case 4:
        option1.innerText = 'Washington';
        option2.innerText = 'New York';
        option3.innerText = 'Texas';
        option4.innerText = 'California';
        break;

    case 5:
        option1.innerText = 'China';
        option2.innerText = 'India';
        option3.innerText = 'United States';
        option4.innerText = 'Indonesia';
        break;

    case 6:
        option1.innerText = 'Andorra La Vella';
        option2.innerText = 'Llanfairpwll';
        option3.innerText = 'Bangkok';
        option4.innerText = 'Taumata';
        break;

    case 7:
        option1.innerText = 'Denmark';
        option2.innerText = 'Finland';
        option3.innerText = 'Sweden';
        option4.innerText = 'Netherlands';
        break;
    case 8:
        option1.innerText = 'South America';
        option2.innerText = 'Africa';
        option3.innerText = 'North America';
        option4.innerText = 'Asia';
        break;
    case 9:
        option1.innerText = 'Wii Sports';
        option2.innerText = 'Tetris';
        option3.innerText = 'Grand Theft Auto V';
        option4.innerText = 'Minecraft';
        break;
    }
}
function checkAnswer(){

}
function finished(){
    
}