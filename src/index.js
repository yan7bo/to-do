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
                taskDiv.setAttribute("data-project", list[i].name);
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
        /*
        const listContainer = document.querySelector("#list-container");
        listContainer.remove();
        const newContainer = document.createElement("div");
        newContainer.setAttribute("id", "list-container");
        const body = document.querySelector("body");
        body.appendChild(newContainer);
        */
        const projectDivList = document.querySelectorAll(".project-div");
        projectDivList.forEach((element) => {
            element.remove();
        })
    }

    const addButtons = () => {
        const projectDivList = document.querySelectorAll(".project-div");
        projectDivList.forEach((element) => {
            element.querySelector(".delete-button").addEventListener("click", () => {
                projectList.removeProject(element.querySelector(".project-title").textContent);
                console.log(projectList.getProjects());
                resetScreen();
                updateScreen();
               // delete all tasks associated with the project being deleted
            })


            element.querySelector(".task-button").addEventListener("click", () => {
                addTaskDialog.showModal()

                // add dataset value to identify which project
                const projectName = element.querySelector(".project-title").textContent;
                addTaskDialog.dataset.project = projectName;

                // modify h3 title to show the correct project name
                addTaskDialog.querySelector("h3").textContent = `Add a task to ${projectName}`;
            })
        })

        const taskDivList = document.querySelectorAll(".task-div");
        taskDivList.forEach((element) => {
            const projectName = element.dataset.project;
            element.querySelector(".delete-button").addEventListener("click", () => {
                const taskName = element.querySelector(".task-title").textContent;
                console.log(`removing task ${taskName} from project ${projectName}`);
                projectList.removeTask(projectName, taskName);
                element.remove();
            })
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

        projectList.addTask(projectList.getProjectIndexByName(projectName), new Task(title, date, description));
        
        addTaskDialog.close();
        resetScreen();
        updateScreen();
        addButtons();
    })

    const addSampleData = (() => {
        const project1 = new projectList.Project(
            "Make to-do app",
            [
                new Task(
                    "Create index.html",
                    "2024-01-31",
                    "Create the html layout to display all projects and tasks."
                ),
                new Task(
                    "Create add project functionality",
                    "2024-03-31",
                    "Use dialog box to allow the user to add projects."
                ),
                new Task(
                    "Create add task functionality",
                    "2024-06-30",
                    "Each project should have a button that allows the user to add new tasks. Each task should be displayed indented below the project they are associated with."
                )
            ],
            "2024-12-31",
            "Create an app that the user can add, edit, and remove to-do projects"
        );
        projectList.addProject(project1);

        const project2 = new projectList.Project(
            "Complete today's chores",
            [
                new Task(
                    "Clean bedroom"
                ),
                new Task(
                    "Do the dishes"
                )
            ],
        );
        projectList.addProject(project2);

        updateScreen();
        addButtons();
    })();
}

ScreenController();