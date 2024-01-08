/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgcHJvbXB0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdChcIk5hbWUgb2YgcHJvamVjdDpcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0OiAke25hbWV9YCk7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9tcHRQcm9qZWN0KClcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgYWRkZWQ6ICR7cHJvamVjdH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGxvZ1Byb2plY3RzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBMb2dpY0NvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgYXBwID0gTGlzdCgpO1xuICAgIGFwcC5hZGRQcm9qZWN0KCk7XG4gICAgYXBwLmxvZ1Byb2plY3RzKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9