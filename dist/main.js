/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

function TaskList() {
    let tasks = [];
    
    function Task(name, date = "2024-01-01", description = "this is a task") {
        this.name = name;
        this.date = date;
        this.description = description;
    }

    const addTask = (taskObject) => {
        tasks.push(taskObject);
        console.log(`Task added: ${projectObject.name}`);
    }

    const promptTaskName = () => {
        // returns a a string
        const name = prompt("Name of task:");
        return name;
    }

    return {
        Task,
        addTask,
        promptTaskName
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
        console.log(list);
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
    /*
    addProjectButton.addEventListener("click", () => {
        addProject();
        resetScreen();
        updateScreen();
        addDeleteButtons();
    });
    */

    // adds operations to the add project dialog
    const dialogBox = document.querySelector("dialog");
    addProjectButton.addEventListener("click", () => {
        dialogBox.showModal();
    })

    const closeDialog = dialogBox.querySelector("#close-dialog");
    closeDialog.addEventListener("click", () => {
        dialogBox.close();
    })

    const submitDialog = dialogBox.querySelector("#submit-dialog");
    submitDialog.addEventListener("click", () => {
        const title = dialogBox.querySelector("#project-title").value;
        const date = dialogBox.querySelector("#project-deadline").value;
        const description = dialogBox.querySelector("#project-description").value;

        projectList.addProject(new projectList.Project(title, date, description));
        
        dialogBox.close();
        resetScreen();
        updateScreen();
        addDeleteButtons();
    })
}

ScreenController();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLG9CQUFvQjtBQUMxRyxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMscUJBQXFCLDZCQUE2QjtBQUNsRCx5QkFBeUIsNkJBQTZCO0FBQ3RELDRCQUE0QixvQ0FBb0M7QUFDaEUsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvamVjdFxuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBsaXN0IG9mIFRhc2sgb2JqZWN0c1xuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHdob2xlIFByb2plY3RcblxuLy8gVGFza1xuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHNwZWNpZmljIHRhc2tcblxuZnVuY3Rpb24gUHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBmdW5jdGlvbiBQcm9qZWN0KG5hbWUgPSBcInByb2plY3RcIiwgdGFza3MgPSBbXSwgZGF0ZSA9IFwiMjAyNC0xMi0zMVwiLCBkZXNjcmlwdGlvbiA9IFwic2FtcGxlXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gYWN0aXZlUHJvamVjdCBzdG9yZXMgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IHRoZSB1c2VyIGlzIGVkaXRpbmdcbiAgICBsZXQgYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogbm8gcHJvamVjdHMgaW4gbGlzdCEgQWRkIGEgcHJvamVjdCBmaXJzdCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggPSBwcm9tcHQoYHdoaWNoIHByb2plY3Qgd291bGQgeW91IGxpa2UgdG8gZWRpdD8gKGVudGVyIGluZGV4LCBtYXggJHtwcm9qZWN0cy5sZW5ndGggLSAxfSlgKTtcbiAgICAgICAgfSB3aGlsZSAoaW5kZXggPj0gcHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChpbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBjaGVja3MgaWYgYWN0aXZlUHJvamVjdCBoYXMgYmVlbiBzZXRcbiAgICAgICAgaWYgKCFhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBhY3RpdmVQcm9qZWN0IG5vdCBzZXQhIFJ1biBwcm9tcHRBY3RpdmVQcm9qZWN0IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByaW50cyB0byBjb25zb2xlIHRoZSBkZXRhaWxzIG9mIHRoZSBjdXJyZW50IGFjdGl2ZVByb2plY3RcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgUHJpbnRpbmcgYWN0aXZlUHJvamVjdC4uLlxcbmAgKyBcbiAgICAgICAgICAgIGBpbmRleDogJHthY3RpdmVQcm9qZWN0fVxcbmAgKyBcbiAgICAgICAgICAgIGBuYW1lOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLm5hbWV9XFxuYCArIFxuICAgICAgICAgICAgYGR1ZSBkYXRlOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRhdGV9XFxuYCArIFxuICAgICAgICAgICAgYGRlc2NyaXB0aW9uOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRlc2NyaXB0aW9ufVxcbmAgKyBcbiAgICAgICAgICAgIGB0YXNrIGxpc3Q6ICR7cHJvamVjdHNbYWN0aXZlUHJvamVjdF0udGFza3N9YFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgLy8gcmV0dXJucyBhIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJOYW1lIG9mIHByb2plY3Q6XCIpO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0RGVzYyA9ICgpID0+IHtcbiAgICAgICAgLy8gY2hhbmdlcyB0aGUgcHJvamVjdCBkZXNjcmlwdGlvbiBvZiB0aGUgUHJvamVjdCBhdCBpbmRleFxuICAgICAgICBjb25zdCBpbmRleCA9IHByb21wdChcIldoaWNoIHByb2plY3Qgd291bGQgeW91IGxpa2UgdG8gdXBkYXRlPyAoZW50ZXIgaW5kZXgpXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdChcIlBsZWFzZSBlbnRlciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE9iamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBhZGRlZDogJHtwcm9qZWN0T2JqZWN0Lm5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShnZXRJbmRleEJ5TmFtZShuYW1lKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5kZXhCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFByb2plY3QsXG4gICAgICAgIHByb21wdFByb2plY3ROYW1lLFxuICAgICAgICBwcmludFByb2plY3RzLFxuICAgICAgICBwcm9tcHRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBwcmludEFjdGl2ZVByb2plY3QsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICByZW1vdmVQcm9qZWN0XG4gICAgfVxufVxuXG5mdW5jdGlvbiBUYXNrTGlzdCgpIHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBcbiAgICBmdW5jdGlvbiBUYXNrKG5hbWUsIGRhdGUgPSBcIjIwMjQtMDEtMDFcIiwgZGVzY3JpcHRpb24gPSBcInRoaXMgaXMgYSB0YXNrXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2tPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBhZGRlZDogJHtwcm9qZWN0T2JqZWN0Lm5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0VGFza05hbWUgPSAoKSA9PiB7XG4gICAgICAgIC8vIHJldHVybnMgYSBhIHN0cmluZ1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiTmFtZSBvZiB0YXNrOlwiKTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVGFzayxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcHJvbXB0VGFza05hbWVcbiAgICB9XG59XG5cbi8qXG5mdW5jdGlvbiBMb2dpY0NvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgYXBwID0gUHJvamVjdExpc3QoKTtcbiAgICBhcHAuYWRkUHJvamVjdChuZXcgYXBwLlByb2plY3QoYXBwLnByb21wdFByb2plY3ROYW1lKCkpKTtcbiAgICBhcHAucHJpbnRQcm9qZWN0cygpO1xuICAgIGFwcC5wcm9tcHRBY3RpdmVQcm9qZWN0KClcbiAgICBhcHAucHJpbnRBY3RpdmVQcm9qZWN0KCk7XG59XG5cbkxvZ2ljQ29udHJvbGxlcigpO1xuKi9cblxuZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0KCk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RMaXN0LnByb21wdFByb2plY3ROYW1lKCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdExpc3QuUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxpc3RbaV0ubmFtZTtcblxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0XCIpO1xuICAgICAgICB1bC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbmV3VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5ld1VsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFwiKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5ld1VsKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGREZWxldGVCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gICAgICAgIGxpTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KGVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByaW50UHJvamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG4gICAgLypcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgcmVzZXRTY3JlZW4oKTtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgIGFkZERlbGV0ZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgICAqL1xuXG4gICAgLy8gYWRkcyBvcGVyYXRpb25zIHRvIHRoZSBhZGQgcHJvamVjdCBkaWFsb2dcbiAgICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlhbG9nQm94LnNob3dNb2RhbCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZURpYWxvZyA9IGRpYWxvZ0JveC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWRpYWxvZ1wiKTtcbiAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3VibWl0RGlhbG9nID0gZGlhbG9nQm94LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LWRpYWxvZ1wiKTtcbiAgICBzdWJtaXREaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkaWFsb2dCb3gucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZGlhbG9nQm94LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZWFkbGluZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkaWFsb2dCb3gucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3IHByb2plY3RMaXN0LlByb2plY3QodGl0bGUsIGRhdGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgICAgIFxuICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcbiAgICAgICAgcmVzZXRTY3JlZW4oKTtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgIGFkZERlbGV0ZUJ1dHRvbnMoKTtcbiAgICB9KVxufVxuXG5TY3JlZW5Db250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9