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
        console.log(`Project added: ${project}`);
    }

    const printProjects = () => {
        console.log(projects);
    }

    return {
        promptProjectName,
        printProjects,
        promptActiveProject,
        printActiveProject
    }
}

function LogicController() {
    const app = ProjectList();
    app.addProject(promptProjectName());
    app.printProjects();
    app.promptActiveProject()
    app.printActiveProject();
}

LogicController();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLG9CQUFvQjtBQUMxRyxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDLHFCQUFxQiw2QkFBNkI7QUFDbEQseUJBQXlCLDZCQUE2QjtBQUN0RCw0QkFBNEIsb0NBQW9DO0FBQ2hFLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvamVjdFxuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBsaXN0IG9mIFRhc2sgb2JqZWN0c1xuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHdob2xlIFByb2plY3RcblxuLy8gVGFza1xuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHNwZWNpZmljIHRhc2tcblxuZnVuY3Rpb24gUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIFByb2plY3QobmFtZSA9IFwicHJvamVjdFwiLCB0YXNrcyA9IFtdLCBkYXRlID0gXCIyMDI0LTEyLTMxXCIsIGRlc2NyaXB0aW9uID0gXCJzYW1wbGVcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICAvLyBhY3RpdmVQcm9qZWN0IHN0b3JlcyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgdGhlIHVzZXIgaXMgZWRpdGluZ1xuICAgIGxldCBhY3RpdmVQcm9qZWN0O1xuXG4gICAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBubyBwcm9qZWN0cyBpbiBsaXN0ISBBZGQgYSBwcm9qZWN0IGZpcnN0IVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCA9IHByb21wdChgd2hpY2ggcHJvamVjdCB3b3VsZCB5b3UgbGlrZSB0byBlZGl0PyAoZW50ZXIgaW5kZXgsIG1heCAke3Byb2plY3RzLmxlbmd0aCAtIDF9KWApO1xuICAgICAgICB9IHdoaWxlIChpbmRleCA+PSBwcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KGluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmludEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrcyBpZiBhY3RpdmVQcm9qZWN0IGhhcyBiZWVuIHNldFxuICAgICAgICBpZiAoIWFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IGFjdGl2ZVByb2plY3Qgbm90IHNldCEgUnVuIHByb21wdEFjdGl2ZVByb2plY3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJpbnRzIHRvIGNvbnNvbGUgdGhlIGRldGFpbHMgb2YgdGhlIGN1cnJlbnQgYWN0aXZlUHJvamVjdFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBpbmRleDogJHthY3RpdmVQcm9qZWN0fVxcbmAgKyBcbiAgICAgICAgICAgIGBuYW1lOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLm5hbWV9XFxuYCArIFxuICAgICAgICAgICAgYGR1ZSBkYXRlOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRhdGV9XFxuYCArIFxuICAgICAgICAgICAgYGRlc2NyaXB0aW9uOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRlc2NyaXB0aW9ufVxcbmAgKyBcbiAgICAgICAgICAgIGB0YXNrIGxpc3Q6ICR7cHJvamVjdHNbYWN0aXZlUHJvamVjdF0udGFza3N9YFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgLy8gcmV0dXJucyBhIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJOYW1lIG9mIHByb2plY3Q6XCIpO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0RGVzYyA9ICgpID0+IHtcbiAgICAgICAgLy8gY2hhbmdlcyB0aGUgcHJvamVjdCBkZXNjcmlwdGlvbiBvZiB0aGUgUHJvamVjdCBhdCBpbmRleFxuICAgICAgICBjb25zdCBpbmRleCA9IHByb21wdChcIldoaWNoIHByb2plY3Qgd291bGQgeW91IGxpa2UgdG8gdXBkYXRlPyAoZW50ZXIgaW5kZXgpXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdChcIlBsZWFzZSBlbnRlciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE9iamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBhZGRlZDogJHtwcm9qZWN0fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW50UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9tcHRQcm9qZWN0TmFtZSxcbiAgICAgICAgcHJpbnRQcm9qZWN0cyxcbiAgICAgICAgcHJvbXB0QWN0aXZlUHJvamVjdCxcbiAgICAgICAgcHJpbnRBY3RpdmVQcm9qZWN0XG4gICAgfVxufVxuXG5mdW5jdGlvbiBMb2dpY0NvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgYXBwID0gUHJvamVjdExpc3QoKTtcbiAgICBhcHAuYWRkUHJvamVjdChwcm9tcHRQcm9qZWN0TmFtZSgpKTtcbiAgICBhcHAucHJpbnRQcm9qZWN0cygpO1xuICAgIGFwcC5wcm9tcHRBY3RpdmVQcm9qZWN0KClcbiAgICBhcHAucHJpbnRBY3RpdmVQcm9qZWN0KCk7XG59XG5cbkxvZ2ljQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==