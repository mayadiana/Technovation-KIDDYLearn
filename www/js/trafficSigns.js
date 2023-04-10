// Questions will be asked
const Questions = [
    {
        id: 0,
        question: "Semnul care indică că urmează o curbă la dreapta este:",
        answers: [
            { isCorrect: false, src: "../../assets/street/interzis-dreapta.png" },
            { isCorrect: false, src: "../../assets/street/pericol.png" },
            { isCorrect: true, src: "../../assets/street/semn-dreapta.png" },
            { isCorrect: false, src: "../../assets/street/ceva.png" },
        ]
    },
    {
        id: 1,
        question: "Indicatorul care presemnalizează o trecere de pietoni este:",
        answers: [
            { isCorrect: true, src: "../../assets/street/trecere-pietoni.png" },
            { isCorrect: false, src: "../../assets/street/pericol.png" },
            { isCorrect: false, src: "../../assets/street/masina.png" },
            { isCorrect: false, src: "../../assets/street/pieton.png" },
        ]
    },
    {
        id: 2,
        question: "Semnul care ne arată că urmează denivelari este:",
        answers: [
            { isCorrect: false, src: "../../assets/street/semafor.png" },
            { isCorrect: false, src: "../../assets/street/interzis.png" },
            { isCorrect: false, src: "../../assets/street/ambele-sensuri.png" },
            { isCorrect: true, src: "../../assets/street/denivelari.png" },
        ]
    },
    {
        id: 3,
        question: "Indicatorul care indică că urmează un sens giratoriu este:",
        answers: [
            { isCorrect: false, src: "../../assets/street/sageata-dreapta.png" },
            { isCorrect: true, src: "../../assets/street/sens-giratoriu.png" },
            { isCorrect: false, src: "../../assets/street/triunghi-intors.png" },
            { isCorrect: false, src: "../../assets/street/cerc.png" },
        ]
    },
    {
        id: 4,
        question: "Semnul care indică că accesul biciclistilor este interzis este:",
        answers: [
            { isCorrect: true, src: "../../assets/street/bicicleta1.png" },
            { isCorrect: false, src: "../../assets/street/bicicleta2.png" },
            { isCorrect: false, src: "../../assets/street/bicicleta3.png" },
            { isCorrect: false, src: "../../assets/street/bicicleta4.png" },
        ]
    },
];

// Iterate
function bindNextPage() {

    let nextActiveItem = document.querySelector(".carousel-item.active").nextElementSibling;
    let ulItem = nextActiveItem.querySelector("ul");
    let pageNo = Number.parseInt(ulItem.dataset.item);
    let pageData = Questions.find(q => q.id === pageNo);

    console.info(`Binding page ${pageNo}.`);

    let questionHeader = ulItem.querySelector(".question-container");
    questionHeader.innerText = pageData.question;

    let optionContainer = ulItem.querySelector(".option-container");
    optionContainer.innerHTML = "";
    for (let option of pageData.answers) {
        let buttonNode = createButtonNode(option, pageData);
        optionContainer.appendChild(buttonNode);
    }

    // Getting the result display section
    let result = ulItem.querySelector(".result");
    result.innerText = "";

    // setup the evaluate button
    let evaluateButton = ulItem.querySelector(".navigation > .evaluate");
    evaluateButton.addEventListener("click", () => {
        if (pageData.selected) {
            result.innerHTML = "Corect";
            result.style.color = "green";
            pageData.selectedButton.className = "option option-green";
            setTimeout(() => {
                bindNextPage();
                $("#carousel").carousel("next");
            }, 700);
        } else {
            result.innerHTML = "Greșit";
            result.style.color = "red";
            pageData.selectedButton.className = "option option-red";
        }
    });
}

const nextButtons = document.querySelectorAll('.carousel-control-next');
for (let nextButton of nextButtons) {
    nextButton.addEventListener("click", () => {
        bindNextPage();
    });
}

function createButtonNode(option, pageData) {
    let buttonNode = document.createElement("button");
    buttonNode.className = "option";
    buttonNode.addEventListener("click", () => {
        pageData.selected = option.isCorrect;
        if(pageData.selectedButton) {
            pageData.selectedButton.className = "option";
        }
        pageData.selectedButton = buttonNode;
    })

    let imgNode = createImageNode(option);
    buttonNode.appendChild(imgNode);
    return buttonNode;
}

function createImageNode(option) {
    let imgNode = document.createElement("img");
    imgNode.className = "option";
    imgNode.setAttribute("type", "image");
    imgNode.setAttribute("src", option.src);
    return imgNode;
}
