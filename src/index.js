function List() {
    const projects = [];

    const promptProject = () => {
        const name = prompt("Name of project:");
        console.log(`project: ${name}`);
        return name;
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