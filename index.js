const addBtn = document.getElementById("addBtn")
const list = document.getElementById("listOfToDo")
list.style.listStyleType = "none";
list.style.paddingLeft = "0";

addBtn.onclick = () => {
    const myInput = document.getElementById("myInput")
    myInput.classList.add("task")
    const taskText = myInput.value.trim()
    
    if (taskText === "") {
        alert("You must input a task")
    } else{
        let newTask = document.createElement("li")
        
        const checkBox = addCheckBox(newTask)  
        newTask.appendChild(checkBox)

        let taskName = document.createElement("span")
        taskName.textContent = taskText
        newTask.appendChild(taskName)


        const deleteBtn = addRemoveBtn(newTask)
        newTask.appendChild(deleteBtn)

        
        list.appendChild(newTask)
        myInput.value = ''
    }
}

function addRemoveBtn(taskItem){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.onclick = () =>{
        taskItem.remove()
    }
    return deleteBtn;
    
}

function addCheckBox(taskItem){
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    checkBox.classList.add("checkBox")
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            taskItem.style.textDecoration = "line-through"
        }else{
            taskItem.style.textDecoration = "none"
            taskItem.style.opacity = "1"
        }
    })

    return checkBox
}