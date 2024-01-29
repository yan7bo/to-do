import { format, parse, endOfToday, isValid, isDate } from "date-fns";
import { saveProjects, loadProjects } from "./storage.js";

export { ProjectList, Task }

function ProjectList() {
    let projects = [];

    class Project {
        constructor(name, tasks = [], date = endOfToday(), description) {
            this.name = name;
            this.tasks = tasks;
            if (isDate(date)) {
                this.date = date;
            } else if (isValid(date)) {
                this.date = parse(date, "yyyy-MM-dd", new Date());
            } else {
                this.date = endOfToday();
            }
            this.description = description;
        };

        get dateStr() {
            return format(this.date, "yyyy-MM-dd");
        };

        addTask(taskObject) {
            this.tasks.push(taskObject);
        }
    }

    // activeProject stores the index of the project the user is editing
    let activeProject;

    const setActiveProject = (index) => {
        activeProject = index;
    };

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
    };

    const printActiveProject = () => {
        // checks if activeProject has been set
        if (!activeProject) {
            console.log("Error: activeProject not set! Run promptActiveProject!");
            return;
        };

        // prints to console the details of the current activeProject
        console.log(
            `Printing activeProject...\n` + 
            `index: ${activeProject}\n` + 
            `name: ${projects[activeProject].name}\n` + 
            `due date: ${projects[activeProject].date}\n` + 
            `description: ${projects[activeProject].description}\n` + 
            `task list: ${projects[activeProject].tasks}`
            );
    };

    const updateActiveProject = (name, date, description) => {
        projects[activeProject].name = name;
        if (isDate(date)) {
            projects[activeProject].date = date;
        } else if (isValid(date)) {
            projects[activeProject].date = parse(date, "yyyy-MM-dd", new Date());
        } else {
            projects[activeProject].date = endOfToday();
        };
        projects[activeProject].description = description;
        saveProjects();
    };

    // returns the Project object that is indexed by activeProject
    const getActiveProject = () => {
        return projects[activeProject];
    };

    const promptProjectName = () => {
        // returns a a string
        const name = prompt("Name of project:");
        return name;
    };

    const promptProjectDesc = () => {
        // changes the project description of the Project at index
        const index = prompt("Which project would you like to update? (enter index)");
        const description = prompt("Please enter the description of the project");
        projects[index].description = description;
    };

    const addProject = (projectObject) => {
        projects.push(projectObject);
        // console.log(`Project added: ${projectObject.name}`);
        saveProjects();
    };

    const printProjects = () => {
        console.log(projects);
    };

    const getProjects = () => {
        return projects;
    };

    const getDate = (index) => {
        return format(projects[index].date, "yyyy-MM-dd");
    };

    const removeProject = (name) => {
        projects.splice(getProjectIndexByName(name), 1);
        saveProjects();
    };

    const getProjectIndexByName = (name) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name == name) {
                return i;
            };
        };
        return -1;
    };

    const getTaskIndexByName = (projectIndex, taskName) => {
        for (let i = 0; i < projects[projectIndex].tasks.length; i++) {
            if (projects[projectIndex].tasks[i].name == taskName) {
                return i;
            };
        };
        return -1;
    };

    const addTask = (index, taskObject) => {
        console.log(taskObject);
        projects[index].tasks.push(taskObject);
        console.log(projects[index]);
        saveProjects();
    };

    const removeTask = (projectName, taskName) => {
        const projectIndex = getProjectIndexByName(projectName);
        const taskIndex = getTaskIndexByName(projectIndex, taskName);
        projects[projectIndex].tasks.splice(taskIndex);
        console.log(projects[projectIndex]);
        saveProjects();
    };

    const exportJSON = () => {
        // export projects as a JSON string
        const JSONstr = JSON.stringify(projects);
        return JSONstr;
    };

    const saveProjects = () => {
        const JSONstr = JSON.stringify(projects);
        const localStorage = window["localStorage"];
        localStorage.setItem("projectList", JSONstr);
        console.log("Saving projects...");
        console.log(localStorage.getItem("projectList"));
    };

    const loadProjects = () => {
        const localStorage = window["localStorage"];
        const JSONStr = localStorage.getItem("projectList");
        // console.log(`JSONStr: ${JSONStr}`);
        const JSONObject = JSON.parse(JSONStr);
        // console.log(JSONObject);
        if (!JSONObject) {
            // if there is nothing stored
            console.log("no local storage");
            return;
        }
        // JSONObject is an array of Objects that store the values of a project list
        // objects in JSONObject are not Projects themselves

        // adds each project to projects
        for (const object of JSONObject) {
            // console.log(object);
            const newProject = new Project(
                object.name,
                [],
                object.date,
                object.description
            );

            // adds each task to the current project
            for (const taskObject of object.tasks) {
                const newTask = new Task(
                    taskObject.name,
                    taskObject.date,
                    taskObject.description
                );
                newProject.addTask(newTask);
            };

            projects.push(newProject);
        };
    };

    return {
        Project,
        promptProjectName,
        printProjects,
        setActiveProject,
        promptActiveProject,
        printActiveProject,
        updateActiveProject,
        getActiveProject,
        addProject,
        getProjects,
        getDate,
        removeProject,
        getProjectIndexByName,
        getTaskIndexByName,
        addTask,
        removeTask,
        saveProjects,
        loadProjects
    };
}

class Task {
    constructor(name, date = endOfToday(), description) {
        this.name = name;
        if (isDate(date)) {
            this.date = date;
        } else if (isValid(date)) {
            this.date = parse(date, "yyyy-MM-dd", new Date());
        } else {
            this.date = endOfToday();
        }
        this.description = description;
    };

    get dateStr() {
        return format(this.date, "yyyy-MM-dd");
    };
};