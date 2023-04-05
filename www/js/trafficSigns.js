// Questions will be asked
const Questions = [{
    id: 0,
    question: "Semnul care indică că urmează o curbă la dreapta este:",
    answers: [{ isCorrect: false },
    { isCorrect: false },
    { isCorrect: true },
    { isCorrect: false }
    ]
},
{
    id: 1,
    question: "Indicatorul care presemnalizează o trecere de pietoni este:",
    answers: [{ isCorrect: true, isSelected: true },
    { isCorrect: false },
    { isCorrect: false },
    { isCorrect: false }
    ]

},
{
    id: 2,
    question: "Semnul care ne arată că urmează denivelari este:",
    answers: [{ isCorrect: false },
    { isCorrect: false },
    { isCorrect: false },
    { isCorrect: true }
    ]

},
{
    id: 3,
    question: "Indicatorul care indică că urmează un sens giratoriu este:",
    answers: [{ isCorrect: false },
    { isCorrect: true },
    { isCorrect: false },
    { isCorrect: false }
    ]

},
{
    id: 4,
    question: "Semnul care indică că accesul biciclistilor este interzis este:",
    answers: [{ isCorrect: true },
    { isCorrect: false },
    { isCorrect: false },
    { isCorrect: false }
    ]

},

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    let result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const q = document.getElementById("question");


    // Setting the question text
    q.innerText = Questions[id].question;

    // Getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    // Providing the true or false value to the options
    op1.value = Questions[id].answers[0].isCorrect;
    op2.value = Questions[id].answers[1].isCorrect;
    op3.value = Questions[id].answers[2].isCorrect;
    op4.value = Questions[id].answers[3].isCorrect;

    let selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Corect";
            result[0].style.color = "green";
            $("#carousel").carousel("next");

        } else {
            result[0].innerHTML = "Greșit";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

let id = 0;
const next = document.getElementsByClassName('carousel-control-next');
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
})
