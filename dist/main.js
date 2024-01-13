/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });


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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
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
    const projectList = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList)();

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

        projectList.addTask(projectList.getIndexByName(projectName), new _projects_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, date, description));
        
        addTaskDialog.close();
        resetScreen();
        updateScreen();
        addButtons();
    })
}

ScreenController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLG9CQUFvQjtBQUMxRyxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMscUJBQXFCLDZCQUE2QjtBQUNsRCx5QkFBeUIsNkJBQTZCO0FBQ3RELDRCQUE0QixvQ0FBb0M7QUFDaEUsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix5REFBVzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixZQUFZO0FBQ2pHLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFLDhDQUFJO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFByb2plY3RMaXN0LCBUYXNrIH1cblxuZnVuY3Rpb24gUHJvamVjdExpc3QoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBmdW5jdGlvbiBQcm9qZWN0KG5hbWUgPSBcInByb2plY3RcIiwgdGFza3MgPSBbXSwgZGF0ZSA9IFwiMjAyNC0xMi0zMVwiLCBkZXNjcmlwdGlvbiA9IFwic2FtcGxlXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gYWN0aXZlUHJvamVjdCBzdG9yZXMgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IHRoZSB1c2VyIGlzIGVkaXRpbmdcbiAgICBsZXQgYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IGluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogbm8gcHJvamVjdHMgaW4gbGlzdCEgQWRkIGEgcHJvamVjdCBmaXJzdCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggPSBwcm9tcHQoYHdoaWNoIHByb2plY3Qgd291bGQgeW91IGxpa2UgdG8gZWRpdD8gKGVudGVyIGluZGV4LCBtYXggJHtwcm9qZWN0cy5sZW5ndGggLSAxfSlgKTtcbiAgICAgICAgfSB3aGlsZSAoaW5kZXggPj0gcHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChpbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBjaGVja3MgaWYgYWN0aXZlUHJvamVjdCBoYXMgYmVlbiBzZXRcbiAgICAgICAgaWYgKCFhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBhY3RpdmVQcm9qZWN0IG5vdCBzZXQhIFJ1biBwcm9tcHRBY3RpdmVQcm9qZWN0IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByaW50cyB0byBjb25zb2xlIHRoZSBkZXRhaWxzIG9mIHRoZSBjdXJyZW50IGFjdGl2ZVByb2plY3RcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgUHJpbnRpbmcgYWN0aXZlUHJvamVjdC4uLlxcbmAgKyBcbiAgICAgICAgICAgIGBpbmRleDogJHthY3RpdmVQcm9qZWN0fVxcbmAgKyBcbiAgICAgICAgICAgIGBuYW1lOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLm5hbWV9XFxuYCArIFxuICAgICAgICAgICAgYGR1ZSBkYXRlOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRhdGV9XFxuYCArIFxuICAgICAgICAgICAgYGRlc2NyaXB0aW9uOiAke3Byb2plY3RzW2FjdGl2ZVByb2plY3RdLmRlc2NyaXB0aW9ufVxcbmAgKyBcbiAgICAgICAgICAgIGB0YXNrIGxpc3Q6ICR7cHJvamVjdHNbYWN0aXZlUHJvamVjdF0udGFza3N9YFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgLy8gcmV0dXJucyBhIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJOYW1lIG9mIHByb2plY3Q6XCIpO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0RGVzYyA9ICgpID0+IHtcbiAgICAgICAgLy8gY2hhbmdlcyB0aGUgcHJvamVjdCBkZXNjcmlwdGlvbiBvZiB0aGUgUHJvamVjdCBhdCBpbmRleFxuICAgICAgICBjb25zdCBpbmRleCA9IHByb21wdChcIldoaWNoIHByb2plY3Qgd291bGQgeW91IGxpa2UgdG8gdXBkYXRlPyAoZW50ZXIgaW5kZXgpXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdChcIlBsZWFzZSBlbnRlciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE9iamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBhZGRlZDogJHtwcm9qZWN0T2JqZWN0Lm5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShnZXRJbmRleEJ5TmFtZShuYW1lKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5kZXhCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAoaW5kZXgsIHRhc2tPYmplY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGFza09iamVjdCk7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS50YXNrcy5wdXNoKHRhc2tPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFByb2plY3QsXG4gICAgICAgIHByb21wdFByb2plY3ROYW1lLFxuICAgICAgICBwcmludFByb2plY3RzLFxuICAgICAgICBwcm9tcHRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBwcmludEFjdGl2ZVByb2plY3QsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBnZXRJbmRleEJ5TmFtZSxcbiAgICAgICAgYWRkVGFza1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBUYXNrKG5hbWUsIGRhdGUgPSBcIjIwMjQtMDEtMDFcIiwgZGVzY3JpcHRpb24gPSBcInRoaXMgaXMgYSB0YXNrXCIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gUHJvamVjdFxuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBsaXN0IG9mIFRhc2sgb2JqZWN0c1xuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHdob2xlIFByb2plY3RcblxuLy8gVGFza1xuLy8gb2JqZWN0IGhhczpcbi8vIC0gbmFtZVxuLy8gLSBkZXNjcmlwdGlvblxuLy8gLSBkdWUgZGF0ZSBmb3IgdGhlIHNwZWNpZmljIHRhc2tcblxuaW1wb3J0IHsgUHJvamVjdExpc3QsIFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG4vKlxuZnVuY3Rpb24gTG9naWNDb250cm9sbGVyKCkge1xuICAgIGNvbnN0IGFwcCA9IFByb2plY3RMaXN0KCk7XG4gICAgYXBwLmFkZFByb2plY3QobmV3IGFwcC5Qcm9qZWN0KGFwcC5wcm9tcHRQcm9qZWN0TmFtZSgpKSk7XG4gICAgYXBwLnByaW50UHJvamVjdHMoKTtcbiAgICBhcHAucHJvbXB0QWN0aXZlUHJvamVjdCgpXG4gICAgYXBwLnByaW50QWN0aXZlUHJvamVjdCgpO1xufVxuXG5Mb2dpY0NvbnRyb2xsZXIoKTtcbiovXG5cbmZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBQcm9qZWN0TGlzdCgpO1xuXG4gICAgLypcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RMaXN0LnByb21wdFByb2plY3ROYW1lKCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdExpc3QuUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxuICAgICovXG5cbiAgICBjb25zdCB1cGRhdGVTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpXCIpO1xuXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcblxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxpc3RbaV0ubmFtZTtcblxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0udGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgICAgICB1bFRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stdWxcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaXN0W2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsaVRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stbGlcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGlUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsaVRhc2suYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsaXN0W2ldLnRhc2tzW2pdLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdWxUYXNrLmFwcGVuZENoaWxkKGxpVGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHVsVGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNldFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG4gICAgICAgIHVsLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBuZXdVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbmV3VWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmV3VWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbiAgICAgICAgbGlMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcmludFByb2plY3RzKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLXVsXCIpICYmIHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1saVwiKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBkYXRhc2V0IHZhbHVlIHRvIGlkZW50aWZ5IHdoaWNoIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrRGlhbG9nLmRhdGFzZXQucHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBtb2RpZnkgaDMgdGl0bGUgdG8gc2hvdyB0aGUgY29ycmVjdCBwcm9qZWN0IG5hbWVcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiaDNcIikudGV4dENvbnRlbnQgPSBgQWRkIGEgdGFzayB0byAke3Byb2plY3ROYW1lfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuXG4gICAgLy8gYWRkcyBvcGVyYXRpb25zIHRvIHRoZSBhZGQgcHJvamVjdCBkaWFsb2dcbiAgICBjb25zdCBhZGRQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1kaWFsb2dcIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2cgPSBhZGRQcm9qZWN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvamVjdC1kaWFsb2dcIik7XG4gICAgY2xvc2VQcm9qZWN0RGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdERpYWxvZyA9IGFkZFByb2plY3REaWFsb2cucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtcHJvamVjdC1kaWFsb2dcIik7XG4gICAgc3VibWl0UHJvamVjdERpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGFkZFByb2plY3REaWFsb2cucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gYWRkUHJvamVjdERpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVhZGxpbmVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkUHJvamVjdERpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChuZXcgcHJvamVjdExpc3QuUHJvamVjdCh0aXRsZSwgW10sIGRhdGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJlc2V0U2NyZWVuKCk7XG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xuICAgICAgICBhZGRCdXR0b25zKCk7XG4gICAgfSlcblxuICAgIC8vIGFkZHMgb3BlcmF0aW9uIHRvIGFkZCB0YXNrIGRpYWxvZ1xuICAgIGNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWRpYWxvZ1wiKTtcbiAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2cgPSBhZGRUYXNrRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1kaWFsb2dcIik7XG4gICAgY2xvc2VUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3VibWl0VGFza0RpYWxvZyA9IGFkZFRhc2tEaWFsb2cucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtdGFzay1kaWFsb2dcIik7XG4gICAgc3VibWl0VGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGFkZFRhc2tEaWFsb2cucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gYWRkVGFza0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVhZGxpbmVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkVGFza0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYWRkVGFza0RpYWxvZy5kYXRhc2V0LnByb2plY3Q7XG5cbiAgICAgICAgcHJvamVjdExpc3QuYWRkVGFzayhwcm9qZWN0TGlzdC5nZXRJbmRleEJ5TmFtZShwcm9qZWN0TmFtZSksIG5ldyBUYXNrKHRpdGxlLCBkYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgICAgICBcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXNldFNjcmVlbigpO1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgYWRkQnV0dG9ucygpO1xuICAgIH0pXG59XG5cblNjcmVlbkNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=