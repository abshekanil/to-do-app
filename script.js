const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("list-container");
let countDisplay = document.getElementById("todoCount");
let highPriorityDisplay = document.getElementById("highPriorityNum");
let count = 0;
let highPriorityCount = 0;
let completed = document.getElementById("completeNum");
let completeCount = 0;

const taskDate = document.getElementById("taskDate");
const priority = document.getElementById("priority");



addBtn.addEventListener("click", function(){
    if(taskInput.value === "")
    {
        alert("Enter task!!!");
    }
    else{
        count++;
        let liTag = document.createElement("li");
        liTag.innerHTML = taskInput.value;
        listContainer.appendChild(liTag);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liTag.appendChild(span);
        countDisplay.innerHTML = count;
        if(priority.value === "high")
        {
            highPriorityCount++;
        }
        highPriorityDisplay.innerHTML = highPriorityCount + " of " + count;
        
        
    }
    taskInput.value = "";
    taskDate.value = "";
    priority.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
        if(e.target.classList.contains("checked"))
        {
            completeCount++;
            completed.innerHTML = completeCount;
        }
       
       
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentNode.remove();
        count--
        countDisplay.innerHTML = count;
        
            highPriorityCount--;
               
    
        completeCount--;
        completed.innerHTML = completeCount;
       
        highPriorityDisplay.innerHTML = highPriorityCount + " of " + count;

        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("countNumber", count.toString());
    
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    count = parseInt(localStorage.getItem("countNumber")) || 0;
    countDisplay.innerHTML = count;
    

}

showTask();
