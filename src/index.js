import { ProjectList, Task } from "./projects.js";
import { format, parse } from "date-fns";
import "./style.css";

const myDate = new Date(2014, 1, 11);
console.log(format(myDate, "yyyy-MM-dd"));
console.log(myDate);
const newDate = parse("2024-01-01", "yyyy-MM-dd", new Date());
console.log(newDate);

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
            projectDateP.textContent = format(list[i].date, "yyyy-MM-dd");
            projectDateP.classList.add("project-date");

            const projectButtonContainer = document.createElement("div");
            const projectDeleteButton = document.createElement("button");
            const projectTaskButton = document.createElement("button");
            const projectEditButton = document.createElement("button");

            projectDiv.appendChild(projectButtonContainer);
            projectButtonContainer.appendChild(projectDeleteButton);
            projectButtonContainer.appendChild(projectEditButton);
            projectButtonContainer.appendChild(projectTaskButton);

            projectButtonContainer.classList.add("button-container")
            projectDeleteButton.textContent = "Delete";
            projectDeleteButton.classList.add("delete-button");
            projectTaskButton.textContent = "Add Task";
            projectTaskButton.classList.add("task-button");
            projectEditButton.textContent = "Edit";
            projectEditButton.classList.add("edit-button");

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
                taskDateP.textContent = format(list[i].tasks[j].date, "yyyy-MM-dd");
                taskDateP.classList.add("task-date");

                const taskButtonContainer = document.createElement("div");
                const taskDeleteButton = document.createElement("button");
                const taskEditButton = document.createElement("button");

                taskDiv.appendChild(taskButtonContainer);
                taskButtonContainer.appendChild(taskDeleteButton);
                taskButtonContainer.appendChild(taskEditButton);

                taskButtonContainer.classList.add("button-container");
                taskDeleteButton.textContent = "Delete";
                taskDeleteButton.classList.add("delete-button");
                taskEditButton.textContent = "Edit";
                taskEditButton.classList.add("edit-button");
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

        const taskDivList = document.querySelectorAll(".task-div");
        taskDivList.forEach((element) => {
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

            element.querySelector(".edit-button").addEventListener("click", () => {
                // show modal
                const addProjectDialog = document.querySelector("#add-project-dialog");
                addProjectDialog.querySelector("h3").textContent = "Edit details:"
                addProjectDialog.showModal();
                

                // set input values
                const projectNameElement = addProjectDialog.querySelector("#project-title");
                const projectDateElement = addProjectDialog.querySelector("#project-deadline");
                const projectDescElement = addProjectDialog.querySelector("#project-description");

                projectNameElement.value = element.querySelector(".project-title").textContent;
                projectDateElement.value = element.querySelector(".project-date").textContent;
                projectDescElement.value = element.querySelector(".project-description").textContent;
                
                const index = projectList.getProjectIndexByName(projectNameElement.value);

                // event handler for confirm
                addProjectDialog.querySelector(".confirm").addEventListener("click", () => {
                    projectList.setActiveProject(index);
                    projectList.updateActiveProject(
                        projectNameElement.value,
                        projectDateElement.value,
                        projectDescElement.value
                        );
                    element.querySelector(".project-title").textContent = projectNameElement.value;
                    element.querySelector(".project-date").textContent = projectDateElement.value;
                    element.querySelector(".project-description").textContent = projectDescElement.value;

                    addProjectDialog.close();
                })
            })


            element.querySelector(".task-button").addEventListener("click", () => {
                addTaskDialog.showModal()

                // add dataset value to identify which project
                const projectName = element.querySelector(".project-title").textContent;
                addTaskDialog.dataset.project = projectName;

                // modify h3 title to show the correct project name
                addTaskDialog.querySelector("h3").textContent = `Add a task to "${projectName}"`;
            })

            // adds hover
            element.addEventListener("mouseover", () => {
                const title = element.querySelector(".project-title");
                title.style.color = "blue";
            })
            element.addEventListener("mouseout", () => {
                const title = element.querySelector(".project-title");
                title.style.color = "black";
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

            element.querySelector(".edit-button").addEventListener("click", () => {
                const addTaskDialog = document.querySelector("#edit-task-dialog");
                addTaskDialog.querySelector("h3").textContent = "Edit details:"
                addTaskDialog.showModal();

                const taskNameElement = addTaskDialog.querySelector("#edit-task-title");
                const taskDateElement = addTaskDialog.querySelector("#edit-task-deadline");
                const taskDescElement = addTaskDialog.querySelector("#edit-task-description");

                taskNameElement.value = element.querySelector(".task-title").textContent;
                taskDateElement.value = element.querySelector(".task-date").textContent;
                taskDescElement.value = element.querySelector(".task-description").textContent;

                const projectIndex = projectList.getProjectIndexByName(projectName);
                const taskIndex = projectList.getTaskIndexByName(projectIndex, taskNameElement.value);
                console.log(taskIndex);
                console.log(projectList.getProjects()[projectIndex].tasks[taskIndex]);

                // event handler for confirm
                addTaskDialog.querySelector(".confirm").addEventListener("click", () => {
                    projectList.getProjects()[projectIndex].tasks[taskIndex] = new Task(
                        taskNameElement.value,
                        taskDateElement.value,
                        taskDescElement.value
                    );
                    element.querySelector(".task-title").textContent = taskNameElement.value;
                    element.querySelector(".task-date").textContent = taskDateElement.value;
                    element.querySelector(".task-description").textContent = taskDescElement.value;

                    addTaskDialog.close();
                })

                // event handler for cancel
                addTaskDialog.querySelector(".cancel").addEventListener("click", () => {
                    addTaskDialog.close();
                })
            })

            element.addEventListener("mouseover", () => {
                const title = element.querySelector(".task-title");
                title.style.color = "blue";
            })
            element.addEventListener("mouseout", () => {
                const title = element.querySelector(".task-title");
                title.style.color = "black";
            })
        })

    }

    const addProjectButton = document.querySelector("#add-project");
    const addProjectButtonContainer = document.querySelector("#button-container");

    const createAddProjectButton = () => {
        const body = document.querySelector("body");
        
        const div = document.createElement("div");
        div.setAttribute("id", "button-container");
        body.appendChild(div);

        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "add-project");
        button.classList.add("top-button");
        button.textContent = "+ Add Project";
        div.appendChild(button);

        button.addEventListener("click", () => {
            const addProjectButtonContainer = document.querySelector("#button-container");
            addProjectButtonContainer.remove();
            createAddProjectBox();
        })
    }
    

    // adds operations to the add project dialog
    
    const addProjectDialog = document.querySelector("#add-project-dialog");
    addProjectDialog.querySelector(".cancel").addEventListener("click", () => {
        // reset dialog input values
        /*
        addProjectDialog.querySelector("h3").textContent = "";
        addProjectDialog.querySelector("#project-title").value = "";
        addProjectDialog.querySelector("#project-deadline").value = "";
        addProjectDialog.querySelector("#project-description").value = "";
        */

        // close dialog
        addProjectDialog.close()
    })

    addProjectButton.addEventListener("click", () => {
        // addProjectDialog.showModal();
        addProjectButtonContainer.remove();
        createAddProjectBox();
    })

    const createAddProjectBox = () => {
        const body = document.querySelector("body");

        const form = document.createElement("form");
        form.setAttribute("id", "add-project-form");
        form.style.border = "solid 1px black";
        body.appendChild(form);

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "project-title");
        titleInput.setAttribute("id", "project-title");
        titleInput.setAttribute("placeholder", "Project Name");
        titleInput.setAttribute("autocomplete", "off");
        titleInput.attributes.required = "required";
        form.appendChild(titleInput);

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("name", "project-date");
        dateInput.setAttribute("id", "project-date");
        // dateInput.setAttribute("placeholder", "2024-12-31");
        // dateInput.setAttribute("value", "2024-12-31");
        dateInput.classList.add("date");
        form.appendChild(dateInput);

        const descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("name", "project-description");
        descriptionInput.setAttribute("id", "project-description");
        descriptionInput.setAttribute("placeholder", "Description");
        descriptionInput.setAttribute("rows", "5");
        descriptionInput.setAttribute("autocomplete", "off");
        form.appendChild(descriptionInput);

        const buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", "add-project-button-container");
        form.appendChild(buttonDiv);

        const cancelButton = document.createElement("button");
        cancelButton.classList.add("add-project-button");
        cancelButton.classList.add("cancel");
        cancelButton.setAttribute("type", "button");
        cancelButton.textContent = "Cancel";
        buttonDiv.appendChild(cancelButton);
        
        const confirmButton = document.createElement("button");
        confirmButton.classList.add("add-project-button");
        confirmButton.classList.add("confirm");
        confirmButton.setAttribute("type", "button");
        confirmButton.textContent = "Confirm";
        buttonDiv.appendChild(confirmButton);

        // add events to cancel and confirm buttons
        cancelButton.addEventListener("click", () => {
            // delete box
            form.remove();

            // add back the add project button
            createAddProjectButton();
        })

        confirmButton.addEventListener("click", () => {
            // capture values
            const title = form.querySelector("#project-title").value;
            const date = form.querySelector("#project-date").value;
            console.log(date);
            const description = form.querySelector("#project-description").value;

            // form validation: check if title is non-empty
            if (title) {
                // add project
                projectList.addProject(new projectList.Project(title, [], date, description));

                // reset list
                resetScreen();

                // update list
                updateScreen();

                // add buttons to list
                addButtons();

                // delete box
                form.remove();

                // add back the add project button
                createAddProjectButton();
            }
        })
    };

    /*
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
    */



    // adds operation to add task dialog
    const addTaskDialog = document.querySelector("#add-task-dialog");
    const closeTaskDialog = addTaskDialog.querySelector(".cancel");
    closeTaskDialog.addEventListener("click", () => {
        addTaskDialog.close();
    })

    const submitTaskDialog = addTaskDialog.querySelector(".confirm");
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
                    new Date(2024, 0, 31),
                    "Create the html layout to display all projects and tasks."
                ),
                new Task(
                    "Create add project functionality",
                    new Date(2024, 2, 31),
                    "Use dialog box to allow the user to add projects."
                ),
                new Task(
                    "Create add task functionality",
                    new Date(2024, 5, 30),
                    "Each project should have a button that allows the user to add new tasks. Each task should be displayed indented below the project they are associated with."
                )
            ],
            new Date(2024, 11, 31),
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