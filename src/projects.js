import { format, parse, endOfToday } from "date-fns";

export { ProjectList, Task }

function ProjectList() {
    let projects = [];

    function Project(name = "project", tasks = [], date = endOfToday(), description) {
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

    const updateActiveProject = (name, date, description) => {
        projects[activeProject].name = name;
        projects[activeProject].date = date;
        projects[activeProject].description = description;
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

    const getDate = (index) => {
        return format(projects[index].date, "yyyy-MM-dd");
    }

    const removeProject = (name) => {
        projects.splice(getProjectIndexByName(name), 1);
    }

    const getProjectIndexByName = (name) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name == name) {
                return i;
            }
        }
        return -1;
    }

    const getTaskIndexByName = (projectIndex, taskName) => {
        for (let i = 0; i < projects[projectIndex].tasks.length; i++) {
            if (projects[projectIndex].tasks[i].name == taskName) {
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

    const removeTask = (projectName, taskName) => {
        const projectIndex = getProjectIndexByName(projectName);
        const taskIndex = getTaskIndexByName(projectIndex, taskName);
        projects[projectIndex].tasks.splice(taskIndex);
        console.log(projects[projectIndex]);
    }

    return {
        Project,
        promptProjectName,
        printProjects,
        setActiveProject,
        promptActiveProject,
        printActiveProject,
        updateActiveProject,
        addProject,
        getProjects,
        getDate,
        removeProject,
        getProjectIndexByName,
        getTaskIndexByName,
        addTask,
        removeTask
    }
}


function Task(name, date = endOfToday(), description) {
    this.name = name;
    this.date = date;
    this.description = description;
}