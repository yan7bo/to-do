import { ProjectList, Task } from "./projects.js";
import "./style.css";

function ScreenController() {
    const projectList = ProjectList();

    const updateScreen = () => {
        const list = projectList.getProjects();
        const listContainer = document.querySelector("#list-container");
        for (let i = 0; i < list.length; i++) {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-div");
            listContainer.appendChild(projectDiv);

            const projectCheckbox = document.createElement("input");
            projectDiv.appendChild(projectCheckbox);
            projectCheckbox.setAttribute("type", "checkbox");
            projectCheckbox.classList.add("project-checkbox");

            const projectTextContainer = document.createElement("div");
            const projectTitleP = document.createElement("p");
            const projectDescriptionP = document.createElement("p");
            const projectDateP = document.createElement("p")

            projectDiv.appendChild(projectTextContainer);
            projectTextContainer.appendChild(projectTitleP);
            projectTextContainer.appendChild(projectDescriptionP);
            projectTextContainer.appendChild(projectDateP);

            projectTitleP.textContent = list[i].name;
            projectTitleP.classList.add("project-title");
            projectDescriptionP.textContent = list[i].description;
            projectDescriptionP.classList.add("project-description");
            projectDateP.textContent = list[i].date;
            projectDateP.classList.add("project-date");

            const projectButtonContainer = document.createElement("div");
            const projectDeleteButton = document.createElement("button");
            const projectTaskButton = document.createElement("button");

            projectDiv.appendChild(projectButtonContainer);
            projectButtonContainer.appendChild(projectDeleteButton);
            projectButtonContainer.appendChild(projectTaskButton);

            projectButtonContainer.classList.add("button-container")
            projectDeleteButton.textContent = "Delete";
            projectDeleteButton.classList.add("delete-button");
            projectTaskButton.textContent = "Add Task";
            projectTaskButton.classList.add("task-button");

            for (let j = 0; j < list[i].tasks.length; j++) {
                const taskDiv = document.createElement("div");
                taskDiv.classList.add("task-div");
                listContainer.appendChild(taskDiv);

                const taskCheckbox = document.createElement("input");
                taskDiv.appendChild(taskCheckbox);
                taskCheckbox.setAttribute("type", "checkbox");
                taskCheckbox.classList.add("task-checkbox");

                const taskTextContainer = document.createElement("div");
                const taskTitleP = document.createElement("p");
                const taskDescriptionP = document.createElement("p");
                const taskDateP = document.createElement("p")

                taskDiv.appendChild(taskTextContainer);
                taskTextContainer.appendChild(taskTitleP);
                taskTextContainer.appendChild(taskDescriptionP);
                taskTextContainer.appendChild(taskDateP);

                taskTitleP.textContent = list[i].tasks[j].name;
                taskTitleP.classList.add("task-title");
                taskDescriptionP.textContent = list[i].tasks[j].description;
                taskDescriptionP.classList.add("task-description");
                taskDateP.textContent = list[i].tasks[j].date;
                taskDateP.classList.add("task-date");

                const taskButtonContainer = document.createElement("div");
                const taskDeleteButton = document.createElement("button");

                taskDiv.appendChild(taskButtonContainer);
                taskButtonContainer.appendChild(taskDeleteButton);

                taskDeleteButton.textContent = "Delete";
                taskDeleteButton.classList.add("delete-button");
            }
        }
    }

    const resetScreen = () => {
        const listContainer = document.querySelector("#list-container");
        listContainer.remove();
        const newContainer = document.createElement("div");
        newContainer.setAttribute("id", "list-container");
        const body = document.querySelector("body");
        body.appendChild(newContainer);
    }

    const addButtons = () => {
        const divList = document.querySelectorAll(".project-div");
        divList.forEach((element) => {
            element.querySelector(".delete-button").addEventListener("click", () => {
                projectList.removeProject(element.querySelector(".project-title").textContent);
                
                /*
                const parent = element.parentNode;
                console.log(parent, parent.childNodes.length);
                if (parent.classList.contains("task-ul") && parent.childNodes.length == 1) {
                    parent.remove();
                } else {
                    element.remove();
                }
                */
               element.remove();
            })


            if (element.classList.contains("project-div")) {
                element.querySelector(".task-button").addEventListener("click", () => {
                    addTaskDialog.showModal()
    
                    // add dataset value to identify which project
                    const projectName = element.querySelector(".project-title").textContent;
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