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

    const promptActiveProject = () => {
        let index;
        do {
            if (projects.length == 0) {
                console.log("Error: no projects in list! Add a project first!");
                return;
            }
            index = prompt(`which project would you like to edit? (enter index, max ${projects.length - 1})`);
        } while (index >= projects.length);
        activeProject = index;
    }

    const printActiveProject = () => {
        // checks if activeProject has been set
        if (!activeProject) {
            console.log("Error: activeProject not set! Run promptActiveProject!");
            return;
        }

        // prints to console the details of the current activeProject
        console.log(
            `index: ${activeProject}\n` + 
            `name: ${projects[activeProject].name}\n` + 
            `due date: ${projects[activeProject].date}\n` + 
            `description: ${projects[activeProject].description}\n` + 
            `task list: ${projects[activeProject].tasks}`
            );
    }

    const promptProjectName = () => {
        // returns a Project object
        const name = prompt("Name of project:");
        console.log(`project: ${name}`);
        const newProject = new Project(name);
        return newProject;
    }

    const promptProjectDesc = () => {
        // changes the project description of the Project at index
        const index = prompt("Which project would you like to update? (enter index)");
        const description = prompt("Please enter the description of the project");
        projects[index].description = description;
    }

    const addProject = () => {
        const project = promptProjectName()
        projects.push(project);
        console.log(`Project added: ${project}`);
    }

    const printProjects = () => {
        console.log(projects);
    }

    return {
        addProject,
        printProjects,
        promptActiveProject,
        printActiveProject
    }
}

function LogicController() {
    const app = ProjectList();
    app.printActiveProject() // this should give error
    app.promptActiveProject() // this should give error
    app.addProject();
    app.printProjects();
    app.promptActiveProject()
    app.printActiveProject();
}

LogicController();