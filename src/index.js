import { ProjectList, Task } from "./projects.js";
import { format, parse } from "date-fns";
import "./style.css";

function ScreenController() {
    const projectList = ProjectList();

    const createDivContainer = (type, currProj, currTask) => {
        const listContainer = document.querySelector("#list-container");

        const divContainer = document.createElement("div");
        divContainer.classList.add(`${type}-div`);
        divContainer.classList.add("div-container");
        listContainer.appendChild(divContainer);

        const checkbox = document.createElement("input");
        divContainer.appendChild(checkbox);
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add(`${type}-checkbox`);

        const textContainer = document.createElement("div");
        const titleElement = document.createElement("p");
        const descriptionElement = document.createElement("p");
        const dateElement = document.createElement("p")

        divContainer.appendChild(textContainer);
        textContainer.appendChild(titleElement);
        textContainer.appendChild(descriptionElement);
        textContainer.appendChild(dateElement);

        if (type == "project") {
            titleElement.textContent = currProj.name;
            titleElement.classList.add(`${type}-title`);
            descriptionElement.textContent = currProj.description;
            descriptionElement.classList.add(`${type}-description`);
            dateElement.textContent = currProj.dateStr;
            dateElement.classList.add(`${type}-date`);
        } else if (type == "task") {
            titleElement.textContent = currTask.name;
            titleElement.classList.add(`${type}-title`);
            descriptionElement.textContent = currTask.description;
            descriptionElement.classList.add(`${type}-description`);
            dateElement.textContent = currTask.dateStr;
            dateElement.classList.add(`${type}-date`);
        };

        const buttonContainer = document.createElement("div");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");

        divContainer.appendChild(buttonContainer);
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(editButton);

        if (type == "project") {
            const addTaskButton = document.createElement("button");
            buttonContainer.appendChild(addTaskButton);
            addTaskButton.textContent = "Add Task";
            addTaskButton.classList.add("task-button");
        };

        buttonContainer.classList.add("button-container")
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");

        if (type == "task") {
            divContainer.setAttribute("data-project", currProj.name);
        };
    };

    const updateScreen = () => {
        const list = projectList.getProjects();
        for (let i = 0; i < list.length; i++) {
            const currProj = list[i];
            createDivContainer("project", currProj);

            for (let j = 0; j < currProj.tasks.length; j++) {
                const currTask = list[i].tasks[j];
                createDivContainer("task", currProj, currTask);
            };
        };
    };

    const resetScreen = () => {
        const divList = document.querySelectorAll(".div-container");
        console.log(divList);
        divList.forEach((element) => {
            element.remove();
       });
    };

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
                    element.querySelector(".project-title").textContent = projectList.getActiveProject().name;
                    element.querySelector(".project-date").textContent = format(projectList.getActiveProject().date, "yyyy-MM-dd");
                    element.querySelector(".project-description").textContent = projectList.getActiveProject().description;

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
                    element.querySelector(".task-title").textContent = 
                        projectList.getProjects()[projectIndex].tasks[taskIndex].name;
                    element.querySelector(".task-date").textContent =
                        format(projectList.getProjects()[projectIndex].tasks[taskIndex].date, "yyyy-MM-dd");
                    element.querySelector(".task-description").textContent =
                        projectList.getProjects()[projectIndex].tasks[taskIndex].description;

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
        });

        confirmButton.addEventListener("click", () => {
            // capture values
            const title = form.querySelector("#project-title").value;
            const date = form.querySelector("#project-date").value;
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

    addProjectButton.addEventListener("click", () => {
        // addProjectDialog.showModal();
        addProjectButtonContainer.remove();
        createAddProjectBox();
    })

    // adds operations to the add project dialog
    const addProjectDialog = document.querySelector("#add-project-dialog");
    addProjectDialog.querySelector(".cancel").addEventListener("click", () => {
        addProjectDialog.close()
    })

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