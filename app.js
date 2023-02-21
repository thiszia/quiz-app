var quizData = [
    {
      question: "What is JavaScript?",
      a: "client side",
      b: "html",
      c: "server lang",
      d: "machine languge",
      correct: "a",
    },
    {
      question: "What is the full meaning of CSS?",
      a: "Cascading Style Server",
      b: "Cascade Styling Surface",
      c: "Cascading Surface Sheet",
      d: "Cascading Style Sheets",
      correct: "d",
    },
    {
      question: "What is the most popular programming language in 2022?",
      a: "Java",
      b: "PHP",
      c: "html",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "Which company developed JavaScript??",
      a: "Netscape .",
      b: "goolge",
      c: "mete company",
      d: "spice X",
      correct: "a",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Stylesheet",
      c: "JavaScript Object Notation",
      d: "Hyper Markup Language",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1998",
      b: "1993",
      c: "1995",
      d: "2000",
      correct: "c",
    },
    {
      question: "All these are Server Side Language except?",
      a: "HTML",
      b: "PHP",
      c: "Node.js",
      d: "Ruby on rails",
      correct: "a",
    },
    {
      question: "All these are JavaScript Framework except?",
      a: "Laravel",
      b: "React.js",
      c: "Node.js",
      d: "Vue.js",
      correct: "a",
    }
  ];

  var currInd = 0;
  var score = 0;
  var selectedAnswer = "";

  var eleQues = document.getElementById("question")
  var eleA = document.getElementById("a_text");
  var eleB = document.getElementById("b_text");
  var eleC = document.getElementById("c_text");
  var eleD = document.getElementById("d_text");
  var eleS = document.getElementById("s_text");
  var allRadioEle = document.getElementsByTagName("input")

  function displayData(){
    var currData = quizData[currInd];
    eleQues.innerHTML = currData.question;
    eleA.innerHTML = currData.a
    eleB.innerHTML = currData.b
    eleC.innerHTML = currData.c
    eleD.innerHTML = currData.d
  }

  function getSelectedRadio(){
    for (var i = 0; i < allRadioEle.length;i++){
        if(allRadioEle[i].checked){
            selectedAnswer = allRadioEle[i].id
        }
    }
    return selectedAnswer;
  }

  function getUnselectedRadio(){
    for (var i = 0; i < allRadioEle.length;i++){
      allRadioEle[i].checked = false;
    }
  }

  function next(){
    
    var answer = getSelectedRadio();
    if(answer == quizData[currInd].correct){
      score++;
      eleS.innerHTML = score;
    }
    currInd++;
    getUnselectedRadio();
    if(currInd < quizData.length){
        displayData();
    }
    else{
        var div = document.getElementById("mainDiv");
        div.innerHTML = `<h2>You answer ${score} out of ${quizData.length} correctly</h2>
        <button onclick="location.reload()">Retake Quiz!</button>`;

        frb.database().ref('name').set(userName.value)
        frb.database().ref('score').set(score)

    }
  }
