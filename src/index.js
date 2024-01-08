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

function List() {
    const projects = [];

    function Project(name = "project", tasks = [], date = "2024-12-31", description = "sample") {
        this.name = name;
        this.tasks = tasks;
        this.date = date,
        this.description = description;
    }

    const promptProject = () => {
        // returns a Project object
        const name = prompt("Name of project:");
        console.log(`project: ${name}`);
        const newProject = new Project(name);
        return newProject;
    }

    const addProject = () => {
        const project = promptProject()
        projects.push(project);
        console.log(`Project added: ${project}`);
    }

    const logProjects = () => {
        console.log(projects);
    }

    return {
        addProject,
        logProjects
    }
}

function LogicController() {
    const app = List();
    app.addProject();
    app.logProjects();
}

LogicController();