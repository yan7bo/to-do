// Project
// object has:
// - name
// - description
// - list of Task objects
// - due date for the whole Project

// Task
// object has:
// - name
// - description
// - due date for the specific task

function ProjectList() {
    let projects = [];

    function Project(name = "project", tasks = [], date = "2024-12-31", description = "sample") {
        this.name = name;
        this.tasks = tasks;
        this.date = date,
        this.description = description;
    }

    // activeProject stores the index of the project the user is editing
    let activeProject;

    const setActiveProject = (index) => {
        activeProject = index;
    }

    const promptActiveProject = () => {
        let index;
        do {
            if (projects.length == 0) {
                console.log("Error: no projects in list! Add a project first!");
                return;
            }
            index = prompt(`which project would you like to edit? (enter index, max ${projects.length - 1})`);
        } while (index >= projects.length);
        setActiveProject(index);
    }

    const printActiveProject = () => {
        // checks if activeProject has been set
        if (!activeProject) {
            console.log("Error: activeProject not set! Run promptActiveProject!");
            return;
        }

        // prints to console the details of the current activeProject
        console.log(
            `Printing activeProject...\n` + 
            `index: ${activeProject}\n` + 
            `name: ${projects[activeProject].name}\n` + 
            `due date: ${projects[activeProject].date}\n` + 
            `description: ${projects[activeProject].description}\n` + 
            `task list: ${projects[activeProject].tasks}`
            );
    }

    const promptProjectName = () => {
        // returns a a string
        const name = prompt("Name of project:");
        return name;
    }

    const promptProjectDesc = () => {
        // changes the project description of the Project at index
        const index = prompt("Which project would you like to update? (enter index)");
        const description = prompt("Please enter the description of the project");
        projects[index].description = description;
    }

    const addProject = (projectObject) => {
        projects.push(projectObject);
        console.log(`Project added: ${projectObject.name}`);
    }

    const printProjects = () => {
        console.log(projects);
    }

    const getProjects = () => {
        return projects;
    }

    const removeProject = (name) => {
        projects.splice(getIndexByName(name));
    }

    const getIndexByName = (name) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name == name) {
                return i;
            }
        }
        return -1;
    }

    const addTask = (index, taskObject) => {
        console.log(taskObject);
        projects[index].tasks.push(taskObject);
        console.log(projects[index]);
    }

    return {
        Project,
        promptProjectName,
        printProjects,
        promptActiveProject,
        printActiveProject,
        addProject,
        getProjects,
        removeProject,
        getIndexByName,
        addTask
    }
}


function Task(name, date = "2024-01-01", description = "this is a task") {
    this.name = name;
    this.date = date;
    this.description = description;
}

/*
function LogicController() {
    const app = ProjectList();
    app.addProject(new app.Project(app.promptProjectName()));
    app.printProjects();
    app.promptActiveProject()
    app.printActiveProject();
}

LogicController();
*/

function ScreenController() {
    const projectList = ProjectList();

    /*
    const addProject = () => {
        const projectName = projectList.promptProjectName();
        const newProject = new projectList.Project(projectName);
        projectList.addProject(newProject);
    }
    */

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