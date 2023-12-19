//Question bank
var questionBank= [
    {
        question : 'Berilgan so‘zlar ichidan mantiqan ortiqchasini belgilang',
        option : ['Parij','London','Nyu-York','Pekin'],
        answer : 'Nyu-York'
    },
    {
        question : 'Agar bugun shanba bo‘lsa, 29 kundan keyin xaftaning qaysi kuni bo‘ladi?',
        option : ['Juma','Shanba','Yakshanba','Dushanba'],
        answer : 'Juma'
    },
    {
        question : "INVOKEVIRTUAL-ni bajarish uchun kompyuter registri protsedura kod maydonida nechinchi baytni ko'rsatishi kerak.",
        option : ['Ikkinchi','Uchinchi','Beshinchi','Birinchi'],
        answer : 'Beshinchi'
    },
    {
        question : "... ramkalar va operand steklarini aralashtirish mumkin. Nuqtalar o'rnini to'diring.",
        option : ['Oddiy',"Mahalliy o'zgaruvchan",'Keraksiz','Murakkab'],
        answer : "Mahalliy o'zgaruvchan"
    },
    {
        question : "IRETURN buyrug'ining teskarisini aniqlang.",
        option : ['NONIRETURN','NoIRETURN','IRETURN','INVOKEVIRTUAL'],
        answer : 'INVOKEVIRTUAL'
    },
    {
        question : "“Axborot erkinligi prinsiplari va kafolatlari to‘g‘risida”gi qonun moddadan iborat?",
        option : ['16','22','26','28'],
        answer : '16'
    },
    {
        question : "Adaptiv xavfsizlikda korporativ tarmoqdagi shubhali harakatlarni baholash jarayoni-bu:",
        option : ['Himoyalashni tahlillash','Xavf -xatarni baholash','Hujumlarni aniqlash','Zaifliklarni aniqlash'],
        answer : 'Hujumlarni aniqlash'
    },
    {
        question : "Aloqa kanallarida ma’lumotlarni himoyalash masalasini yechish usullarini nechta guruhi mavjud?",
        option : ['2ta','3ta','4ta','5ta'],
        answer : '3ta'
    },
    {
        question : "Autentifikatsiya faktorlari nechta?",
        option : ['2ta','3ta','4ta','5ta'],
        answer : '3ta'
    },
    {
        question : "Bajariluvchi fayllarga turli usullar bilan kiritiladi yoki fayl-egizaklarini yaratadi-bu:",
        option : ['Fayl viruslari','Yuklama viruslari','Tarmoq viruslari','Beziyon viruslar'],
        answer : 'Fayl viruslari'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Test.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Savol"+' '+(i+1)+' '+'dan'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();