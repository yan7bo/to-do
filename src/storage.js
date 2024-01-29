import { ProjectList } from "./projects.js";
export { saveProjects, loadProjects };

function initStorage() {
    let storage = window["localStorage"];
    return storage;
}

function saveProjects(projectList) {
    const storage = window["localStorage"];
    const str = projectList.exportJSON();
    storage.setItem("projectList", str);
    console.log(`localStorage saved: {projectList: ${str}}`);
    return;
};

function loadProjects() {
    const storage = window["localStorage"];
    const str = storage.getItem("projectList");
    console.log(str);
    console.log(JSON.parse(str));
    return JSON.parse(str);
};