import { ProjectList, Task } from "./projects.js";

function ScreenController() {
    const projectList = ProjectList();

    const updateScreen = () => {
        const list = projectList.getProjects();
        const ul = document.querySelector("#list");
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");
            const taskButton = document.createElement("button");
            const span = document.createElement("span");

            li.classList.add("project-li");

            li.appendChild(deleteButton);
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");

            li.appendChild(taskButton);
            taskButton.textContent = "Add Task";
            taskButton.classList.add("task-button");

            li.appendChild(span);
            span.textContent = list[i].name;

            ul.appendChild(li);
            if (list[i].tasks.length > 0) {
                const ulTask = document.createElement("ul");
                ulTask.classList.add("task-ul");
                for (let j = 0; j < list[i].tasks.length; j++) {
                    const liTask = document.createElement("li");
                    const deleteTaskButton = document.createElement("button");
                    const span = document.createElement("span");

                    liTask.classList.add("task-li");

                    liTask.appendChild(deleteTaskButton);
                    deleteTaskButton.textContent = "Delete";
                    deleteTaskButton.classList.add("delete-button");

                    liTask.appendChild(span);
                    span.textContent = list[i].tasks[j].name;

                    ulTask.appendChild(liTask);
                }
                li.appendChild(ulTask);
            }
        }
    }

    const resetScreen = () => {
        const ul = document.querySelector("#list");
        ul.remove();
        const newUl = document.createElement("ul");
        newUl.setAttribute("id", "list");
        const body = document.querySelector("body");
        body.appendChild(newUl);
    }

    const addButtons = () => {
        const liList = document.querySelectorAll("li");
        liList.forEach((element) => {
            element.querySelector(".delete-button").addEventListener("click", () => {
                projectList.removeProject(element.querySelector("span").textContent);
                console.log(projectList.printProjects());
                
                const parent = element.parentNode;
                console.log(parent, parent.childNodes.length);
                if (parent.classList.contains("task-ul") && parent.childNodes.length == 1) {
                    parent.remove();
                } else {
                    element.remove();
                }
            })


            if (element.classList.contains("project-li")) {
                element.querySelector(".task-button").addEventListener("click", () => {
                    addTaskDialog.showModal()
    
                    // add dataset value to identify which project
                    const projectName = element.querySelector("span").textContent;
                    addTaskDialog.dataset.project = projectName;
    
                    // modify h3 title to show the correct project name
                    addTaskDialog.querySelector("h3").textContent = `Add a task to ${projectName}`;
                })
            }
            
        })
    }

    const addProjectButton = document.querySelector("#add-project");

    // adds operations to the add project dialog
    const addProjectDialog = document.querySelector("#add-project-dialog");
    addProjectButton.addEventListener("click", () => {
        addProjectDialog.showModal();
    })

    const closeProjectDialog = addProjectDialog.querySelector("#close-project-dialog");
    closeProjectDialog.addEventListener("click", () => {
        addProjectDialog.close();
    })

    const submitProjectDialog = addProjectDialog.querySelector("#submit-project-dialog");
    submitProjectDialog.addEventListener("click", () => {
        const title = addProjectDialog.querySelector("#project-title").value;
        const date = addProjectDialog.querySelector("#project-deadline").value;
        const description = addProjectDialog.querySelector("#project-description").value;

        projectList.addProject(new projectList.Project(title, [], date, description));
        
        addProjectDialog.close();
        resetScreen();
        updateScreen();
        addButtons();
    })

    // adds operation to add task dialog
    const addTaskDialog = document.querySelector("#add-task-dialog");
    const closeTaskDialog = addTaskDialog.querySelector("#close-task-dialog");
    closeTaskDialog.addEventListener("click", () => {
        addTaskDialog.close();
    })

    const submitTaskDialog = addTaskDialog.querySelector("#submit-task-dialog");
    submitTaskDialog.addEventListener("click", () => {
        const title = addTaskDialog.querySelector("#task-title").value;
        const date = addTaskDialog.querySelector("#task-deadline").value;
        const description = addTaskDialog.querySelector("#task-description").value;
        const projectName = addTaskDialog.dataset.project;

        projectList.addTask(projectList.getIndexByName(projectName), new Task(title, date, description));
        
        addTaskDialog.close();
        resetScreen();
        updateScreen();
        addButtons();
    })
}

ScreenController();