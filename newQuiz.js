const container = document.getElementById("container");
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
let questionNumber = 0;
let score = 0;
let wrong = 0;

const questionsAndAnswers = [
    {
        question: 'What is the capital of Vietnam?',
        options: [
            {"Ha Noi" : true},
            {"Ho Chi Minh City" : false},
            {"Vientiane" : false},
            {"Sai Gon" : false}
        ]
    },
    {
        question: 'In what year was the internet opened to the public?',
        options: [
            {"1991" : false},
            {"1992" : false},
            {"1993" : true},
            {"1994" : false}
        ]
    },
    {
        question: 'What is the meaning of "fn" on your computer keyboard?',
        options: [
            {"Find" : false},
            {"Function" : true},
            {"Fonts" : false},
            {"Flunk" : false}
        ]
    },
    {
        question: 'Who was the first computer programmer?',
        options: [
            {"Tim Berners-Lee" : false},
            {"Katherine Johnson" : false},
            {"Margaret Hamilton" : false},
            {"Ada Lovelace" : true}
        ]
    }, 
    {
        question: 'Amazon (company) was founded in which US state',
        options: [
            {"Washington" : true},
            {"Califronia" : false},
            {"New York" : false},
            {"Texas" : false}
        ]
    }, 
    {
        question: 'Which country has the largest population in the world?',
        options: [
            {"China" : false},
            {"India" : true},
            {"United States" : false},
            {"Indonesia" : false}
        ]
    }, 
    {
        question : 'What city has the longest name in the world?',
        options: [
            {"Andorra La Vella" : false},
            {"Llanfairpwll" : false},
            {"Bangkok" : true},
            {"Taumata" : false}
        ]
    }, 
    {
        question: 'Which country owns Greenland?',
        options: [
            {"Denmark" : true},
            {"Sweden" : false},
            {"Finland" : false},
            {"Netherlands" : false}
        ]
    }, 
    {
        question: 'What continent is the biggest?',
        options: [
            {"North America" : false},
            {"New York" : false},
            {"Africa" : false},
            {"Asia" : true}
        ]
    }, 
    {
        question: 'What is the best-selling video game ever of all time?',
        options: [
            {"Wii Sports" : false},
            {"Tetris" : true},
            {"Minecraft" : false},
            {"Grand Theft Auto V" : false}
        ]
    }
];

function loadedQuestion(questionNumber){
    let questionInfo = questionsAndAnswers[questionNumber];
    title.innerText = questionInfo.question;
    for(let i = 0; i < questionsAndAnswers[0].options.length; i++){
        buttons[i].innerText = Object.keys(questionInfo.options[i])[0];
        buttons[i].onclick = function(){
            if(Object.values(questionInfo.options[i])[0] === true){
                buttons[i].classList.add('correct');
                let nextBtn = document.createElement("button");
                nextBtn.innerText = "Next ->";  
                container.appendChild(nextBtn); 

                nextBtn.onclick = function () {
                    loadedQuestion(++questionNumber);
                    container.removeChild(nextBtn);
                };
            } else {
                buttons[i].classList.add('wrong');
            }
        }
    }
}

loadedQuestion(questionNumber);