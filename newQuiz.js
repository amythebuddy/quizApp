// declare all of the necessary variables
const container = document.getElementById("container");
const funFact = document.getElementById('funFact');
const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
let questionNumber = 0;
let score = 0;

const questionsAndAnswers = [
    {
        question: 'What is the capital of Vietnam?',
        options: [
            {"Hanoi" : true,
            fact: 'Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.'},
            {"Ho Chi Minh City" : false,
            fact: 'Ho Chi Minh City is the largest city, business and financial hub of Vietnam, but it is not the capital of Vietnam. There are plenty of museums showcasing the country\'s dark wartime history and classic colonial architecture built by former French rulers.'},
            {"Vientiane" : false,
            fact: "Vientiane, Laos' national capital, mixes French-colonial architecture with Buddhist temples such as the golden, 16th-century Pha That Luang, which is a national symbol."},
            {"Saigon" : false,
            fact: "Saigon's name was changed to Ho Chi Minh City, to honor the revolutionary leader who had declared independence back in 1945."}
        ]
    },
    {
        question: 'In what year was the internet opened to the public?',
        options: [
            {"1989" : false,
            fact: "The World Wide Web is invented but not open to the public yet."},
            {"1992" : false,
            fact: "Marc Andreesen and Jim Clark popularize web surfing considerably with the release of the Netscape web browser."},
            {"1993" : true,
            fact: 'On April 30, 1993, the World Wide Web was released into the public domain. It revolutionized the internet and allowed users to create websites filled with graphics, audio and hyperlinks.'},
            {"2005" : false,
            fact: "YouTube founded, rapidly becoming the major video sharing site on the Internet."}
        ]
    },
    {
        question: 'What is the meaning of "fn" on your computer keyboard?',
        options: [
            {"Find" : false,
            fact: ""},
            {"Function" : true,
            fact: "The Fn key is used to control hardware functions such as screen brightness and speaker volume on laptops."},
            {"Fonts" : false,
            fact: ""},
            {"Flunk" : false,
            fact: ""}
        ]
    },
    {
        question: 'Who was the first computer programmer?',
        options: [
            {"Tim Berners-Lee" : false,
            fact: "The inventor of the World Wide Web and one of Time Magazine's '100 Most Important People of the 20th Century', Tim Berners-Lee is a scientist and academic whose visionary and innovative work has transformed almost every aspect of our lives."},
            {"Katherine Johnson" : false,
            fact: "Katherine figured out the paths for the spacecraft to orbit (go around) Earth and to land on the Moon. When Katherine began working for NASA, African American people were treated as if they were not equal. She led the way in showing what women and African American people could achieve"},
            {"Margaret Hamilton" : false,
            fact: "Margaret Hamilton, an American computer scientist who was one of the first computer software programmers. She helped write the computer code for the command and lunar modules used on the Apollo missions to the Moon"},
            {"Ada Lovelace" : true,
            fact: 'Ada Lovelace, an English mathematician and writer, is referred to as “the first programmer” because she helped revolutionize the trajectory of the computer industry and is considered the first person to recognize that computers had a much larger potential than mathematical calculation.'}
        ]
    }, 
    {
        question: 'Amazon (company) was founded in which US state?',
        options: [
            {"Washington" : true,
            fact: "U.S. Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994."},
            {"Califronia" : false,
            fact: "Steve Jobs' parents' home on Crist Drive in Los Altos, California, where Apple started its operation. Initial work took place in his bedroom and later moved to the home's garage."},
            {"New York" : false,
            fact: "Charles Pfizer and Charles Erhart founded Charles Pfizer & Company, also known as Pfizer, in a red brick building in Brooklyn, New York."},
            {"Texas" : false,
            fact: "The company, first named PC's Limited, later named Dell, was founded in 1984 by American Michael Dell in Austin, Texas."}
        ]
    }, 
    {
        question: 'Which country has the largest population in the world?',
        options: [
            {"China" : false,
            fact: "China 2023 population is estimated at 1,425,671,352 people at mid year."},
            {"India" : true,
            fact: "According to the UN estimates, India has overtaken China in having the largest population in the world with population of 1,425,775,850 at the end of April 2023."},
            {"United States" : false,
            fact: "334,233,854 people"},
            {"Indonesia" : false,
            fact: "277,534,122"}
        ]
    }, 
    {
        question : 'What city has the longest name in the world?',
        options: [
            {"Andorra La Vella" : false,
            fact: "Andorra la Vella is the capital of Andorra, in the Pyrenees mountains between France and Spain"},
            {"Llanfairpwll" : false,
            fact: "Llanfairpwll, or Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch,\n is a large village and community on Anglesey, an island in Wales."},
            {"Bangkok" : true,
            fact: "The full name of Bangkok is Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Yuthaya Mahadilok Phop Noppharat Ratcha-thani Burirom Udomratchaniwet Mahasathan Amon Phiman Awatan Sathit Sakkathattiya Witsanukam Prasit."},
            {"Taumata" : false,
            fact: "Taumata­whakatangihanga­koauau­o­tamatea­turi­pukaka­piki­maunga­horo­nuku­pokai­whenua­ki­tana­tahu \n is a hill near Pōrangahau, south of Waipukurau in southern Hawke's Bay, New Zealand"}
        ]
    }, 
    {
        question: 'Which country owns Greenland?',
        options: [
            {"Denmark" : true,
            fact: "Although Greenland remains part of the Kingdom of Denmark, the island's home-rule government is responsible for most domestic affairs."},
            {"Sweden" : false,
            fact: "Fun fact: The Swedish passport is one of the best passports in the world, ranking in 3 of the most powerful passport in the world."},
            {"Finland" : false,
            fact: "Fun fact: The mobile gaming sensation Angry Birds began life in Finland and was founded by students in 2003."},
            {"Netherlands" : false,
            fact: "Fun fact: The Netherlands is the world’s biggest flower exporter."}
        ]
    }, 
    {
        question: 'What continent is the biggest?',
        options: [
            {"North America" : false,
            fact: "9,540,000 square miles (24,709,000 square km)"},
            {"South America" : false,
            fact: "6,890,000 square miles (17,840,000 square km)"},
            {"Africa" : false,
            fact: "11,724,000 square miles (30,365,000 square km)"},
            {"Asia" : true,
            fact: "17,226,200 square miles (44,614,000 square km), roughly one-third of the land surface of Earth."}
        ]
    }, 
    {
        question: 'What is the best-selling video game ever of all time?',
        options: [
            {"Wii Sports" : false,
            fact: " 83 million copies sold"},
            {"Tetris" : true,
            fact: "520 million copies sold"},
            {"Minecraft" : false,
            fact: "300 million+ copies sold"},
            {"Grand Theft Auto V" : false,
            fact: "185 million+ copies sold"}
        ]
    }
];

