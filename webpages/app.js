const select = document.getElementById("projects-list");
const newProjectBtn = document.getElementById("new-project");
const addProjectBtn = document.getElementById("add-project");
const back = document.getElementsByClassName("back")[0];
const page1 = document.getElementsByClassName("index-div")[0];
const page2 = document.getElementsByClassName("add-project-div")[0];

back.addEventListener("click", () => {
    page2.style.display = "none"
    page1.style.display = "flex"
});

newProjectBtn.addEventListener("click", e =>{
    page1.style.display = "none"
    page2.style.display = "flex"
    
});

document.getElementsByTagName("form")[0].addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name");
    const matric = document.getElementById("matric");
    const path = document.getElementById("path");

    if(name.value == "" || matric.value == "" || path.value == ""){
        console.error("You should fill all the boxes!");
        return 0;
    }

    const formData = new FormData(e.target);

    fetch("", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        console.log(Array.from(result));
        Array.from(result).forEach(option => {
            select.insertAdjacentHTML("beforeend",
            `<option value="${option.name}">${option.name}</option>`);
        });
        page2.style.display = "none"
        page1.style.display = "flex"
    })
    .catch(err => console.log(err.message));
});