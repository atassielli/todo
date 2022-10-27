import { projectLibrary } from "./createProject";

export default function clearProjectList() {
    let projectList = document.querySelector('.projectNames');
    if (projectList == null) {
        return
    } else {
        projectNames.textContent = ''
    }
}