function loadedQuestion(questionNumber){
    //showing what question we are on
    let questionInfo = questionsAndAnswers[questionNumber];
    
    // if the question number reaches 10 then show the score
    // else continue with the question
    if(questionNumber > Object.keys(questionsAndAnswers).length - 1){
        title.classList.add('finished');
        title.innerText = `You got ${score}/10!`;
        //remove all the button
        buttons.forEach((button) => {
            button.remove();
        });
        // stop all of the below function running
        return;
    } else {
        title.innerText = questionInfo.question;
    }

    let correctClicked = false; // for the next button to appear only once
    let correctAnswer = false // for the score to add 1 point even when the correct button is clicked multiple times
    let wrongAnswer = false; // for the score to minus 1 point even when the wrong answer is clicked multiple times

    for(let i = 0; i < questionInfo.options.length; i++){
        // showing the answer on the button so the user can choose
        buttons[i].innerText = Object.keys(questionInfo.options[i])[0];

        // if the clicked button is correct, background color change to green and add 1 point
        buttons[i].onclick = function(){
            if(Object.values(questionInfo.options[i])[0] === true){
                buttons[i].classList.add('correct');

                //only count the correct answer once
                if(!correctAnswer) score++;
                
                correctAnswer = true;
                
                // if the correct answer is clicked, only 1 next button appear
                if(!correctClicked){
                    //create a next button
                    let nextBtn = document.createElement("button");
                    nextBtn.innerText = "Next ->";  
                    container.appendChild(nextBtn); 

                    correctClicked = true;

                    nextBtn.onclick = function () {
                        //remove each of the answer color before moving on to the new question
                        buttons.forEach((element) => {
                            element.classList.remove('correct');
                            element.classList.remove('wrong');
                        });
                        funFact.innerText = ""; // clear the fun fact section when go onto the next question
                        loadedQuestion(++questionNumber); // move onto the next question
                        nextBtn.remove(); // remove the next button when go onto the next question
                    }; 
                }
            } else {
                    buttons[i].classList.add('wrong');
                    // only count the first wrong answer and the correct answer is not clicked
                    if(!wrongAnswer && !correctAnswer){
                        score--;
                    }
                    wrongAnswer = true;
            }
            console.log(score);
            // add the fact to the funFact section
            funFact.innerText = Object.values(questionInfo.options[i])[1];
        }
    }
    
}


loadedQuestion(questionNumber);