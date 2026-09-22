const students = [];

students.push(
    {
        name: "Heba",
        score: 100
    },
    {
        name: "Tala",
        score: 93
    }
);


function getGrade(score)
{
    if(score >= 90)
        return "Excellent";

    else if(score >= 75)
        return "Good";

    else
        return "Needs Improvement";
}


const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("searchInput");
const tbody = document.getElementById("tbody");


addBtn.addEventListener("click", function()
{

    const name = nameInput.value;
    const score = Number(scoreInput.value);


    if(name === "")
    {
        alert("Please enter student name");
        return;
    }


    if(score < 0 || score > 100 || scoreInput.value === "")
    {
        alert("Score must be between 0 and 100");
        return;
    }


    students.push(
        {
            name: name,
            score: score
        }
    );


    nameInput.value = "";
    scoreInput.value = "";

    render();

});


searchInput.addEventListener("input", function()
{
    render();
});


clearBtn.addEventListener("click", function()
{
    students.length = 0;

    render();
});


function render()
{
    tbody.innerHTML = "";


    const searchValue = searchInput.value.toLowerCase();


    for(let i = 0; i < students.length; i++)
    {

        const std = students[i];


        if(!std.name.toLowerCase().includes(searchValue))
        {
            continue;
        }


        const tr = document.createElement("tr");


        const tdName = document.createElement("td");
        tdName.textContent = std.name;


        const tdScore = document.createElement("td");
        tdScore.textContent = std.score;


        const tdGrade = document.createElement("td");
        tdGrade.textContent = getGrade(std.score);


        const tdAction = document.createElement("td");


        const removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";

        removeBtn.className = "removeBtn";


        removeBtn.addEventListener("click", function()
        {
            students.splice(i, 1);

            render();
        });


        tdAction.appendChild(removeBtn);


        tr.appendChild(tdName);
        tr.appendChild(tdScore);
        tr.appendChild(tdGrade);
        tr.appendChild(tdAction);


        tbody.appendChild(tr);

    }

}


render();