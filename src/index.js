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
    const projects = [];

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

    return {
        Project,
        promptProjectName,
        printProjects,
        promptActiveProject,
        printActiveProject,
        addProject,
        getProjects,
        removeProject
    }
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

    const addProject = () => {
        const projectName = projectList.promptProjectName();
        const newProject = new projectList.Project(projectName);
        projectList.addProject(newProject);
    }

    const updateScreen = () => {
        const list = projectList.getProjects();
        const ul = document.querySelector("#list");
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");
            const span = document.createElement("span");

            li.appendChild(deleteButton);
            deleteButton.textContent = "Delete";

            li.appendChild(span);
            span.textContent = list[i].name;

            ul.appendChild(li);
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

    const addDeleteButtons = () => {
        const liList = document.querySelectorAll("li");
        liList.forEach((element) => {
            element.querySelector("button").addEventListener("click", () => {
                projectList.removeProject(element.querySelector("span").textContent);
                console.log(projectList.printProjects());
                element.remove();
            })
        })
    }

    const addProjectButton = document.querySelector("#add-project");
    addProjectButton.addEventListener("click", () => {
        addProject();
        resetScreen();
        updateScreen();
        addDeleteButtons();
    });

    
}

ScreenController();